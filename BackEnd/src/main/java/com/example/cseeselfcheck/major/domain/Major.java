package com.example.cseeselfcheck.major.domain;

import com.example.cseeselfcheck.common.BaseEntity;
import com.example.cseeselfcheck.user.domain.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter @Setter
public class Major extends BaseEntity {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    private String majorName;

    @OneToMany(mappedBy = "major")
    private List<User> users;
}
