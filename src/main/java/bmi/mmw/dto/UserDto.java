package bmi.mmw.dto;

import bmi.mmw.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class UserDto {
    private String id;
    private String name;
    private String email;
    private String imageUrl;
    private String token;

    @Builder
    public UserDto(String id, String name, String email, String imageUrl, String token) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.imageUrl = imageUrl;
        this.token = token;
    }

    public User toEntity() {
        return User.builder().id(id).name(name).email(email).imageUrl(imageUrl).token(token)
                .build();
    }
}
