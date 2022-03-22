package com.example.cseeselfcheck.major.application;

import com.example.cseeselfcheck.major.domain.Major;
import com.example.cseeselfcheck.major.domain.repository.MajorRepository;
import com.example.cseeselfcheck.major.presentation.dto.MajorCreateRequest;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MajorService {
    private final MajorRepository majorRepository;

    public Long create(MajorCreateRequest majorCreateRequest){
        Major newMajor = new Major(majorCreateRequest.getMajorName(), majorCreateRequest.getChecker());
        Major savedMajor = majorRepository.save(newMajor);
        return savedMajor.getId();
    }
}
