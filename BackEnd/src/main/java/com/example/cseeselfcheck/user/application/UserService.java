package com.example.cseeselfcheck.user.application;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import com.example.cseeselfcheck.admin.presentation.dto.AdminUserRequestDto;
import com.example.cseeselfcheck.admin.presentation.dto.AdminUserResponseDto;
import com.example.cseeselfcheck.lecture.application.dto.LectureDataDto;
import com.example.cseeselfcheck.lecture.domain.Lecture;
import com.example.cseeselfcheck.lecture.domain.repository.LectureRepository;

import com.example.cseeselfcheck.major.domain.Major;
import com.example.cseeselfcheck.major.domain.repository.MajorRepository;
import com.example.cseeselfcheck.user.application.dto.UserDataSaveResponseDto;
import com.example.cseeselfcheck.user.application.dto.UserFullDataResponseDto;
import com.example.cseeselfcheck.user.domain.User;
import com.example.cseeselfcheck.user.domain.dto.UserDataDto;
import com.example.cseeselfcheck.user.domain.dto.UserIndividualDataDto;
import com.example.cseeselfcheck.user.domain.repository.UserRepository;
import com.example.cseeselfcheck.user.presentation.dto.UserDataSaveRequest;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final LectureRepository lectureRepository;
    private final MajorRepository majorRepository;

    public Optional<User> checkUserByEmail(String email) {
        System.out.println(email+" 중복검사");
        return userRepository.findByEmail(email);
    }
    @Transactional(readOnly = true)
    public List<AdminUserResponseDto> getFilteredUser(AdminUserRequestDto data) {

        List<UserDataDto> userDatas = userRepository.findUserData(data.getSearchWord());
        return userDatas.stream()
                .filter(data::isUserContainLecture)
                .filter(data::isUserContainSemester)
                .filter(data::isSameTakePossible)
                .map(AdminUserResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public UserFullDataResponseDto getUserIndividualDataById(Long userId) {
        UserIndividualDataDto individualData = userRepository.findFirstByIndividualDataById(userId)
                .orElseThrow();
        String lectureChecker = individualData.getChecker();
        List<Lecture> lectures = lectureRepository.findAll();
        List<LectureDataDto> userLectures = lectures.stream()
                .filter(lecture -> lecture.isMandatoryLecture(lectureChecker))
                .map(LectureDataDto::new)
                .collect(Collectors.toList());
        return new UserFullDataResponseDto(individualData, userLectures);
    }

    @Transactional
    public UserDataSaveResponseDto saveUserData(UserDataSaveRequest userSaveData){
        User user = userRepository.findById(userSaveData.getUserId()).orElseThrow();
        Major userMajor = majorRepository.findFirstByStudentNumber(user.getStudentNumber()).orElseThrow();
        String checker = userMajor.getChecker();
        int result = 1;
        for(int i=0; i<checker.length(); i++){
            if(checker.charAt(i)=='1'&&  userSaveData.getTakenStatus().charAt(i) == '0'){
                result = 0;
                break;
            }
        }
        user.saveUserData(result, userSaveData);
        return new UserDataSaveResponseDto(user);
    }

    /*
    @Transactional(readOnly = true)
    public Map<String, String> validateHandling(Errors errors) {
        Map<String, String> validatorResult = new HashMap<>();


        for (FieldError error : errors.getFieldErrors()) {
            String validKeyName = String.format("valid_%s", error.getField());
            validatorResult.put(validKeyName, error.getDefaultMessage());
        }
        return validatorResult;
    }*/


}
