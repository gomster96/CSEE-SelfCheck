package com.example.cseeselfcheck.lecture.presentation;

import java.io.IOException;

import com.example.cseeselfcheck.exception.common.ExcelOpenFileException;
import com.example.cseeselfcheck.lecture.application.LectureService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class LectureController {

    private final LectureService lectureService;

    @PostMapping("/upload/lectures")
    public ResponseEntity<Object> uploadLecture(@RequestParam("file")MultipartFile file){
        try{
            lectureService.createByExcel(file);
        } catch (IOException e){
            throw new ExcelOpenFileException();
        }
        return ResponseEntity.ok().body(null);
    }
}
