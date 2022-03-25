package com.example.cseeselfcheck.exception.lecture;

import com.example.cseeselfcheck.exception.CseeCheckerException;

import org.springframework.http.HttpStatus;

public class LectureException extends CseeCheckerException {
    protected LectureException(String message, HttpStatus httpStatus) {super(message, httpStatus);}
}
