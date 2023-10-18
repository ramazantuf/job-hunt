package ykpsph.jobhunt.service;

import ykpsph.jobhunt.dto.TitleDTO;

import java.util.List;

public interface TitleService {
    TitleDTO addTitle(TitleDTO titleDTO); // ADD
    List<TitleDTO> getAllTitles(); // GET ALL
    TitleDTO getTitle(Long id); // GET

    TitleDTO updateTitle(TitleDTO titleDTO, Long id); // UPDATE

    void deleteTitle(Long id); // DELETE
}
