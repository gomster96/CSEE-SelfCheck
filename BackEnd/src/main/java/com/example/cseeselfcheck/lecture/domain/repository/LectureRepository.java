package com.example.cseeselfcheck.lecture.domain.repository;

import com.example.cseeselfcheck.lecture.domain.Lecture;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LectureRepository extends JpaRepository<Lecture, Long> {
    List<LectureDataDto> findLectureDataById(Long lectureId);
}
