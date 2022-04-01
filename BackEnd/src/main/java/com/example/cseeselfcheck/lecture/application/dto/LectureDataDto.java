package com.example.cseeselfcheck.lecture.application.dto;

import java.util.Arrays;
import java.util.List;

import com.example.cseeselfcheck.lecture.domain.Lecture;

import lombok.Getter;

@Getter
public class LectureDataDto {
    private String lectureName;
    private int lecturePosition;
    private List<String> openYear;

    public LectureDataDto(Lecture lecture) {
        this.lectureName = lecture.getLectureName();
        this.lecturePosition = lecture.getLecturePosition();
        this.openYear = Arrays.asList(lecture.getOpenedYear().split(","));
    }

}
