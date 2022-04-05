package com.example.cseeselfcheck.major.domain.repository;


import java.util.Optional;

import com.example.cseeselfcheck.major.domain.Major;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MajorRepository extends JpaRepository<Major, Long> {
    Major findByMajorName(String majorName);

    @Query("select r.major from ReferenceUser r where r.studentNumber = :studentNumber")
    Optional<Major> findFirstByStudentNumber(String studentNumber);
}
