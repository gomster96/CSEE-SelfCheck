package com.example.cseeselfcheck.user.config.dto;

import com.example.cseeselfcheck.user.domain.User;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class SessionUser implements Serializable {

    private String email;

    public SessionUser(User user) {
        this.email = user.getEmail();
    }
}