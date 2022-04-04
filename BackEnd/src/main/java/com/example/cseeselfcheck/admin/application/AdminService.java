package com.example.cseeselfcheck.admin.application;

import com.example.cseeselfcheck.admin.domain.Admin;
import com.example.cseeselfcheck.admin.domain.repository.AdminRepository;
import com.example.cseeselfcheck.user.domain.User;
import com.example.cseeselfcheck.user.domain.repository.UserRepository;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminService {
    private final AdminRepository adminRepository;

    public Optional<Admin> checkAdminByEmail(String adminEmail) {
        System.out.println(adminEmail+" 중복검사");
        return adminRepository.findByEmail(adminEmail);
    }

}
