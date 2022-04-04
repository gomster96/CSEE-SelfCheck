package com.example.cseeselfcheck.admin.presentation;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.example.cseeselfcheck.admin.application.AdminService;
import com.example.cseeselfcheck.admin.application.dto.AdminResponseDto;
import com.example.cseeselfcheck.admin.presentation.dto.AdminAcceptRequestDto;
import com.example.cseeselfcheck.admin.presentation.dto.AdminUserRequestDto;
import com.example.cseeselfcheck.admin.presentation.dto.AdminUserResponseDto;
import com.example.cseeselfcheck.lecture.application.LectureService;
import com.example.cseeselfcheck.lecture.presentation.dto.LectureResponseDto;
import com.example.cseeselfcheck.user.application.UserService;
import com.example.cseeselfcheck.user.domain.User;
import com.example.cseeselfcheck.user.domain.repository.UserRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    /* 들어오는 데이터 꼴
    {
    "lectures" : [0, 2, 3],
    "semesters" : ["6학기", "7학기", "8학기"],
    "takePossible"  : 1
    }
    */
    private final UserService userService;
    private final AdminService adminService;
    private final LectureService lectureService;
    private final UserRepository userRepository;
    private final AdminService adminService;

    @PostMapping("/users")
    public ResponseEntity<Object> getFilteredUser(@RequestBody AdminUserRequestDto request) {

        List<AdminUserResponseDto> filteredUser = userService.getFilteredUser(request);
        return ResponseEntity.ok(filteredUser);
    }


    @GetMapping("/test-save-user")
    public ResponseEntity<Object> testSaveUser() {
        List<User> users = new ArrayList<>();
        users.add(new User("testEmail", "21600399", 1, LocalDateTime.now(), "11110000000"));
        users.add(new User( "testEmail", "21232132", 1, LocalDateTime.now(), "11110000000"));
        users.add(new User( "testEmail", "12323123", 0, LocalDateTime.now(), "10110000000"));
        users.add(new User( "testEmail", "12312323", 1, LocalDateTime.now(), "11010000000"));
        users.add(new User( "testEmail", "89789789", 0, LocalDateTime.now(), "10110000000"));
        users.add(new User( "testEmail", "78989788", 0, LocalDateTime.now(), "01110000000"));
        users.add(new User( "testEmail", "12342343", 0, LocalDateTime.now(), "01110000000"));
        users.add(new User( "testEmail", "12312321", 0, LocalDateTime.now(), "00000000000"));
        userRepository.saveAll(users);
        return ResponseEntity.ok(null);
    }
    @GetMapping("/lectures")
    public ResponseEntity<Object> getLectures(){
        List<LectureResponseDto> lectures = lectureService.getLectures();
        return ResponseEntity.ok(lectures);
    }


    @PostMapping("/checkemail")
    public ResponseEntity<Object> checkAdminByEmail(@RequestBody String adminEmail){
        System.out.println("중복 확인 요청된 이메일: "+ adminEmail);
        return ResponseEntity.ok(adminService.checkAdminByEmail(adminEmail));

    @GetMapping("/list")
    public ResponseEntity<Object> getAdmins(@RequestParam boolean isActive){
        List<AdminResponseDto> admins = adminService.findAdminsByActiveStatus(isActive);
        return ResponseEntity.ok(admins);
    }

    @PostMapping("/accept")
    public ResponseEntity<Object> acceptAdmins(@RequestBody AdminAcceptRequestDto request){
        List<AdminResponseDto> admins = adminService.activateAdminById(request);
        return ResponseEntity.ok(admins);
    }
}


