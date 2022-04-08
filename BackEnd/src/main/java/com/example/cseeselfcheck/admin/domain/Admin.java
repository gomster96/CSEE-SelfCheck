package com.example.cseeselfcheck.admin.domain;

import com.example.cseeselfcheck.admin.domain.dto.AdminInsertDto;
import com.example.cseeselfcheck.admin.presentation.dto.AdminInsertRequestDto;
import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Admin {

    @Id @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String adminEmail;

    @NotNull
    private String department;

    private boolean isActive;

    public void activate(){
        isActive = true;
    }

    public void insertAdminData(AdminInsertRequestDto newAdmin) {
        this.id = newAdmin.getId();
        this.adminEmail = newAdmin.getAdminEmail();
        this.name = newAdmin.getName();
        this.department = newAdmin.getDepartment();
        this.isActive = false;
    }
}