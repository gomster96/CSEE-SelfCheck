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
    private String searchWord;

// ToDO 나중에 쓸지 모르니 남겨둠
//    public boolean isUserContainLecture(UserDataDto user){
//        System.out.println(user.getTakenStatus());
//        for(int lectureIdx : lectures){
//            if(!user.isTakenLecture(lectureIdx)) return false;
//        }
//        return true;
//    }

    public boolean isNotUserContainLecture(UserDataDto user){
        if(lectures.size() == 0) return true;
        for(int lectureIdx : lectures){
            if(user.isNotTakenLecture(lectureIdx)) return true;
        }
        return false;
    }

    public boolean isUserContainSemester(UserDataDto user){
        if(semesters.size() == 0) return true;
        for(String semester : semesters){
            if(user.isSameSemester(semester)) return true;
        }
        if(semesters.get(semesters.size()-1).equals("9학기 이상")){
            String semester = user.getSemester();
            int userSemester =  Integer.parseInt(semester.substring(0, semester.length()-2));
            return userSemester >= 9;
        }
        return false;
    }

    public boolean isSameTakePossible(UserDataDto user){
        if(takePossible == 2) return true;
        return takePossible==user.getResult();
    }
}
