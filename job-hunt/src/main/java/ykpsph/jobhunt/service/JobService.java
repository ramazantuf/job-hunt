package ykpsph.jobhunt.service;

import ykpsph.jobhunt.dto.JobDTO;

import java.util.List;

public interface JobService {
    JobDTO addJob(JobDTO jobDTO); // ADD
    List<JobDTO> getAllJobs(); // GET ALL

    JobDTO getJob(Long id); // GET

    JobDTO updateJob(JobDTO jobDTO, Long id); // UPDATE

    void deleteJob(Long id); // DELETE


}
