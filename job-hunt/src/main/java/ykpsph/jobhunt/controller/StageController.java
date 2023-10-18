package ykpsph.jobhunt.controller;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ykpsph.jobhunt.dto.StageDTO;
import ykpsph.jobhunt.service.StageService;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/stages")
public class StageController {

    private StageService stageService;

    // only admin can perform crud operations on stages : @PreAuthorize("hasRole('ADMIN')")

    // ADD
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<StageDTO> addStage(@RequestBody StageDTO stageDTO){
        StageDTO savedStageDTO = stageService.addStage(stageDTO);

        return new ResponseEntity<>(savedStageDTO, HttpStatus.CREATED);
    }

    // GET ALL
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public ResponseEntity<List<StageDTO>> getAllStages(){
        List<StageDTO> stages = stageService.getAllStages();
        return new ResponseEntity<>(stages, HttpStatus.OK);
    }

    // GET
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("{id}")
    public ResponseEntity<StageDTO> getStage(@PathVariable("id") Long id){
        StageDTO stageDTO = stageService.getStage(id);
        return new ResponseEntity<>(stageDTO, HttpStatus.OK);
    }

    // UPDATE
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<StageDTO> updateStage(@RequestBody StageDTO stageDTO, @PathVariable Long id){
        StageDTO updatedStageDTO = stageService.updateStage(stageDTO, id);
        return new ResponseEntity<>(updatedStageDTO, HttpStatus.OK);
    }

    // DELETE
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteStage(@PathVariable("id") Long id){
        stageService.deleteStage(id);
        return ResponseEntity.ok("Stage deleted succesfully.");
    }

}
