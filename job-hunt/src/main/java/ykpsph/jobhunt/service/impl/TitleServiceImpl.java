package ykpsph.jobhunt.service.impl;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import ykpsph.jobhunt.dto.TitleDTO;
import ykpsph.jobhunt.entity.Title;
import ykpsph.jobhunt.exception.ResourceNotFound;
import ykpsph.jobhunt.repository.TitleRepository;
import ykpsph.jobhunt.service.TitleService;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TitleServiceImpl implements TitleService {

    private TitleRepository titleRepository;
    private ModelMapper modelMapper;


    // ADD
    @Override
    public TitleDTO addTitle(TitleDTO titleDTO)
    {
        // convert TitleDTO into Title jpa entity
        Title title = modelMapper.map(titleDTO, Title.class);

        // save Title jpa entity in database
        Title savedTitle = titleRepository.save(title);

        // Convert saved Title jpa entity objcet into TitleDTO object
        TitleDTO savedTitleDTO = modelMapper.map(savedTitle, TitleDTO.class);

        return savedTitleDTO;
    }

    // GET ALL
    @Override
    public List<TitleDTO> getAllTitles()
    {
        List<Title> titles = titleRepository.findAll();

        //List<TitleDTO> titleList

        return titles.stream().map((title) -> modelMapper.map(title, TitleDTO.class)).collect(Collectors.toList());
    }

    // GET
    @Override
    public TitleDTO getTitle(Long id)
    {
        Title title = titleRepository.findById(id).orElseThrow(() -> new ResourceNotFound("Title is not found. id: "+id));

        return modelMapper.map(title, TitleDTO.class);
    }

    // UPDATE
    @Override
    public TitleDTO updateTitle(TitleDTO titleDTO, Long id)
    {
        Title title = titleRepository.findById(id).orElseThrow(() -> new ResourceNotFound("Title is not found. id: "+id));

        title.setTitleName(titleDTO.getTitleName());

        Title updatedTitle = titleRepository.save(title);

        return modelMapper.map(updatedTitle, TitleDTO.class);
    }

    // DELETE
    @Override
    public void deleteTitle(Long id)
    {
        Title title = titleRepository.findById(id).orElseThrow(() -> new ResourceNotFound("Title is not found. id: "+id));
        titleRepository.deleteById(id);
    }
}
