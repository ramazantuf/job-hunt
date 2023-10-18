package ykpsph.jobhunt.service.impl;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import ykpsph.jobhunt.dto.JobDTO;
import ykpsph.jobhunt.entity.*;
import ykpsph.jobhunt.exception.ResourceNotFound;
import ykpsph.jobhunt.repository.*;
import ykpsph.jobhunt.service.JobService;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class JobServiceImpl implements JobService {
    private JobRepository jobRepository;
    private ModelMapper modelMapper;
    private TitleRepository titleRepository;
    private PositionRepository positionRepository;

    private StageRepository stageRepository;

    private LocationRepository locationRepository;

    @Override // Make changes here
    public JobDTO addJob(JobDTO jobDTO)
    {
        Job job = modelMapper.map(jobDTO, Job.class);

        Title title = titleRepository.findById(jobDTO.getTitleId())
                .orElseThrow(() -> new ResourceNotFound("Title is not found. id:"+jobDTO.getTitleId()));
        job.setTitle(title);

        // get the position
        Position position = positionRepository.findById(jobDTO.getPositionId())
                .orElseThrow(() -> new ResourceNotFound("Position is not found. id: "+jobDTO.getPositionId()));
        job.setPosition(position);

        // get the stage
        Stage stage = stageRepository.findById(jobDTO.getStageId())
                .orElseThrow(() -> new ResourceNotFound("Stage is not found. id: "+jobDTO.getStageId()));
        job.setStage(stage);

        // get the location
        Location location = locationRepository.findById(jobDTO.getLocationId())
                .orElseThrow(() -> new ResourceNotFound("Location is not found. id: "+jobDTO.getLocationId()));
        job.setLocation(location);


        Job savedJob = jobRepository.save(job);
        JobDTO savedJobDTO = modelMapper.map(savedJob, JobDTO.class);

        return savedJobDTO;
    }

    @Override // GET ALL
    public List<JobDTO> getAllJobs()
    {
        List<Job> jobs = jobRepository.findAll();

        return jobs.stream().map((job) -> modelMapper.map(job, JobDTO.class)).collect(Collectors.toList());
    }

    @Override // GET
    public JobDTO getJob(Long id)
    {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Job is not found. id: "+id));

        return modelMapper.map(job, JobDTO.class);
    }

    @Override // UPDATE
    public JobDTO updateJob(JobDTO jobDTO, Long id)
    {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Job is not found. id:"+id));

        job.setCompanyName(jobDTO.getCompanyName());
        job.setHirer(jobDTO.getHirer());
        job.setDate(jobDTO.getDate());

        Title title = titleRepository.findById(jobDTO.getTitleId())
                .orElseThrow(() -> new ResourceNotFound("Title is not found. id:"+jobDTO.getTitleId()));

        job.setTitle(title);

        Job updatedJob = jobRepository.save(job);


        return modelMapper.map(updatedJob, JobDTO.class);
    }

    @Override // DELETE
    public void deleteJob(Long id)
    {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Job is not found: "+id));
        jobRepository.deleteById(id);
    }


}
