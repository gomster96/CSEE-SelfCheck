package com.example.cseeselfcheck.exception;

import org.springframework.http.HttpStatus;

public abstract class CseeCheckerException extends RuntimeException {
    private final HttpStatus httpStatus;

    public CseeCheckerException(String message, HttpStatus httpStatus) {
        super(message);
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
}