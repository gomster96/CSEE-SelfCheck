package com.example.cseeselfcheck.major.presentation;

import com.example.cseeselfcheck.major.application.MajorService;
import com.example.cseeselfcheck.major.presentation.dto.MajorCreateRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MajorController {
    private final MajorService majorService;

    @PostMapping("/major")
    public ResponseEntity<Object> createMajor(@RequestBody MajorCreateRequest majorCreateRequest){

        majorService.create(majorCreateRequest);
        return ResponseEntity.ok().body(null);
    }
}
