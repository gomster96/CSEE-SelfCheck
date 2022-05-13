package com.example.cseeselfcheck.user.application;

import java.util.*;
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
import com.example.cseeselfcheck.user.application.dto.UserResponseDto;
import com.example.cseeselfcheck.user.domain.User;
import com.example.cseeselfcheck.user.domain.dto.UserCheckDto;
import com.example.cseeselfcheck.user.domain.dto.UserDataDto;
import com.example.cseeselfcheck.user.domain.dto.UserIndividualDataDto;
import com.example.cseeselfcheck.user.domain.repository.ReferenceUserRepository;
import com.example.cseeselfcheck.user.domain.repository.UserRepository;
import com.example.cseeselfcheck.user.presentation.dto.UserCheckRequestDto;
import com.example.cseeselfcheck.user.presentation.dto.UserDataSaveRequest;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final ReferenceUserRepository referenceUserRepository;
    private final LectureRepository lectureRepository;
    private final MajorRepository majorRepository;

    public Optional<User> checkUserByEmail(String email) {
        System.out.println(email + " 중복검사");
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
    public UserDataSaveResponseDto saveUserData(UserDataSaveRequest userSaveData) {
        User user = userRepository.findById(userSaveData.getUserId()).orElseThrow();
        Major userMajor = majorRepository.findFirstByStudentNumber(user.getStudentNumber()).orElseThrow();
        String checker = userMajor.getChecker();
        int result = 1;
        for (int i = 0; i < checker.length(); i++) {
            if (checker.charAt(i) == '1' && userSaveData.getTakenStatus().charAt(i) == '0') {
                result = 0;
                break;
            }
        }
        user.saveUserData(result, userSaveData);
        return new UserDataSaveResponseDto(user);
    }

    @Transactional
    public List<UserResponseDto> checkUserInfo(UserCheckRequestDto data) {
        List<UserCheckDto> userDatas = referenceUserRepository.findByStudentNumber(data.getStudentNumber());
        User user = new User();
        if (userDatas.isEmpty()) {
            System.out.println("체크 요청 실패!");
            return null;
        } else {
            System.out.println("체크 요청 성공!");
            user.insertUserData(data);
            userRepository.save(user);
            System.out.println("회원가입 성공!");
            return userDatas.stream()
                            .map(UserResponseDto::new)
                            .collect(Collectors.toList());
        }


    }

    public Map<String, Object> getUserExcelData(AdminUserRequestDto data) {
        List<AdminUserResponseDto> userDatas = getFilteredUser(data);
        List<Lecture> lectures = lectureRepository.findAll();
        Map<String, Object> excelMap = new HashMap<>();
        excelMap.put("filename", "CSEE_Checker_Student");
        excelMap.put("head", Arrays.asList("학번", "이름", "학기", "전공", "판정", "수강상태"));
        List<Object> excelBodyDatas = userDatas.stream()
                                               .map(bodyData -> Arrays.asList(bodyData.getStudentNumber(), bodyData.getName(), bodyData.getSemester(), bodyData.getMajorName(), bodyData.getResult() == 1 ? "가능" : "불가능", parsetakenStatusToLecture(lectures, bodyData.getTakenStatus())))
                                               .collect(Collectors.toList());
        excelMap.put("body", excelBodyDatas);
        return excelMap;
    }

    private String parsetakenStatusToLecture(List<Lecture> lectures, String takenStatus) {
        StringBuilder sb = new StringBuilder("");
        for (Lecture lecture : lectures) {
            if (takenStatus.charAt(lecture.getLecturePosition()) == '-')
                sb.append(lecture.getLectureName()).append(", ");
            if (takenStatus.charAt(lecture.getLecturePosition()) == '+')
                sb.append(lecture.getLectureName()).append(" 병수예정, ");
        }
        if (sb.length() > 2)
            sb.delete(sb.length() - 2, sb.length());
        return sb.toString();

    }
}
