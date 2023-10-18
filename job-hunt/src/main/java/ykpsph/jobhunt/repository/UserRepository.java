package ykpsph.jobhunt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ykpsph.jobhunt.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username); // findBy is the standard keyword

    Boolean existsByEmail(String email); // exists is the standard keyword

    Optional<User> findByUsernameOrEmail(String username, String email);

    Boolean existsByUsername(String username);
}
