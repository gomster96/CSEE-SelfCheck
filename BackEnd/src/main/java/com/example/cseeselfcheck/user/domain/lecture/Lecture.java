package com.example.cseeselfcheck.user.domain.lecture;

import javax.persistence.*;

import com.example.cseeselfcheck.common.BaseEntity;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Lecture extends BaseEntity {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    private String lectureName;

    private int designCredit;

    private int lectureNumber;

}
