package com.example.cseeselfcheck.user.googlelogin.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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

    @Enumerated(EnumType.STRING)
    private Role role;

    @Builder
    public UserEntity(Long id, String email,String token, Role role) {
        this.id = id;
        this.email = email;
        this.token = token;
        this.role = role;
    }
    public UserEntity update(String email) {
        this.email = email;

        return this;
    }
    public String getRoleKey(){
        return this.role.getKey();

    @Builder
    public UserEntity(Long id, String email,String token) {
        this.id = id;
        this.email = email;
        this.token = token;
    }
}
