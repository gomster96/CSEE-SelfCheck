package com.example.cseeselfcheck.user.presentation;

import java.io.IOException;
import java.util.List;

import com.example.cseeselfcheck.exception.common.ExcelOpenFileException;
import com.example.cseeselfcheck.user.application.ReferenceUserService;
import com.example.cseeselfcheck.user.application.UserService;
import com.example.cseeselfcheck.user.application.dto.UserFullDataResponseDto;

import com.example.cseeselfcheck.user.application.dto.UserResponseDto;
import com.example.cseeselfcheck.user.domain.repository.UserRepository;
import com.example.cseeselfcheck.user.presentation.dto.UserCheckRequestDto;
import com.example.cseeselfcheck.user.presentation.dto.UserDataSaveRequest;
import com.example.cseeselfcheck.user.application.dto.UserDataSaveResponseDto;

import lombok.extern.log4j.Log4j2;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;

@Log4j2
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

    @PostMapping("/user/save")
    public ResponseEntity<UserDataSaveResponseDto> saveUserInfo(@RequestBody UserDataSaveRequest request){
        UserDataSaveResponseDto userDataSaveResponse = userService.saveUserData(request);
        return ResponseEntity.ok(userDataSaveResponse);
    }

    @PostMapping("/user/checkemail")
    public ResponseEntity<Object> checkUserByEmail(@RequestBody String email){
        System.out.println("중복 확인 요청된 이메일: "+email);
        return ResponseEntity.ok(userService.checkUserByEmail(email));
    }

    @PostMapping("/user/checkInfo")
    public ResponseEntity<Object> checkUserInfo(@RequestBody UserCheckRequestDto data){
        List<UserResponseDto> userDatas = userService.checkUserInfo(data);
        return ResponseEntity.ok(userDatas);
    }
}