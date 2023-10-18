package ykpsph.jobhunt.service;

import ykpsph.jobhunt.dto.StageDTO;

import java.util.List;

public interface StageService {
    StageDTO addStage(StageDTO stageDTO); // ADD
    List<StageDTO> getAllStages(); // GET ALL

    StageDTO getStage(Long id); // GET

    StageDTO updateStage(StageDTO stageDTO, Long id); // UPDATE

    void deleteStage(Long id); // DELETE
}
