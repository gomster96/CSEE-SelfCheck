package com.example.cseeselfcheck.admin.presentation.dto;

import java.util.List;

import com.example.cseeselfcheck.user.domain.dto.UserDataDto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdminUserRequestDto {

    private List<Integer> lectures;
    private List<String> semesters;
    private int takePossible;

    public boolean isUserContainLecture(UserDataDto user){
        for(int lectureIdx : lectures){
            if(!user.isTakenLecture(lectureIdx)) return false;
        }
        return true;
    }

    public boolean isUserContainSemester(UserDataDto user){
        if(semesters.size() == 0) return true;
        for(String semester : semesters){
            if(user.isSameSemester(semester)) return true;
        }
        return false;
    }

    public boolean isSameTakePossible(UserDataDto user){
        if(takePossible == 2) return true;
        return takePossible==user.getResult();
    }
}
