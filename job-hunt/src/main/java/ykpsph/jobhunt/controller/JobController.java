package ykpsph.jobhunt.controller;

import lombok.AllArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ykpsph.jobhunt.dto.JobDTO;
import ykpsph.jobhunt.dto.TitleDTO;
import ykpsph.jobhunt.service.JobService;
import ykpsph.jobhunt.service.TitleService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/jobs")
@AllArgsConstructor
public class JobController {

    private JobService jobService;
    private TitleService titleService;

    // any user type can perform all the crud operations on jobs : @PreAuthorize("hasRole('ADMIN', 'USER')")

    // ADD
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @PostMapping
    public ResponseEntity<JobDTO> addJob(@RequestBody JobDTO jobDTO)
    {
       // List<TitleDTO> titles = titleService.getAllTitles();

        JobDTO savedJobDTO = jobService.addJob(jobDTO);

        return new ResponseEntity<>(savedJobDTO, HttpStatus.CREATED);
    }

    // GET ALL
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @GetMapping
    public ResponseEntity<List<JobDTO>> getAllJobs()
    {
        List<JobDTO> jobDTOS = jobService.getAllJobs();
        return new ResponseEntity<>(jobDTOS, HttpStatus.OK);
    }

    // GET
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<JobDTO> getJob(@PathVariable("id") Long id)
    {
        JobDTO jobDTO = jobService.getJob(id);
        return new ResponseEntity<>(jobDTO, HttpStatus.OK);
    }

    // UPDATE
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @PutMapping("{id}")
    public ResponseEntity<JobDTO> updateJob(@PathVariable("id") Long id, @RequestBody JobDTO updatedJobDTO)
    {
        JobDTO jobDTO = jobService.updateJob(updatedJobDTO, id);
        return ResponseEntity.ok(jobDTO);
    }


    // DELETE
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteJob(@PathVariable("id") Long id)
    {
        jobService.deleteJob(id);
        return ResponseEntity.ok("Job deleted successfully.");
    }
}
