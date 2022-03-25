package com.example.cseeselfcheck.exception.common;

import com.example.cseeselfcheck.exception.CseeCheckerException;

import org.springframework.http.HttpStatus;

public class ExcelOpenFileException extends CseeCheckerException{
    public ExcelOpenFileException(){
        super("업로드할 파일을 여는데 오류가 발생하였습니다.", HttpStatus.BAD_REQUEST);
    }
}
