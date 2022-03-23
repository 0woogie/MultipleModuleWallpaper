package bmi.mmw.repository;

import bmi.mmw.domain.Search;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class SearchRepository {

    private final EntityManager em;

    public void save(Search search) {
        em.persist(search);
    }

    public Search findOne(Long id) {
        return em.find(Search.class, id);
    }

    public List<Search> findAll() {
        return em.createQuery("select s from Search s", Search.class)
                .getResultList();
    }
}
