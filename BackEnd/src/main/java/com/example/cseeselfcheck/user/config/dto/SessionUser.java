package com.example.cseeselfcheck.user.config.dto;

import com.example.cseeselfcheck.user.googlelogin.entity.UserEntity;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class SessionUser implements Serializable {
    private String email;

    public SessionUser(UserEntity userEntity){
        this.email = userEntity.getEmail();
    }
}

    private String email;

    public SessionUser(UserEntity userEntity) {
        this.email = userEntity.getEmail();
    }
}