package com.example.cseeselfcheck.user.domain.dto;

public interface UserDataDto {
    String getStudentNumber();
    String getName();
    String getSemester();
    String getMajorName();
    int getResult();
    String getTakenStatus();

    default boolean isTakenLecture(int lectureIdx){
        return getTakenStatus().charAt(lectureIdx) == '1';
    }

    default boolean isSameSemester(String semester){
        return getSemester().equals(semester);
    }
}
