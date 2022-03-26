package com.example.cseeselfcheck.user.domain;

import javax.persistence.*;

import com.example.cseeselfcheck.exception.referenceuser.ReferenceUserDataFormatException;
import com.example.cseeselfcheck.major.domain.Major;

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

    @ManyToOne(fetch = FetchType.LAZY)
    private Major major;

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
