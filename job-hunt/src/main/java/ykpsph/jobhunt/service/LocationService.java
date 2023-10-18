package ykpsph.jobhunt.service;

import ykpsph.jobhunt.dto.LocationDTO;

import java.util.List;

public interface LocationService {

    LocationDTO addLocation(LocationDTO locationDTO); // ADD

    List<LocationDTO> getAllLocations(); // GET ALL

    LocationDTO getLocation(Long id); // GET


    LocationDTO updateLocation(LocationDTO locationDTO, Long id); // UPDATE

    void deleteLocation(Long id); // DELETE
}
