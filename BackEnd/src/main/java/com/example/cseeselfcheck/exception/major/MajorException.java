package com.example.cseeselfcheck.exception.major;

import com.example.cseeselfcheck.exception.CseeCheckerException;

import org.springframework.http.HttpStatus;

public class MajorException extends CseeCheckerException {
    protected MajorException(String message, HttpStatus httpStatus) {super(message, httpStatus);}
}
