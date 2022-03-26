package com.example.cseeselfcheck.admin.domain.repository;

import com.example.cseeselfcheck.admin.domain.Admin;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
}
