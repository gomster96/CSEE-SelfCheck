package com.example.cseeselfcheck.admin.presentation;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.example.cseeselfcheck.admin.application.AdminService;
import com.example.cseeselfcheck.admin.application.dto.AdminInsertResponseDto;
import com.example.cseeselfcheck.admin.application.dto.AdminResponseDto;
import com.example.cseeselfcheck.admin.presentation.dto.AdminAcceptRequestDto;
import com.example.cseeselfcheck.admin.presentation.dto.AdminInsertRequestDto;
import com.example.cseeselfcheck.admin.presentation.dto.AdminUserRequestDto;
import com.example.cseeselfcheck.admin.presentation.dto.AdminUserResponseDto;
import com.example.cseeselfcheck.lecture.application.LectureService;
import com.example.cseeselfcheck.lecture.presentation.dto.LectureResponseDto;
import com.example.cseeselfcheck.user.application.UserService;
import com.example.cseeselfcheck.user.application.dto.UserResponseDto;
import com.example.cseeselfcheck.user.domain.User;
import com.example.cseeselfcheck.user.domain.repository.UserRepository;

import com.example.cseeselfcheck.user.presentation.dto.UserCheckRequestDto;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

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

    @PostMapping("/users")
    public ResponseEntity<Object> getFilteredUser(@RequestBody AdminUserRequestDto request) {

        List<AdminUserResponseDto> filteredUser = userService.getFilteredUser(request);
        return ResponseEntity.ok(filteredUser);
    }


    @GetMapping("/test-save-user")
    public ResponseEntity<Object> testSaveUser() {
        List<User> users = new ArrayList<>();
        users.add(new User("testEmail", "21600399", 1, LocalDateTime.now(), "11110000000"));
        users.add(new User("testEmail", "21232132", 1, LocalDateTime.now(), "11110000000"));
        users.add(new User("testEmail", "12323123", 0, LocalDateTime.now(), "10110000000"));
        users.add(new User("testEmail", "12312323", 1, LocalDateTime.now(), "11010000000"));
        users.add(new User("testEmail", "89789789", 0, LocalDateTime.now(), "10110000000"));
        users.add(new User("testEmail", "78989788", 0, LocalDateTime.now(), "01110000000"));
        users.add(new User("testEmail", "12342343", 0, LocalDateTime.now(), "01110000000"));
        users.add(new User("testEmail", "12312321", 0, LocalDateTime.now(), "00000000000"));
        userRepository.saveAll(users);
        return ResponseEntity.ok(null);
    }

    @GetMapping("/lectures")
    public ResponseEntity<Object> getLectures() {
        List<LectureResponseDto> lectures = lectureService.getLectures();
        return ResponseEntity.ok(lectures);
    }


    @PostMapping("/checkemail")
    public ResponseEntity<Object> checkAdminByEmail(@RequestBody String adminEmail) {
        String ae = adminEmail.replace("\"", "");
        System.out.println("중복 확인 요청된 이메일: " + ae);
        return ResponseEntity.ok(adminService.checkAdminByEmail(ae));
    }

    @GetMapping("/list")
    public ResponseEntity<Object> getAdmins(@RequestParam boolean isActive) {
        List<AdminResponseDto> admins = adminService.findAdminsByActiveStatus(isActive);
        return ResponseEntity.ok(admins);
    }

    @PostMapping("/accept")
    public ResponseEntity<Object> acceptAdmins(@RequestBody AdminAcceptRequestDto request) {
        List<AdminResponseDto> admins = adminService.activateAdminById(request);
        return ResponseEntity.ok(admins);
    }

    @PostMapping("/signup")
    public ResponseEntity<Object> insertAdmin(@RequestBody AdminInsertRequestDto data) {
        List<AdminInsertResponseDto> admins = adminService.insertAdmin(data);
        return ResponseEntity.ok(admins);
    }

    @PostMapping("/isActive")
    public ResponseEntity<Object> checkIsActive(@RequestBody Long adminId) {
        return ResponseEntity.ok(adminService.checkIsActive(adminId));
    }

    @PostMapping(value = "/export", produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")

    public ResponseEntity<Object> exportUserData(@RequestBody AdminUserRequestDto request) throws IOException {

        Map<String, Object> userExcelData = userService.getUserExcelData(request);
        Workbook workbook = new XSSFWorkbook();

        Sheet sheet = workbook.createSheet();


        // createHead
        createRow(sheet, (List<String>) userExcelData.get("head"), 0);
        List<List<String>> bodies = (List<List<String>>) userExcelData.get("body");
        for (int i = 0; i < bodies.size(); i++) {
            createRow(sheet, bodies.get(i), i + 1);
        }
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        workbook.write(os);
        os.close(); // 보낼때 outputStream 으로 보내야한다....
        return ResponseEntity.ok()
                             .header(HttpHeaders.CONTENT_DISPOSITION, "attachement;filename=\"" + userExcelData.get("filename") + ".xlsx" + "\"")
                             .header(HttpHeaders.CONTENT_TYPE, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
                             .body(new ByteArrayResource(os.toByteArray()));


    }

    // ToDo for xls file
    //@PostMapping(value = "/export", produces = "application/vnd.ms-excel")
    //Workbook workbook = new HSSFWorkbook();
    //        return ResponseEntity.ok()
    //                             .header(HttpHeaders.CONTENT_DISPOSITION, "attachement;filename=\"" + userExcelData.get("filename")+ ".xls" + "\"")
    //                             .header(HttpHeaders.CONTENT_TYPE, "application/vnd.ms-excel")
    //                             .body(new ByteArrayResource(os.toByteArray()));

    public void createRow(Sheet sheet, List<String> cellList, int rowNum) {
        Row row = sheet.createRow(rowNum);
        for (int i = 0; i < cellList.size(); i++) {
            row.createCell(i).setCellValue(String.valueOf(cellList.get(i)));
        }
    }
}