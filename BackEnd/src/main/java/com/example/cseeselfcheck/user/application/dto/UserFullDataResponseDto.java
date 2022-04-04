package com.example.cseeselfcheck.user.application.dto;

import java.util.Arrays;
import java.util.List;

import com.example.cseeselfcheck.lecture.application.dto.LectureDataDto;
import com.example.cseeselfcheck.user.domain.dto.UserIndividualDataDto;

import lombok.Getter;


@Getter
public class UserFullDataResponseDto {
    private Long userId;
    private String name;
    private String studentNumber;
    private String majorName;
    private String semester;
    private String email;
    private String phone;
    private int result;
    private String takenStatus;
    private List<String> takenSemesters;
    private List<LectureDataDto> lectures;

    public UserFullDataResponseDto(UserIndividualDataDto userData, List<LectureDataDto> lectures) {
        this.userId = userData.getUserId();
        this.name = userData.getName();
        this.studentNumber = userData.getStudentNumber();
        this.majorName = userData.getMajorName();
        this.semester = userData.getSemester();
        this.email = userData.getEmail();
        this.phone = userData.getPhone();
        this.result = userData.getResult();
        this.takenStatus = userData.getTakenStatus();
        setTakenSemestsersToList(userData.getTakenSemesters());
        this.lectures = lectures;
    }

    private void setTakenSemestsersToList(String userTakenSemesters){
        if(userTakenSemesters == null) userTakenSemesters = " , , , , ";
        takenSemesters = Arrays.asList(userTakenSemesters.split(","));
    }
}
