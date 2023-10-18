package ykpsph.jobhunt.service;


import ykpsph.jobhunt.dto.PositionDTO;

import java.util.List;

public interface PositionService {
    PositionDTO addPosition(PositionDTO positionDTO); // ADD
    List<PositionDTO> getAllPositions(); // GET ALL
    PositionDTO getPosition(Long id); // GET
    PositionDTO updatePosition(PositionDTO positionDTO, Long id); // UPDATE
    void deletePosition(Long id); // DELETE

    // nothing to change here

}
