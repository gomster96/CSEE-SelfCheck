package com.example.cseeselfcheck.user.googlelogin.service;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.cseeselfcheck.user.googlelogin.dto.UserDto;
import com.example.cseeselfcheck.user.googlelogin.repository.UserGoogleRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserGoogleService {

    private final UserGoogleRepository userGoogleRepository;

    @Transactional
    public String save(UserDto userDto) {
        return userGoogleRepository.save(userDto.toEntity()).getEmail();
    }
}
