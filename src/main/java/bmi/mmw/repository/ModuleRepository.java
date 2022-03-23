package bmi.mmw.repository;

import bmi.mmw.domain.Module;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ModuleRepository {

    private final EntityManager em;

    public Module findOne(Long id) {
        return em.find(Module.class, id);
    }

    public List<Module> findAll() {
        return em.createQuery("select m from Module m", Module.class)
                .getResultList();
    }
}
