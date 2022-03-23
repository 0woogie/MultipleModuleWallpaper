package bmi.mmw.dto;

import bmi.mmw.domain.Memo;
import bmi.mmw.domain.Module;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter
public class UserInfoDto {
    private List<Integer> moduleList;
    private List<String> memoList;
    private String theme;

    public UserInfoDto() {
        moduleList = new ArrayList<>();
        moduleList.add(0);
        moduleList.add(0);
        moduleList.add(0);
        moduleList.add(0);
        memoList = new ArrayList<>();
        theme = "";
    }

    public void addMemo(String memo) {
        memoList.add(memo);
    }

}
