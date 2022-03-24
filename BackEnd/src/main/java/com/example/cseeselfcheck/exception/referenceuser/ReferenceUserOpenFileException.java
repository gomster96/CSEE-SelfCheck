package com.example.cseeselfcheck.exception.referenceuser;

import org.springframework.http.HttpStatus;

public class ReferenceUserOpenFileException extends ReferenceUserException{
    public ReferenceUserOpenFileException(){
        super("파일을 여는데 오류가 발생하였습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}


