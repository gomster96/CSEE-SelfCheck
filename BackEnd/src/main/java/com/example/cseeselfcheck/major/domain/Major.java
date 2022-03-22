package com.example.cseeselfcheck.major.domain;

import java.util.List;
import javax.persistence.*;

import com.example.cseeselfcheck.common.BaseEntity;
import com.example.cseeselfcheck.user.domain.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
//public class Major extends BaseEntity {
public class Major extends BaseEntity {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    private String majorName;

    private String checker;

    private Boolean isDeleted;

    public Major(String majorName, String checker){
        this.majorName = majorName;
        this.checker = checker;
        this.isDeleted = false;
    }
}
