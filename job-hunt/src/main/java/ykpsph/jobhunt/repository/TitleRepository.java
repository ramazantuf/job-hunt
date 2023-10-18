package ykpsph.jobhunt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ykpsph.jobhunt.entity.Title;

public interface TitleRepository extends JpaRepository<Title, Long> {
}
