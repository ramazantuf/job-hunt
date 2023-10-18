package ykpsph.jobhunt.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ykpsph.jobhunt.dto.LoginDTO;
import ykpsph.jobhunt.dto.RegisterDTO;
import ykpsph.jobhunt.entity.Role;
import ykpsph.jobhunt.entity.User;
import ykpsph.jobhunt.exception.JobAPIException;
import ykpsph.jobhunt.repository.RoleRepository;
import ykpsph.jobhunt.repository.UserRepository;
import ykpsph.jobhunt.service.AuthService;

import java.util.HashSet;
import java.util.Set;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;


    @Override
    public String register(RegisterDTO registerDTO) {


        // check if username already exists
        if(userRepository.existsByUsername(registerDTO.getUsername())){
            throw new JobAPIException(HttpStatus.BAD_REQUEST, "Username already exists: "+registerDTO.getUsername());
        }

        // check if email already exists
        if(userRepository.existsByEmail(registerDTO.getEmail())) {
            throw new JobAPIException(HttpStatus.BAD_REQUEST, "Email already exists: "+registerDTO.getEmail());
        }

        User user = new User();
        user.setName(registerDTO.getName());
        user.setUsername(registerDTO.getUsername());
        user.setEmail(registerDTO.getEmail());
        user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));

        Set<Role> roles = new HashSet<>();
        Role role = roleRepository.findByName("ROLE_USER");
        roles.add(role);

        user.setRoles(roles);

        userRepository.save(user);

        return "User Registered Successfully.";
    }

    @Override
    public String login(LoginDTO loginDTO) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDTO.getUsernameOrEmail(),
                loginDTO.getPassword()
        ));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        return "User logged-in successfully.";
    }
}
