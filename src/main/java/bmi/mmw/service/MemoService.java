package bmi.mmw.service;

import bmi.mmw.domain.Memo;
import bmi.mmw.domain.User;
import bmi.mmw.repository.MemoRepository;
import bmi.mmw.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemoService {

    private final UserRepository userRepository;
    private final MemoRepository memoRepository;

    @Transactional
    public void addMemo(String userId, String content) {
        User user = userRepository.findOne(userId);
        if (user != null) {
            Memo memo = new Memo();
            memo.setUser(user);
            memo.setMemoContent(content);
            memo.setMemoDate(LocalDateTime.now());
            memoRepository.save(memo);
        }
    }

    @Transactional
    public void removeMemo(String userId, String content) {
        User user = userRepository.findOne(userId);
        Memo m = null;
        if (user != null) {
            List<Memo> memoList = user.getMemos();
            int removeIdx = -1;
            for (int i=0; i<memoList.size(); i++) {
                m = memoList.get(i);
                if (m.getMemoContent().equals(content)) {
                    removeIdx = i;
                    break;
                }
            }
            if (removeIdx >= 0) {
                memoRepository.remove(m);
                memoList.remove(removeIdx);
            }
        }
    }
}
