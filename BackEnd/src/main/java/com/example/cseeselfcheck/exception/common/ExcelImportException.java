package com.example.cseeselfcheck.exception.common;

import com.example.cseeselfcheck.exception.CseeCheckerException;

import org.springframework.http.HttpStatus;

public class ExcelImportException extends CseeCheckerException {
    public ExcelImportException(){
        super("잘못된 양식의 파일입니다.", HttpStatus.BAD_REQUEST);
    }
}
