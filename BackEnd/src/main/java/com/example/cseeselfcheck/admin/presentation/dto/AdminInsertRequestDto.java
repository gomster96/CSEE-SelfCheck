package com.example.cseeselfcheck.admin.presentation.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdminInsertRequestDto {
    private Long id;
    private String adminEmail;
    private String name;
    private String department;
}