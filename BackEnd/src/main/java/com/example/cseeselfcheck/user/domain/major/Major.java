package com.example.cseeselfcheck.user.domain.major;

import java.util.List;
import javax.persistence.*;

import com.example.cseeselfcheck.common.BaseEntity;
import com.example.cseeselfcheck.user.domain.User;

@Entity
public class Major extends BaseEntity {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    private String majorName;

    @OneToMany(mappedBy = "major")
    private List<User> users;

    private String checker;
}
