package com.example.cseeselfcheck.exception.major;

import org.springframework.http.HttpStatus;

public class MajorNotExistException extends MajorException{
    public MajorNotExistException(String wrongData){
        super("존재하지 않는 전공명입니다. 새롭게 추가하시거나, 전공명이 올바르게 입력되었는지 확인해주세요. : " + wrongData, HttpStatus.BAD_REQUEST);
    }
}
