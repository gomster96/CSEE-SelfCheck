package com.example.cseeselfcheck.user.application.dto;

import com.example.cseeselfcheck.user.domain.ReferenceUser;
import com.example.cseeselfcheck.user.domain.User;
import com.example.cseeselfcheck.user.domain.dto.UserCheckDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class UserResponseDto {
    private Long id;
    private String studentNumber;
    private String name;
    private String email;
    private String phone;

    public UserResponseDto(Long id, UserCheckDto user) {
        this.id = id;
        this.studentNumber = user.getStudentNumber();
        this.name = user.getName();
        this.email = user.getEmail();
        this.phone = user.getPhone();
    }
}