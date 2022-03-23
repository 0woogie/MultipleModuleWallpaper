package bmi.mmw.repository;

import bmi.mmw.domain.UserModule;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class UserModuleRepository {
    private final EntityManager em;

    public void save(UserModule um) {
        em.persist(um);
    }

    public void remove(UserModule um) {
        em.remove(um);
    }
}
