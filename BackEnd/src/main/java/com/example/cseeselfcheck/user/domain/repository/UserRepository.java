package com.example.cseeselfcheck.user.domain.repository;

import java.util.List;

import com.example.cseeselfcheck.user.domain.User;
import com.example.cseeselfcheck.user.domain.dto.UserDataDto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("select u.studentNumber as studentNumber, u.major.majorName as majorName, u.result as result, u.takenStatus as takenStatus, r.name as name, r.semester as semester " +
            "from User u, ReferenceUser r " +
            "where u.studentNumber = r.studentNumber")
    List<UserDataDto> findUserData();

    @Query("select u.studentNumber as studentNumber, u.major.majorName as majorName, u.result as result, u.takenStatus as takenStatus, r.name as name, r.semester as semester " +
            "from User u, ReferenceUser r " +
            "where u.studentNumber = r.studentNumber " +
            "and ( r.studentNumber like :searchWord% or r.name like :searchWord%)")
    List<UserDataDto> findUserBySearchWord(String searchWord);
}
