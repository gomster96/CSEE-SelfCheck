package com.example.cseeselfcheck.lecture.presentation.dto;

import com.example.cseeselfcheck.lecture.domain.Lecture;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LectureResponseDto {
    private String lectureName;
    private int lecturePosition;

    public LectureResponseDto(Lecture lecture) {
        this.lectureName = lecture.getLectureName();
        this.lecturePosition = lecture.getLecturePosition();
    }
}
