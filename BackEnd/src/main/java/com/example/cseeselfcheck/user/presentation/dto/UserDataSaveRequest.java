package com.example.cseeselfcheck.user.presentation.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDataSaveRequest {
    private Long userId;
    private String takenStatus;
    private String takenSemester;
}
