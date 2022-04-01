package com.example.cseeselfcheck.user.googlelogin.dto;
import com.example.cseeselfcheck.user.domain.User;
import com.example.cseeselfcheck.user.googlelogin.entity.UserEntity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserDto {
    private Long id;
    private String email;
    private String token;

    @Builder
    public UserDto(Long id, String email, String token) {
        this.id = id;
        this.email = email;
        this.token = token;
    }

    // Dto 객체를 Entity 객체로 변환해서 반환하는 유틸리티 메서드
    public UserEntity toEntity() {
        return UserEntity.builder().id(id).email(email).token(token).build();
    }
}

