package com.example.cseeselfcheck.user.presentation;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.example.cseeselfcheck.exception.common.ExcelOpenFileException;
import com.example.cseeselfcheck.user.application.ReferenceUserService;
import com.example.cseeselfcheck.user.application.UserService;
import com.example.cseeselfcheck.user.application.dto.UserFullDataResponseDto;

import com.example.cseeselfcheck.user.domain.dto.UserRequestDto;
import com.example.cseeselfcheck.user.domain.repository.UserRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;

import javax.servlet.http.HttpSession;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserController {

    private final ReferenceUserService referenceUserService;
    private final UserService userService;
    private final UserRepository userRepository;

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

    @PostMapping("/user/checkemail")
    public ResponseEntity<Object> checkUserByEmail(@RequestBody String email){
        System.out.println("중복 확인 요청된 이메일: "+email);
        return ResponseEntity.ok(userService.checkUserByEmail(email));
    }

    /* @GetMapping("/user/signup")
    public String signup() {
        return "/user/user-join";
    }


    @PostMapping("/auth/signupProc")
    public String signupProc(@Validated UserRequestDto userDto, Errors errors, Model model) {
        if (errors.hasErrors()) {

            model.addAttribute("userDto", userDto);

            Map<String, String> validatorResult = userService.validateHandling(errors);
            for (String key : validatorResult.keySet()) {
                model.addAttribute(key, validatorResult.get(key));
            }

            return "/user/user-join";
        } userService.userSignup(userDto); return "redirect:/user/login"; } */
}
