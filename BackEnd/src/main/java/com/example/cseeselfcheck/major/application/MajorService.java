package com.example.cseeselfcheck.major.application;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.example.cseeselfcheck.exception.common.ExcelImportException;
import com.example.cseeselfcheck.major.domain.Major;
import com.example.cseeselfcheck.major.domain.repository.MajorRepository;
import com.example.cseeselfcheck.major.presentation.dto.MajorCreateRequest;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FilenameUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

@RequiredArgsConstructor
@Service
public class MajorService {
    private final MajorRepository majorRepository;

    public Long create(MajorCreateRequest majorCreateRequest){
        Major newMajor = new Major(majorCreateRequest.getMajorName(), majorCreateRequest.getChecker());
        Major savedMajor = majorRepository.save(newMajor);
        return savedMajor.getId();
    }

    public void createByExcel(MultipartFile file) throws IOException{
        List<Major> majors = new ArrayList<>();

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

        for(int i=1; i< worksheet.getPhysicalNumberOfRows(); i++) {
            Row row = worksheet.getRow(i);
            String majorName = row.getCell(0).toString();
            String checker = row.getCell(1).toString();
            majors.add(new Major(majorName, checker));
        }
        majorRepository.deleteAll();
        majorRepository.saveAll(majors);
    }
}
