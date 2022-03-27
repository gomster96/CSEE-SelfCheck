package com.example.cseeselfcheck.major.presentation;

import java.io.IOException;

import com.example.cseeselfcheck.exception.common.ExcelOpenFileException;
import com.example.cseeselfcheck.major.application.MajorService;
import com.example.cseeselfcheck.major.presentation.dto.MajorCreateRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @PostMapping("/upload/majors")
    public ResponseEntity<Object> uploadMajor(@RequestParam("file")MultipartFile file){
        try{
            majorService.createByExcel(file);
        } catch (IOException e){
            throw  new ExcelOpenFileException();
        }
        return ResponseEntity.ok().body(null);
    }

}
