package ykpsph.jobhunt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ykpsph.jobhunt.entity.Job;

public interface JobRepository extends JpaRepository<Job, Long> {
}
