package com.example.cseeselfcheck.exception.lecture;

import org.springframework.http.HttpStatus;

public class LectureDataFormatException extends LectureException{
    public LectureDataFormatException(String wrongData){
        super("잘못된 포멧의 데이터 형식입니다. 잘못된 데이터 : " + wrongData, HttpStatus.BAD_REQUEST);
    }

}
