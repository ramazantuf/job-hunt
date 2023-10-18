package ykpsph.jobhunt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ykpsph.jobhunt.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
