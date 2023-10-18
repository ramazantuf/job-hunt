package ykpsph.jobhunt.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ykpsph.jobhunt.dto.PositionDTO;
import ykpsph.jobhunt.service.PositionService;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/positions")
public class PositionController {
    private PositionService positionService;

    // only admin can perform crud operations on positions : @PreAuthorize("hasRole('ADMIN')")

    // ADD
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<PositionDTO> addPosition(@RequestBody PositionDTO positionDTO){
        PositionDTO savedPositionDTO = positionService.addPosition(positionDTO);
        return new ResponseEntity<>(savedPositionDTO, HttpStatus.CREATED);
    }

    // GET ALL
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public ResponseEntity<List<PositionDTO>> getAllPositions(){
        List<PositionDTO> positions = positionService.getAllPositions();
        return new ResponseEntity<>(positions, HttpStatus.OK);
    }

    // GET
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("{id}")
    public ResponseEntity<PositionDTO> getPosition(@PathVariable("id") Long id){
        PositionDTO positionDTO = positionService.getPosition(id);

        return new ResponseEntity<>(positionDTO, HttpStatus.OK);
    }

    // UPDATE
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<PositionDTO> updatePosition(@RequestBody PositionDTO positionDTO, @PathVariable("id") Long id){
        PositionDTO updatedPositionDTO = positionService.updatePosition(positionDTO, id);
        return new ResponseEntity<>(updatedPositionDTO, HttpStatus.OK);
    }

    // DELETE
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePosition(@PathVariable("id") Long id){
        positionService.deletePosition(id);
        return ResponseEntity.ok("Position deleted successfully.");
    }
}
