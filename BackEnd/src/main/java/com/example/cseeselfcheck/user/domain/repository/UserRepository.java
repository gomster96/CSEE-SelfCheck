package com.example.cseeselfcheck.user.domain.repository;

import java.util.List;

import com.example.cseeselfcheck.user.domain.User;
import com.example.cseeselfcheck.user.domain.dto.UserDataDto;
import com.example.cseeselfcheck.user.domain.dto.UserIndividualDataDto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("select u.studentNumber as studentNumber, r.major.majorName as majorName, r.major.checker as checker, u.result as result, u.takenStatus as takenStatus, r.name as name, r.semester as semester " +
            "from User u, ReferenceUser r " +
            "where u.studentNumber = r.studentNumber")
    List<UserDataDto> findUserData();

    @Query("select u.studentNumber as studentNumber, r.major.majorName as majorName, r.major.checker as checker, u.result as result, u.takenStatus as takenStatus, r.name as name, r.semester as semester " +
            "from User u, ReferenceUser r " +
            "where u.studentNumber = r.studentNumber " +
            "and ( r.studentNumber like :searchWord% or r.name like :searchWord%)")
    List<UserDataDto> findUserBySearchWord(String searchWord);

    @Query("select u.studentNumber as studentNumber, r.name as name, u.email as email, r.semester as semester, " +
            "r.major.majorName as majorName, r.phone as phone, u.takenStatus as takenStatus, " +
            "u.takenSemesterStatus as takenSemesterStatus, u.result as result " +
            "from User u, ReferenceUser r " +
            "where u.id = :userId " )
    List<UserIndividualDataDto> findIndividualDataById(Long userId);
}
