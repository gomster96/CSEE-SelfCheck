package com.example.cseeselfcheck.user.domain.repository;

import com.example.cseeselfcheck.user.domain.ReferenceUser;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReferenceUserRepository extends JpaRepository<ReferenceUser, Long> {
}
