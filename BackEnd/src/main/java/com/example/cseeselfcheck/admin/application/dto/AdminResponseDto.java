package com.example.cseeselfcheck.admin.application.dto;

import com.example.cseeselfcheck.admin.domain.Admin;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdminResponseDto {
    private String name;
    private String adminEmail;
    private String department;

    public AdminResponseDto(Admin admin) {
        this.name = admin.getName();
        this.adminEmail = admin.getAdminEmail();
        this.department = admin.getDepartment();
    }
}
