package com.example.cseeselfcheck.lecture.domain.repository;

import com.example.cseeselfcheck.lecture.domain.Lecture;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureRepository extends JpaRepository<Lecture, Long> {
}
