package com.example.cseeselfcheck.common;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@MappedSuperclass
@Getter @Setter
public abstract class BaseEntity {
    private Boolean isDeleted;
    private LocalDateTime regDate;
    private LocalDateTime updateDate;
}
