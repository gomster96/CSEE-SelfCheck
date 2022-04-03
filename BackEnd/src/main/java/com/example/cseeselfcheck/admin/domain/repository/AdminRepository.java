package com.example.cseeselfcheck.admin.domain.repository;

import java.util.List;

import com.example.cseeselfcheck.admin.domain.Admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AdminRepository extends JpaRepository<Admin, Long> {

    @Query("select a from Admin a where a.isActive = :isActive")
    List<Admin> findAllByActiveStatus(boolean isActive);
}
