package com.example.cseeselfcheck;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class CseeSelfCheckApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder){

        return builder.sources(CseeSelfCheckApplication.class);

    }

    public static void main(String[] args) {
        SpringApplication.run(CseeSelfCheckApplication.class, args);
    }


}
