package com.example.cseeselfcheck.exception.common;

import com.example.cseeselfcheck.exception.CseeCheckerException;

import org.springframework.http.HttpStatus;

public class CommonException extends CseeCheckerException {
    public CommonException(){
        super("알수없는 문제가 발생했습니다.", HttpStatus.BAD_REQUEST);
    }
}