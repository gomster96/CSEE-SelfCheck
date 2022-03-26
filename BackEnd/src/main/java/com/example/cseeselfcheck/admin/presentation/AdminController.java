package com.example.cseeselfcheck.admin.presentation;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.example.cseeselfcheck.admin.application.AdminService;
import com.example.cseeselfcheck.admin.presentation.dto.AdminSearchRequestDto;
import com.example.cseeselfcheck.admin.presentation.dto.AdminUserRequestDto;
import com.example.cseeselfcheck.major.domain.Major;
import com.example.cseeselfcheck.major.domain.repository.MajorRepository;
import com.example.cseeselfcheck.user.application.UserService;
import com.example.cseeselfcheck.user.domain.User;
import com.example.cseeselfcheck.user.domain.dto.UserDataDto;
import com.example.cseeselfcheck.user.domain.repository.UserRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {

    /* 들어오는 데이터 꼴
    {
    "lectures" : [0, 2, 3],
    "semesters" : ["6학기", "7학기", "8학기"],
    "takePossible"  : true
    }
    */
    private final UserService userService;
    private final MajorRepository majorRepository;
    private final UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<Object> getFilteredUser(@RequestBody AdminUserRequestDto request) {

        List<UserDataDto> filteredUser = userService.getFilteredUser(request);
        return ResponseEntity.ok(filteredUser);
    }

    @GetMapping("/search-user")
    public ResponseEntity<Object> getSearchUser(@RequestBody AdminSearchRequestDto request) {
        String searchWord = request.getSearchWord();
        List<UserDataDto> searchedUser = userService.getSearchedUser(searchWord);
        return ResponseEntity.ok(searchedUser);
    }

    @GetMapping("/test-save-user")
    public ResponseEntity<Object> testSaveUser() {
        List<User> users = new ArrayList<>();
        users.add(new User(majorRepository.getById(7L), "testEmail", "21600399", 1, LocalDateTime.now(), "11110000000"));
        users.add(new User(majorRepository.getById(8L), "testEmail", "21232132", 1, LocalDateTime.now(), "11110000000"));
        users.add(new User(majorRepository.getById(9L), "testEmail", "12323123", 1, LocalDateTime.now(), "10110000000"));
        users.add(new User(majorRepository.getById(10L), "testEmail", "12312323", 1, LocalDateTime.now(), "11010000000"));
        users.add(new User(majorRepository.getById(11L), "testEmail", "89789789", 1, LocalDateTime.now(), "10110000000"));
        users.add(new User(majorRepository.getById(7L), "testEmail", "78989788", 1, LocalDateTime.now(), "01110000000"));
        users.add(new User(majorRepository.getById(7L), "testEmail", "12342343", 1, LocalDateTime.now(), "01110000000"));
        users.add(new User(majorRepository.getById(8L), "testEmail", "12312321", 1, LocalDateTime.now(), "00000000000"));
        userRepository.saveAll(users);
        return ResponseEntity.ok(null);
    }
}


