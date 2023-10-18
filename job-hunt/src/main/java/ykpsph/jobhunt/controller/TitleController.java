package ykpsph.jobhunt.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ykpsph.jobhunt.dto.TitleDTO;
import ykpsph.jobhunt.service.TitleService;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/titles")
public class TitleController {
    private TitleService titleService;


    // only admin can perform crud operations on titles : @PreAuthorize("hasRole('ADMIN')")

    // ADD
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<TitleDTO> addTitle(@RequestBody TitleDTO titleDTO)
    {
        TitleDTO savedTitleDTO = titleService.addTitle(titleDTO);

        return new ResponseEntity<>(savedTitleDTO, HttpStatus.CREATED);
    }

    // GET ALL
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public ResponseEntity<List<TitleDTO>> getAllTitles()
    {
        List<TitleDTO> titleDTOS = titleService.getAllTitles();
        return new ResponseEntity<>(titleDTOS, HttpStatus.OK);
        //return ResponseEntity.ok(titleDTOS);
    }

    // GET
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("{id}")
    public ResponseEntity<TitleDTO> getTitle(@PathVariable("id") Long id)
    {
        TitleDTO titleDTO = titleService.getTitle(id);
        return new ResponseEntity<>(titleDTO, HttpStatus.OK);
        //return ResponseEntity.ok(titleDTO);
    }

    // UPDATE
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<TitleDTO> updateTitle(@RequestBody TitleDTO titleDTO,@PathVariable("id") Long id)
    {
        TitleDTO updatedTitleDTO = titleService.updateTitle(titleDTO, id);
        return new ResponseEntity<>(updatedTitleDTO, HttpStatus.OK);
        //return ResponseEntity.ok(updatedTitleDTO);
    }

    // DELETE
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTitle(@PathVariable("id") Long id)
    {
        titleService.deleteTitle(id);
        return ResponseEntity.ok("Title deleted successfully.");
    }
}
