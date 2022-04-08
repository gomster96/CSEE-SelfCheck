package com.example.cseeselfcheck.admin.application.dto;

import com.example.cseeselfcheck.admin.domain.dto.AdminInsertDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdminInsertResponseDto {
    private Long id;
    private String name;
    private String adminEmail;
    private String department;

    public AdminInsertResponseDto(AdminInsertDto admin) {
        this.id = admin.getId();
        this.name = admin.getName();
        this.adminEmail = admin.getAdminEmail();
        this.department = admin.getDepartment();
    }
}