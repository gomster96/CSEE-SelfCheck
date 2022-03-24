package com.example.cseeselfcheck.exception.referenceuser;

import com.example.cseeselfcheck.exception.CseeCheckerException;

import org.springframework.http.HttpStatus;

public class ReferenceUserException extends CseeCheckerException {
    protected ReferenceUserException(String message, HttpStatus httpStatus) { super(message, httpStatus);}
}

