package com.example.cseeselfcheck.user.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.example.cseeselfcheck.exception.referenceuser.ReferenceUserDataFormatException;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReferenceUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String studentNumber;

    private String name;

    private String semester;

    private String phone;


    public ReferenceUser(String studentNumber, String name, String semester, String phone) {
        validateData(studentNumber, true);
        validateData(phone, true);
        validateData(name, false);
        this.studentNumber = studentNumber;
        this.name = name;
        this.semester = semester;
        this.phone = phone;
    }

    private void validateData(String data, boolean isNumber) {
        final String NUMBER_REGEX = "[0-9]+";
        if (data.matches(NUMBER_REGEX) != isNumber)
            throw new ReferenceUserDataFormatException(data);
    }

}
