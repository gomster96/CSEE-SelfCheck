package com.example.cseeselfcheck.admin.domain;

import com.example.cseeselfcheck.common.BaseEntity;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
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
}
