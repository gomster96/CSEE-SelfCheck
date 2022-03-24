package com.example.cseeselfcheck.user.application;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.example.cseeselfcheck.exception.common.ExcelImportException;
import com.example.cseeselfcheck.user.domain.ReferenceUser;
import com.example.cseeselfcheck.user.domain.repository.ReferenceUserRepository;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FilenameUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

@Service
@RequiredArgsConstructor
public class ReferenceUserService {
    private final ReferenceUserRepository referenceUserRepository;

    public void createByExcel(MultipartFile file) throws IOException {
        List<ReferenceUser> referenceUsers = new ArrayList<>();


        Workbook workbook = null;
        String extension = FilenameUtils.getExtension(file.getOriginalFilename());
        if (extension.equals("xlsx")) {
            workbook = new XSSFWorkbook(file.getInputStream());
        } else if (extension.equals("xls")) {
            workbook = new HSSFWorkbook(file.getInputStream());
        } else {
            throw new ExcelImportException();
        }
        Sheet worksheet = workbook.getSheetAt(0);

        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {

            Row row = worksheet.getRow(i);
            String studentNumber = row.getCell(0).toString();
            String name = row.getCell(1).toString();
            String semester = row.getCell(2).toString();
            String phone = row.getCell(3).toString();
            referenceUsers.add(new ReferenceUser(studentNumber, name, semester, phone));
        }
        referenceUserRepository.saveAll(referenceUsers);
    }
}

