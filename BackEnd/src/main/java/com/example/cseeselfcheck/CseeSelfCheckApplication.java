package com.example.cseeselfcheck;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class CseeSelfCheckApplication {

    public static void main(String[] args) {
        SpringApplication.run(CseeSelfCheckApplication.class, args);
    }

}
