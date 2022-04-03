package com.example.cseeselfcheck.admin.application;

import java.util.List;
import java.util.stream.Collectors;

import com.example.cseeselfcheck.admin.application.dto.AdminResponseDto;
import com.example.cseeselfcheck.admin.domain.repository.AdminRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final AdminRepository adminRepository;

    public List<AdminResponseDto> findAdminsByActiveStatus(boolean isActive) {
        return adminRepository.findAllByActiveStatus(isActive)
                              .stream()
                              .map(AdminResponseDto::new)
                              .collect(Collectors.toList());
    }
}
