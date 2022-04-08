package com.example.cseeselfcheck.admin.domain.repository;

import java.util.List;

import com.example.cseeselfcheck.admin.domain.Admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
public interface AdminRepository extends JpaRepository<Admin, Long> {
    @Query("select a.id as id from Admin a where a.adminEmail = :adminEmail")
    Optional<Admin> findByEmail(String adminEmail);

    @Query("select a from Admin a where a.isActive = :isActive")
    List<Admin> findAllByActiveStatus(boolean isActive);

}