package bmi.mmw.service;

import bmi.mmw.domain.Module;
import bmi.mmw.domain.User;
import bmi.mmw.domain.UserModule;
import bmi.mmw.repository.ModuleRepository;
import bmi.mmw.repository.UserModuleRepository;
import bmi.mmw.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserModuleService {

    private final UserRepository userRepository;
    private final ModuleRepository moduleRepository;
    private final UserModuleRepository userModuleRepository;

    @Transactional
    public void addUserModule(String userId, Long moduleId) {
        User user = userRepository.findOne(userId);
        if (user != null) {
            Module module = moduleRepository.findOne(moduleId);
            for (UserModule userModule : user.getUserModules()) {
                if (userModule.getModule().getId() == moduleId)
                    return;
            }
            UserModule um = new UserModule();
            um.setUser(user);
            um.setModule(module);
            userModuleRepository.save(um);
        }
    }

    @Transactional
    public void removeUserModule(String userId, Long moduleId) {
        if (userId == null)
            return;
        User user = userRepository.findOne(userId);
        UserModule um = null;
        if (user != null) {
            List<UserModule> umList = user.getUserModules();
            int removeIdx = -1;
            for (int i=0; i<umList.size(); i++) {
                um = umList.get(i);
                System.out.println("mid : " + um.getModule().getId());
                System.out.println("moduleId : " + moduleId);
                if (um.getModule().getId() == moduleId) {
                    removeIdx = i;
                    break;
                }
            }
            if (removeIdx >= 0) {
                userModuleRepository.remove(um);
                umList.remove(removeIdx);
            }
        }
    }
}
