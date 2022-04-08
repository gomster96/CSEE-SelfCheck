package com.example.cseeselfcheck.user.domain.repository;

import com.example.cseeselfcheck.user.domain.ReferenceUser;

import com.example.cseeselfcheck.user.domain.dto.UserCheckDto;
import com.example.cseeselfcheck.user.domain.dto.UserDataDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ReferenceUserRepository extends JpaRepository<ReferenceUser, Long> {
    @Query("select r.id as id, r.studentNumber as studentNumber, r.name as name, r.phone as phone from ReferenceUser r where r.studentNumber = :studentNumber")
    List<UserCheckDto> findByStudentNumber(String studentNumber);
}
