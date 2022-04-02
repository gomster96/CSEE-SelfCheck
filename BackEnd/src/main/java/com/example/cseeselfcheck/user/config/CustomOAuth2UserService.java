package com.example.cseeselfcheck.user.config;

import com.example.cseeselfcheck.user.config.dto.OAuthAttributes;
import com.example.cseeselfcheck.user.config.dto.SessionUser;
import com.example.cseeselfcheck.user.domain.User;
import com.example.cseeselfcheck.user.domain.repository.UserRepository;
import com.example.cseeselfcheck.user.googlelogin.entity.UserEntity;
import com.example.cseeselfcheck.user.googlelogin.repository.UserGoogleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.Collections;

@RequiredArgsConstructor
@Service
public class CustomOAuth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private final UserGoogleRepository userGoogleRepository;
    private final HttpSession httpSession;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService<OAuth2UserRequest, OAuth2User> delegate = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(userRequest);

        String registrationId = userRequest.getClientRegistration().getRegistrationId(); //
        String userNameAttributeName = userRequest
                .getClientRegistration().getProviderDetails()
                .getUserInfoEndpoint().getUserNameAttributeName(); //

        OAuthAttributes attributes = OAuthAttributes.of(registrationId, userNameAttributeName, oAuth2User.getAttributes()); //

        UserEntity userEntity = saveOrUpdate(attributes);
        httpSession.setAttribute("user", new SessionUser(userEntity)); //

        return new DefaultOAuth2User(
                Collections.singleton(new SimpleGrantedAuthority(userEntity.getRoleKey())),
                attributes.getAttributes(),
                attributes.getNameAttributeKey());
    }


    private UserEntity saveOrUpdate(OAuthAttributes attributes) {
        UserEntity userEntity = userGoogleRepository.findByEmail(attributes.getEmail())
                .map(entity -> entity.update(attributes.getEmail()))
                .orElse(attributes.toEntity());

        return userGoogleRepository.save(userEntity);
    }
}