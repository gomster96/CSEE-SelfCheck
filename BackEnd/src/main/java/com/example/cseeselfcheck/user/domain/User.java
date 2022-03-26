package com.example.cseeselfcheck.user.domain;

import com.example.cseeselfcheck.common.BaseEntity;
import com.example.cseeselfcheck.major.domain.Major;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseEntity {

    @Id @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Major major;

    private String email;

    private String studentNumber;

    private int result;

    private LocalDateTime resultDate;

    private String takenStatus;

    public User(Major major, String email, String studentNumber, int result, LocalDateTime resultDate, String takenStatus) {
        this.major = major;
        this.email = email;
        this.studentNumber = studentNumber;
        this.result = result;
        this.resultDate = resultDate;
        this.takenStatus = takenStatus;
    }
}
