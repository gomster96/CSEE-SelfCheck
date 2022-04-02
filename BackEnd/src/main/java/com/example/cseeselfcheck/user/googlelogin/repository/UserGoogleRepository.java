package com.example.cseeselfcheck.user.googlelogin.repository;


import com.example.cseeselfcheck.user.googlelogin.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserGoogleRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
}

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public interface UserGoogleRepository extends CrudRepository<UserEntity, String> {
}
