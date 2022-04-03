package com.example.cseeselfcheck.user.presentation;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import com.example.cseeselfcheck.exception.common.ExcelOpenFileException;
import com.example.cseeselfcheck.user.application.ReferenceUserService;
import com.example.cseeselfcheck.user.application.UserService;
import com.example.cseeselfcheck.user.application.dto.UserFullDataResponseDto;
import com.example.cseeselfcheck.user.domain.User;
import com.example.cseeselfcheck.user.domain.dto.UserDataDto;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;

import javax.servlet.http.HttpSession;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserController {

    private final ReferenceUserService referenceUserService;
    private final UserService userService;

    @PostMapping("/upload/users")
    public ResponseEntity<Object> uploadReferenceUser(@RequestParam("file") MultipartFile file) {
        try {
            referenceUserService.createByExcel(file);
        } catch (IOException e) {
            throw new ExcelOpenFileException();
        }

        return ResponseEntity.ok().body(null);
    }

    @GetMapping("/user/info")
    public ResponseEntity<Object> getUserById(@RequestParam Long userId){
        UserFullDataResponseDto userIndividualData = userService.getUserIndividualDataById(userId);

        return ResponseEntity.ok(userIndividualData);
    }

    @GetMapping("/user/{email}")
    public ResponseEntity<Object> getUserByEmail(@PathVariable String email){
        Optional<User> user = userService.getUserByEmail(email);

        return ResponseEntity.ok(user);
    }
}
