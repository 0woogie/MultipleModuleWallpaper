package bmi.mmw.service;

import bmi.mmw.domain.Memo;
import bmi.mmw.domain.User;
import bmi.mmw.domain.UserModule;
import bmi.mmw.dto.UserDto;
import bmi.mmw.dto.UserInfoDto;
import bmi.mmw.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    /**
     * 회원 가입
     */
    @Transactional
    public UserInfoDto join(UserDto userDto) {
        User user;
        UserInfoDto userInfoDto = new UserInfoDto();
        if (userRepository.findOne(userDto.getId()) == null) {
            user = userDto.toEntity();
            userRepository.save(user);
        }
        else {
            user = userRepository.findOne(userDto.getId());
            for (Memo m : user.getMemos())
                userInfoDto.addMemo(m.getMemoContent());
            for (UserModule um : user.getUserModules()) {
                int moduleId = um.getModule().getId().intValue();
                userInfoDto.getModuleList().set(moduleId-1, 1);
            }
            userInfoDto.setTheme(user.getTheme());
        }
        return userInfoDto;
    }

    public List<User> findUsers() {
        return userRepository.findAll();
    }

    public User findOne(String userId) {
        return userRepository.findOne(userId);
    }

    @Transactional
    public String updateTheme(String userId, String theme) {
        User user = userRepository.findOne(userId);
        if (user != null) {
            user.setTheme(theme);
            userRepository.update(user);
            return theme;
        }
        return "user not exist";
    }

}
