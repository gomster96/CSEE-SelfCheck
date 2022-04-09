package com.example.cseeselfcheck.admin.application;

import com.example.cseeselfcheck.admin.application.dto.AdminInsertResponseDto;
import com.example.cseeselfcheck.admin.domain.Admin;
import com.example.cseeselfcheck.admin.domain.repository.AdminRepository;
import com.example.cseeselfcheck.admin.presentation.dto.AdminInsertRequestDto;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import com.example.cseeselfcheck.admin.application.dto.AdminResponseDto;
import com.example.cseeselfcheck.admin.presentation.dto.AdminAcceptRequestDto;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminService {
    private final AdminRepository adminRepository;


    public Optional<Admin> checkAdminByEmail(String adminEmail) {
        System.out.println(adminEmail + " 중복검사");
        return adminRepository.findByEmail(adminEmail);
    }

    public List<AdminResponseDto> findAdminsByActiveStatus(boolean isActive) {
        return adminRepository.findAllByActiveStatus(isActive)
                .stream()
                .map(AdminResponseDto::new)
                .collect(Collectors.toList());

    }

    @Transactional
    public List<AdminResponseDto> activateAdminById(AdminAcceptRequestDto acceptRequest) {
        Admin admin = adminRepository.findById(acceptRequest.getAdminId()).orElseThrow();
        admin.activate();
        return adminRepository.findAllByActiveStatus(false)
                .stream()
                .map(AdminResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<AdminInsertResponseDto> insertAdmin(AdminInsertRequestDto data) {
        Admin admin = new Admin();
        admin.insertAdminData(data);
        adminRepository.save(admin);
        System.out.println("관리자 회원가입 성공!");
        return null;
    }

    public Optional<Admin> checkIsActive(Long adminId) {
        System.out.println(adminId + " isActive 검사");
        return adminRepository.findIsActiveById(adminId);
    }
}