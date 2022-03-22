package com.example.cseeselfcheck.exception.referenceuser;

import org.springframework.http.HttpStatus;

public class ReferenceUserImportException extends ReferenceUserException{
    public ReferenceUserImportException(){
        super("잘못된 양식입니다.", HttpStatus.BAD_REQUEST);
    }
}
