package com.example.cseeselfcheck.user.application;

import java.util.List;
import java.util.stream.Collectors;

import com.example.cseeselfcheck.admin.presentation.dto.AdminUserRequestDto;
import com.example.cseeselfcheck.user.domain.dto.UserDataDto;
import com.example.cseeselfcheck.user.domain.repository.UserRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public List<UserDataDto> getFilteredUser(AdminUserRequestDto data){

        List<UserDataDto> userDatas = userRepository.findUserData();
        List<UserDataDto> filteredUsers = userDatas.stream()
                                                   .filter(data::isUserContainLecture)
                                                   .filter(data::isUserContainSemester)
                                                   .filter(data::isSameTakePossible)
                                                   .collect(Collectors.toList());

        return filteredUsers;
    }

}
