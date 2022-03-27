package com.example.cseeselfcheck.lecture.application;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.example.cseeselfcheck.exception.common.ExcelImportException;
import com.example.cseeselfcheck.lecture.domain.Lecture;
import com.example.cseeselfcheck.lecture.domain.repository.LectureDataDto;
import com.example.cseeselfcheck.lecture.domain.repository.LectureRepository;
import com.example.cseeselfcheck.lecture.presentation.dto.LectureResponseDto;

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
public class LectureService {
    private final LectureRepository lectureRepository;

    public void createByExcel(MultipartFile file) throws IOException {
        List<Lecture> lectures = new ArrayList<>();

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
            String lectureName = row.getCell(0).toString();
            String designCredit = row.getCell(1).toString();
            String lecturePosition = row.getCell(2).toString();
            String openedYear = row.getCell(3).toString();
            lectures.add(new Lecture(lectureName, designCredit, lecturePosition, openedYear));
        }
        lectureRepository.deleteAll();
        lectureRepository.saveAll(lectures);

    }

    public LectureDataDto getLectureDataById(Long lectureId) {
        List<LectureDataDto> lectureData = lectureRepository.findLectureDataById(lectureId);

        return lectureData.get(0);

    }

    public List<LectureResponseDto> getLectures() {
        return lectureRepository.findAll()
                                .stream()
                                .map(LectureResponseDto::new)
                                .collect(Collectors.toList());
    }
}
