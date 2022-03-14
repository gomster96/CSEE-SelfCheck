package com.example.cseeselfcheck.lecture.domain;

import com.example.cseeselfcheck.check.domain.Check;
import com.example.cseeselfcheck.common.BaseEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter @Setter
public class Lecture extends BaseEntity  {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    private String lectureName;

    private int designCredit;

    private boolean isAdvance;

    @OneToMany(mappedBy = "lecture")
    private List<Check> checks;
}
