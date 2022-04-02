package com.example.cseeselfcheck.user.domain.repository;

import java.util.List;
import java.util.Optional;

import com.example.cseeselfcheck.user.domain.User;
import com.example.cseeselfcheck.user.domain.dto.UserDataDto;
import com.example.cseeselfcheck.user.domain.dto.UserIndividualDataDto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("select u.studentNumber as studentNumber, r.major.majorName as majorName, r.major.checker as checker, u.result as result, u.takenStatus as takenStatus, r.name as name, r.semester as semester " +
            "from User u, ReferenceUser r " +
            "where u.studentNumber = r.studentNumber " +
            "and ( r.studentNumber like :searchWord% or r.name like :searchWord% )")
    List<UserDataDto> findUserData(String searchWord);



    @Query("select u.id as userId, r.name as name, u.studentNumber as studentNumber,  " +
            "r.semester as semester, u.email as email, r.phone as phone, " +
            "u.result as result, u.takenStatus as takenStatus, u.takenSemesterStatus as takenSemesters, " +
            "r.major.majorName as majorName, r.major.checker as checker " +
            "from User u, ReferenceUser r " +
            "where u.id = :userId AND u.studentNumber = r.studentNumber")
    Optional<UserIndividualDataDto> findFirstByIndividualDataById(Long userId);


    //Optional<User> findByEmail(String email);
}

