package com.example.cseeselfcheck.user.domain.dto;

public interface UserIndividualDataDto {
    Long getUserId();
    String getName();
    String getStudentNumber();
    String getSemester();
    String getEmail();
    String getPhone();
    int getResult();
    String getTakenStatus();
    String getTakenSemesters();
    String getMajorName();
    String getChecker();
}
