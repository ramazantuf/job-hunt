package ykpsph.jobhunt.service;

import ykpsph.jobhunt.dto.LoginDTO;
import ykpsph.jobhunt.dto.RegisterDTO;

public interface AuthService {
    String register(RegisterDTO registerDTO); // register
    String login(LoginDTO loginDTO); // login
}
