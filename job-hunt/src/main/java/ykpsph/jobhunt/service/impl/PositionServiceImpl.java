package ykpsph.jobhunt.service.impl;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import ykpsph.jobhunt.dto.PositionDTO;
import ykpsph.jobhunt.entity.Position;
import ykpsph.jobhunt.exception.ResourceNotFound;
import ykpsph.jobhunt.repository.PositionRepository;
import ykpsph.jobhunt.service.PositionService;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class PositionServiceImpl implements PositionService {

    private PositionRepository positionRepository;
    private ModelMapper modelMapper;

    // ADD
    @Override
    public PositionDTO addPosition(PositionDTO positionDTO) {
        Position position = modelMapper.map(positionDTO, Position.class);

        Position savedPosition = positionRepository.save(position);

        PositionDTO savedPositionDTO = modelMapper.map(position, PositionDTO.class);

        return savedPositionDTO;
    }

    // GET ALL
    @Override
    public List<PositionDTO> getAllPositions() {
        List<Position> positions = positionRepository.findAll();
        return positions.stream().map((position) -> modelMapper.map(position, PositionDTO.class)).collect(Collectors.toList());
    }

    // GET
    @Override // made a change here @PathVariable D:
    public PositionDTO getPosition(Long id) {
        Position position = positionRepository.findById(id).orElseThrow(() -> new ResourceNotFound("Position is not found. id: "+id));
        return modelMapper.map(position, PositionDTO.class);
    }

    // UPDATE
    @Override
    public PositionDTO updatePosition(PositionDTO positionDTO, Long id) {
        Position position = positionRepository.findById(id).orElseThrow(() -> new ResourceNotFound("Position is not found. id: "+id));

        position.setPositionName(positionDTO.getPositionName());

        Position updatedPosition = positionRepository.save(position);

        return modelMapper.map(updatedPosition, PositionDTO.class);
    }

    // DELETE
    @Override
    public void deletePosition(Long id) {
        Position position = positionRepository.findById(id).orElseThrow(() -> new ResourceNotFound("Position is not found. if: "+id));
        positionRepository.deleteById(id);
    }
}
