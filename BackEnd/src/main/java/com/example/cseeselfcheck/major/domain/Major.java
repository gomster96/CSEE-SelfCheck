package com.example.cseeselfcheck.major.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.example.cseeselfcheck.common.BaseEntity;
import com.example.cseeselfcheck.exception.major.MajorDataFormatException;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Major extends BaseEntity {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    private String majorName;

    private String checker;

    private Boolean isDeleted;

    public Major(String majorName, String checker){
        validateData(checker, true);
        this.majorName = majorName;
        this.checker = checker;
        this.isDeleted = false;
    }

    private void validateData(String data, boolean isNumber) {
        final String NUMBER_REGEX = "[0-9]+";
        if (data.matches(NUMBER_REGEX) != isNumber)
            throw new MajorDataFormatException(data);
    }
}
