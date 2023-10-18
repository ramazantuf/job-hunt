package ykpsph.jobhunt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ykpsph.jobhunt.entity.Location;

public interface LocationRepository extends JpaRepository<Location, Long> {
}
