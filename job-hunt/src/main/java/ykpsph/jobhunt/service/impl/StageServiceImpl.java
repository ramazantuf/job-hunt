package ykpsph.jobhunt.service.impl;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import ykpsph.jobhunt.dto.StageDTO;
import ykpsph.jobhunt.entity.Stage;
import ykpsph.jobhunt.exception.ResourceNotFound;
import ykpsph.jobhunt.repository.StageRepository;
import ykpsph.jobhunt.service.StageService;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class StageServiceImpl implements StageService {
    private StageRepository stageRepository;
    private ModelMapper modelMapper;


    // ADD
    @Override
    public StageDTO addStage(StageDTO stageDTO) {
        Stage stage = modelMapper.map(stageDTO, Stage.class);

        Stage savedStage = stageRepository.save(stage);

        StageDTO savedStageDTO = modelMapper.map(savedStage, StageDTO.class);

        return savedStageDTO;
    }

    // GET ALL
    @Override
    public List<StageDTO> getAllStages() {
        List<Stage> stages = stageRepository.findAll();

        return stages.stream().map((stage) -> modelMapper.map(stage, StageDTO.class)).collect(Collectors.toList());
    }

    // GET
    @Override
    public StageDTO getStage(Long id) {
        Stage stage = stageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Stage is not found. id: "+id));
        return modelMapper.map(stage, StageDTO.class);
    }

    // UPDATE
    @Override
    public StageDTO updateStage(StageDTO stageDTO, Long id) {
        Stage stage = stageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Stage is not found. id: "+id));

        stage.setStageName(stageDTO.getStageName());

        Stage updatedStage = stageRepository.save(stage);


        return modelMapper.map(updatedStage, StageDTO.class);
    }

    // DELETE
    @Override
    public void deleteStage(Long id) {
        Stage stage = stageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Stage is not found. id: "+ id));
        stageRepository.deleteById(id);
    }
}
