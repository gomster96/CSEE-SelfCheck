package com.example.cseeselfcheck.user.presentation;

import java.io.IOException;

import com.example.cseeselfcheck.exception.referenceuser.ReferenceUserOpenFileException;
import com.example.cseeselfcheck.user.application.ReferenceUserService;

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
public class UserController {

    private final ReferenceUserService referenceUserService;

    @PostMapping("/upload/users")
    public ResponseEntity<Object> uploadReferenceUser(@RequestParam("file") MultipartFile file) {
        try {
            referenceUserService.createByExcel(file);
        } catch (IOException e) {
            throw new ReferenceUserOpenFileException();
        }

        return ResponseEntity.ok().body(null);
    }
}
