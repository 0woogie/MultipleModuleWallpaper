package bmi.mmw.controller;

import bmi.mmw.domain.Memo;
import bmi.mmw.domain.Module;
import bmi.mmw.dto.*;
import bmi.mmw.service.MemoService;
import bmi.mmw.service.SearchService;
import bmi.mmw.service.UserModuleService;
import bmi.mmw.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;


@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;
    private final UserModuleService userModuleService;
    private final SearchService searchService;
    private final MemoService memoService;

    @CrossOrigin("http://localhost:3000")
    @PostMapping(value = "/api/v1/user", consumes = "application/json")
    public UserInfoDto save(@RequestBody UserDto userDto) {
        UserInfoDto userInfoDto = userService.join(userDto);
        for (int i : userInfoDto.getModuleList())
            System.out.println("moduleId: " + i);
        for (String m : userInfoDto.getMemoList())
            System.out.println("memo: " + m);
        return userInfoDto;
    }

    @CrossOrigin("http://localhost:3000")
    @PostMapping(value = "/api/v1/user_module", consumes = "application/json")
    public void updateUserModule(@RequestBody UserModuleDto userModuleDto) {
        System.out.println("module_id: "+userModuleDto.getModuleId());
        System.out.println("userId: " + userModuleDto.getId());
        System.out.println("on: " + userModuleDto.getOn());
        Long moduleId = Long.valueOf(userModuleDto.getModuleId());
//        System.out.println(moduleId);
        if (userModuleDto.getOn() == 1)
            userModuleService.addUserModule(userModuleDto.getId(), moduleId);
        else if (userModuleDto.getOn() == 0) {
            System.out.println("off");
            userModuleService.removeUserModule(userModuleDto.getId(), moduleId);
        }
    }

    @CrossOrigin("http://localhost:3000")
    @PostMapping(value = "/api/v1/search", consumes = "application/json")
    public void saveSearchInfo(@RequestBody SearchDto searchDto) {
        System.out.println("uid: " + searchDto.getId());
        System.out.println("content: " + searchDto.getContent());
        searchService.save(searchDto.getId(), searchDto.getContent());
    }

    @CrossOrigin("http://localhost:3000")
    @PostMapping(value = "/api/v1/theme", consumes = "application/json")
    public void updateTheme(@RequestBody ThemeDto themeDto) {
        String theme = userService.updateTheme(themeDto.getId(), themeDto.getContent());
    }

    @CrossOrigin("http://localhost:3000")
    @PostMapping(value = "/api/v1/memo", consumes = "application/json")
    public void updateMemo(@RequestBody MemoDto memoDto) {
        if (memoDto.getOn() == 1)
            memoService.addMemo(memoDto.getId(), memoDto.getContent());
        else if (memoDto.getOn() == 0)
            memoService.removeMemo(memoDto.getId(), memoDto.getContent());
    }
}
