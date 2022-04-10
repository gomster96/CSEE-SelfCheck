package com.example.cseeselfcheck.admin.presentation.dto;

import com.example.cseeselfcheck.user.domain.dto.UserDataDto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AdminUserResponseDto {
    private String studentNumber;
    private String name;
    private String semester;
    private String majorName;
    private int result;
    private String takenStatus;

    public AdminUserResponseDto(UserDataDto userdata) {
        this.studentNumber = userdata.getStudentNumber();
        this.name = userdata.getName();
        this.semester = userdata.getSemester();
        this.majorName = userdata.getMajorName();
        this.result = userdata.getResult();
        this.takenStatus = userdata.getTakenStatus();
        reflectChecker(userdata.getChecker());
    }

    private void reflectChecker(String checker){
        StringBuilder sb = new StringBuilder("");
        for(int i=0; i<checker.length(); i++){
            if(checker.charAt(i)=='1' && takenStatus.charAt(i)=='0') sb.append('-');
            else if(checker.charAt(i)=='1' && takenStatus.charAt(i)=='2') sb.append('*');
            else if(checker.charAt(i)=='1' && takenStatus.charAt(i)=='3') sb.append('+');
            else sb.append(takenStatus.charAt(i));
        }
        takenStatus = sb.toString();
    }
}
