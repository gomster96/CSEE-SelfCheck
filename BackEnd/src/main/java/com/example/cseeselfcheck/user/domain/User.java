package com.example.cseeselfcheck.user.domain;

import com.example.cseeselfcheck.common.BaseEntity;

import lombok.*;


import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseEntity{

    @Id @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String studentNumber;

    private int result;

    private LocalDateTime resultDate;

    private String takenStatus;

    private String takenSemesterStatus;

    public User(String email, String studentNumber, int result, LocalDateTime resultDate, String takenStatus) {
        this.email = email;
        this.studentNumber = studentNumber;
        this.result = result;
        this.resultDate = resultDate;
        this.takenStatus = takenStatus;
    }
}
