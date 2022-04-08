package com.example.cseeselfcheck.user.presentation.dto;

import com.example.cseeselfcheck.user.domain.dto.UserCheckDto;
import com.example.cseeselfcheck.user.domain.dto.UserDataDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserCheckRequestDto {

    private Long id;
    private String studentNumber;
    private String name;
    private String email;
    private String phone;

    public boolean isUserSameStudentNumber(UserCheckDto user) {
        if (user.isSameStudentNumber(studentNumber)) return true;
        return false;
    }

    public boolean isUserSameName(UserCheckDto user) {
        if (user.isSameName(name)) return true;
        return false;
    }

    public boolean isUserSamePhone(UserCheckDto user) {
        if (user.isSamePhone(name)) return true;
        return false;
    }
}