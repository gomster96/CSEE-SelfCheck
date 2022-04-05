package com.example.cseeselfcheck.user.application.dto;

import com.example.cseeselfcheck.user.domain.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDataSaveResponseDto {
    private Long userId;
    private int result;

    public UserDataSaveResponseDto(User user){
        this.userId = user.getId();
        this.result = user.getResult();
    }
}
