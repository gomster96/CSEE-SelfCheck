package com.example.cseeselfcheck.lecture.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.example.cseeselfcheck.common.BaseEntity;
import com.example.cseeselfcheck.exception.lecture.LectureDataFormatException;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Lecture extends BaseEntity {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    private String lectureName;

    private int designCredit;

    private int lecturePosition;

    private String openedYear;

    public Lecture(String lectureName, String designCredit, String lecturePosition, String openedYear) {
        validateData(designCredit, true);
        validateData(lecturePosition, true);
        this.lectureName = lectureName;
        this.designCredit = Integer.parseInt(designCredit);
        this.lecturePosition = Integer.parseInt(lecturePosition);
        this.openedYear = openedYear;
    }

    private void validateData(String data, boolean isNumber) {
        final String NUMBER_REGEX = "[0-9]+";
        if (data.matches(NUMBER_REGEX) != isNumber)
            throw new LectureDataFormatException(data);
    }
    //ToDo openedYear 에 대한 데이터 검증도 만들어야함

    public boolean isMandatoryLecture(String checker){
        return checker.charAt(lecturePosition) == '1';
    }
}
