package com.example.cseeselfcheck.user.domain;

import com.example.cseeselfcheck.common.BaseEntity;
import com.example.cseeselfcheck.user.domain.major.Major;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter @Setter
public class User extends BaseEntity {

    @Id @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Major major;

    private String name;

    private String email;

    private String semester;

    private String phone;

    private String studentNumber;

    private int result;

    private String takenStatus;
}
