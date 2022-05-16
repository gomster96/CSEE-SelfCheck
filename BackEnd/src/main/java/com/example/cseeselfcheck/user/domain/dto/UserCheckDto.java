package com.example.cseeselfcheck.user.domain.dto;

import com.example.cseeselfcheck.user.presentation.dto.UserCheckRequestDto;

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

    default boolean checkData(UserCheckRequestDto data){
        return isSameStudentNumber(data.getStudentNumber()) && isSameName(data.getName()) && isSamePhone(data.getPhone());
    }
}