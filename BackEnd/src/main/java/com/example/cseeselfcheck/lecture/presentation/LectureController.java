//package com.example.cseeselfcheck.lecture.presentation;
//
//import java.io.IOException;
//
//import com.example.cseeselfcheck.exception.common.ExcelOpenFileException;
//import com.example.cseeselfcheck.lecture.application.LectureService;
//
//import com.example.cseeselfcheck.lecture.domain.Lecture;
//import com.example.cseeselfcheck.lecture.domain.repository.LectureDataDto;
//import com.example.cseeselfcheck.user.domain.dto.UserIndividualDataDto;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import lombok.RequiredArgsConstructor;
//
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/api")
//public class LectureController {
//
//    private final LectureService lectureService;
//
//    @PostMapping("/upload/lectures")
//    public ResponseEntity<Object> uploadLecture(@RequestParam("file")MultipartFile file){
//        try{
//            lectureService.createByExcel(file);
//        } catch (IOException e){
//            throw new ExcelOpenFileException();
//        }
//        return ResponseEntity.ok().body(null);
//    }
//    @GetMapping("/lecture/{lectureId}")
//    public ResponseEntity<Object> getUserById(@PathVariable Long lectureId){
//        LectureDataDto lectureData = LectureService.getLectureDataById(Lecture.id);
//
//        return ResponseEntity.ok(lectureData);
//    }
//}
