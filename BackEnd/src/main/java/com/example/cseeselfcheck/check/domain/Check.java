package com.example.cseeselfcheck.check.domain;

import com.example.cseeselfcheck.common.BaseEntity;
import com.example.cseeselfcheck.lecture.domain.Lecture;
import com.example.cseeselfcheck.lecture.domain.TakeStatus;
import com.example.cseeselfcheck.user.domain.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "LECTURECHECK")
@Getter @Setter
public class Check extends BaseEntity {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private TakeStatus status;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    private Lecture lecture;
}
