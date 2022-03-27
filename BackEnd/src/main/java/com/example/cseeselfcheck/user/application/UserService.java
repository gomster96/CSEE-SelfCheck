package com.example.cseeselfcheck.user.application;

import java.util.List;
import java.util.stream.Collectors;

import com.example.cseeselfcheck.admin.presentation.dto.AdminUserRequestDto;
import com.example.cseeselfcheck.admin.presentation.dto.AdminUserResponseDto;
import com.example.cseeselfcheck.major.domain.Major;
import com.example.cseeselfcheck.major.domain.repository.MajorRepository;
import com.example.cseeselfcheck.user.domain.dto.UserDataDto;
import com.example.cseeselfcheck.user.domain.dto.UserIndividualDataDto;
import com.example.cseeselfcheck.user.domain.repository.UserRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final MajorRepository majorRepository;

    public List<AdminUserResponseDto> getFilteredUser(AdminUserRequestDto data) {

        List<UserDataDto> userDatas = userRepository.findUserData();
        return userDatas.stream()
                        .filter(data::isUserContainLecture)
                        .filter(data::isUserContainSemester)
                        .filter(data::isSameTakePossible)
                        .map(AdminUserResponseDto::new)
                        .collect(Collectors.toList());
    }

    public List<AdminUserResponseDto> getSearchedUser(String searchWord) {

        return userRepository.findUserBySearchWord(searchWord)
                             .stream()
                             .map(AdminUserResponseDto::new)
                             .collect(Collectors.toList());
    }

    public UserIndividualDataDto getUserIndividualDataById(Long userId) {
        List<UserIndividualDataDto> individualData = userRepository.findIndividualDataById(userId);

        return individualData.get(0);
    }
}
