package bmi.mmw.service;

import bmi.mmw.domain.Search;
import bmi.mmw.domain.User;
import bmi.mmw.repository.SearchRepository;
import bmi.mmw.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class SearchService {

    private final UserRepository userRepository;
    private final SearchRepository searchRepository;

    @Transactional
    public void save(String userId, String content) {
        User user = userRepository.findOne(userId);
        if (user != null) {
            Search search = new Search();
            search.setUser(user);
            search.setSearchContent(content);
            search.setSearchDate(LocalDateTime.now());
            searchRepository.save(search);
        }
    }
}
