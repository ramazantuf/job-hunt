package ykpsph.jobhunt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ykpsph.jobhunt.entity.Stage;

public interface StageRepository extends JpaRepository<Stage, Long> {
}
