package ykpsph.jobhunt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ykpsph.jobhunt.entity.Position;

public interface PositionRepository extends JpaRepository<Position, Long> {
}
