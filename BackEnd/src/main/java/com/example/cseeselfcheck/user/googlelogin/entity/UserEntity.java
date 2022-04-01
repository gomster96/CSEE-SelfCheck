package com.example.cseeselfcheck.user.googlelogin.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.*;

@Getter
@NoArgsConstructor
@Entity
public class UserEntity {
    @Id
    private Long id;
    private String email;
    private String token;

    @Builder
    public UserEntity(Long id, String email,String token) {
        this.id = id;
        this.email = email;
        this.token = token;
    }
}
