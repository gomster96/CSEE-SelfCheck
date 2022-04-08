package com.example.cseeselfcheck.user.domain.dto;

public interface UserCheckDto {
    Long getId();
    String getStudentNumber();
    String getName();
    String getEmail();
    String getPhone();

    default boolean isSameStudentNumber(String studentNumber){
        return getStudentNumber().equals(studentNumber);
    }
    default boolean isSameName(String name){
        return getName().equals(name);
    }
    default boolean isSamePhone(String phone){
        return getPhone().equals(phone);
    }
}