package com.example.cseeselfcheck.user.domain.dto;

public interface UserDataDto {
    String getStudentNumber();
    String getName();
    String getSemester();
    String getMajorName();
    String getChecker();
    int getResult();
    String getTakenStatus();

    // ToDO 나중에 쓸지 모르니 남겨둠
//    default boolean isTakenLecture(int lectureIdx){
//        return getTakenStatus().charAt(lectureIdx) != '0';
//    }

    default boolean isNotTakenLecture(int lectureIdx){
        return getTakenStatus().charAt(lectureIdx) == '0' && getChecker().charAt(lectureIdx) == '1';
    }

    default boolean isSameSemester(String semester){
        return getSemester().equals(semester);
    }
}
