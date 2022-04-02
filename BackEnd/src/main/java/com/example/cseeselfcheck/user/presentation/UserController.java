package com.example.cseeselfcheck.user.presentation;

import java.io.IOException;

import com.example.cseeselfcheck.exception.common.ExcelOpenFileException;
import com.example.cseeselfcheck.user.application.ReferenceUserService;
import com.example.cseeselfcheck.user.application.UserService;
import com.example.cseeselfcheck.user.application.dto.UserFullDataResponseDto;

import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;

import javax.servlet.http.HttpSession;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final ReferenceUserService referenceUserService;
    private final UserService userService;
    private final HttpSession httpSession;

    @PostMapping("/upload/users")
    public ResponseEntity<Object> uploadReferenceUser(@RequestParam("file") MultipartFile file) {
        try {
            referenceUserService.createByExcel(file);
        } catch (IOException e) {
            throw new ExcelOpenFileException();
        }

        return ResponseEntity.ok().body(null);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Object> getUserById(@PathVariable Long userId){
        UserFullDataResponseDto userIndividualData = userService.getUserIndividualDataById(userId);

        return ResponseEntity.ok(userIndividualData);
    }
}
