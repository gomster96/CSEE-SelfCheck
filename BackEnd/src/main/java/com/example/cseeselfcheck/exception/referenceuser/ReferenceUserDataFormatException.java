package com.example.cseeselfcheck.exception.referenceuser;

import org.springframework.http.HttpStatus;

public class ReferenceUserDataFormatException extends ReferenceUserException{
    public ReferenceUserDataFormatException(String wrongData){
        super("잘못된 포멧의 데이터 형식입니다. 잘못된 데이터 : " + wrongData, HttpStatus.BAD_REQUEST);
    }

}
