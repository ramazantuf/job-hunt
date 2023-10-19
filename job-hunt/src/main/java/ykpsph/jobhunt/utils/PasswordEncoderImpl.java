package ykpsph.jobhunt.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class PasswordEncoderImpl {
    public static void main(String[] args) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        System.out.println("yakup password: "+passwordEncoder.encode("password"));
        System.out.println("admin password: "+passwordEncoder.encode("admin"));
    }
}
