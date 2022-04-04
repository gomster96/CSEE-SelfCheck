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
import com.example.cseeselfcheck.major.domain.repository.MajorRepository;
import com.example.cseeselfcheck.user.application.dto.UserFullDataResponseDto;
import com.example.cseeselfcheck.user.domain.User;
import com.example.cseeselfcheck.user.domain.dto.UserDataDto;
import com.example.cseeselfcheck.user.domain.dto.UserIndividualDataDto;
import com.example.cseeselfcheck.user.domain.repository.UserRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final MajorRepository majorRepository;
    private final LectureRepository lectureRepository;

    public Optional<User> checkUserByEmail(String email) {
        System.out.println(email+" 중복검사");
        return userRepository.findByEmail(email);
    }

    public List<AdminUserResponseDto> getFilteredUser(AdminUserRequestDto data) {

        List<UserDataDto> userDatas = userRepository.findUserData();
        return userDatas.stream()
                .filter(data::isUserContainLecture)
                .filter(data::isUserContainSemester)
                .filter(data::isSameTakePossible)
                .map(AdminUserResponseDto::new)
                .collect(Collectors.toList());
    }

    public List<AdminUserResponseDto> getSearchedUser(String searchWord) {

        return userRepository.findUserBySearchWord(searchWord)
                .stream()
                .map(AdminUserResponseDto::new)
                .collect(Collectors.toList());
    }

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

    /* 회원가입 시, 유효성 및 중복 검사 */
    @Transactional(readOnly = true)
    public Map<String, String> validateHandling(Errors errors) {
        Map<String, String> validatorResult = new HashMap<>();

        /* 유효성 및 중복 검사에 실패한 필드 목록을 받음 */
        for (FieldError error : errors.getFieldErrors()) {
            String validKeyName = String.format("valid_%s", error.getField());
            validatorResult.put(validKeyName, error.getDefaultMessage());
        }
        return validatorResult;
    }


}
