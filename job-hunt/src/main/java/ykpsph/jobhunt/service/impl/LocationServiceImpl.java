package ykpsph.jobhunt.service.impl;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import ykpsph.jobhunt.dto.LocationDTO;
import ykpsph.jobhunt.entity.Location;
import ykpsph.jobhunt.exception.ResourceNotFound;
import ykpsph.jobhunt.repository.LocationRepository;
import ykpsph.jobhunt.service.LocationService;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class LocationServiceImpl implements LocationService {

    private LocationRepository locationRepository;
    private ModelMapper modelMapper;


    // ADD
    @Override
    public LocationDTO addLocation(LocationDTO locationDTO) {
        Location location = modelMapper.map(locationDTO, Location.class);

        Location savedLocation = locationRepository.save(location);

        LocationDTO savedLocationDTO = modelMapper.map(savedLocation, LocationDTO.class);

        return savedLocationDTO;
    }

    // GET ALL
    @Override
    public List<LocationDTO> getAllLocations(){
        List<Location> locations = locationRepository.findAll();
        return locations.stream().map((location) -> modelMapper.map(location, LocationDTO.class)).collect(Collectors.toList());
    }

    // GET
    @Override
    public LocationDTO getLocation(Long id){
        Location location = locationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Location is not found. id: "+id));

        return modelMapper.map(location, LocationDTO.class);
    }

    // UPDATE
    @Override
    public LocationDTO updateLocation(LocationDTO locationDTO, Long id){
        Location location = locationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Location is not found. id: "+id));
        location.setLocationName(locationDTO.getLocationName());

        Location updatedLocation = locationRepository.save(location);

        return modelMapper.map(updatedLocation, LocationDTO.class);
    }

    // DELETE
    @Override
    public void deleteLocation(Long id){
        Location location = locationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Location is not found. id: "+id));
        locationRepository.deleteById(id);
    }
}
