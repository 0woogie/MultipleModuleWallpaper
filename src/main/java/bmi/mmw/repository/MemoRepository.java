package bmi.mmw.repository;

import bmi.mmw.domain.Memo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class MemoRepository {

    private final EntityManager em;

    public void save(Memo memo) {
        em.persist(memo);
    }

    public void remove(Memo memo) {
        em.remove(memo);
    }

    public Memo findOne(Long id) {
        return em.find(Memo.class, id);
    }

    public List<Memo> findAll() {
        return em.createQuery("select m from Memo m", Memo.class)
                .getResultList();
    }
}
