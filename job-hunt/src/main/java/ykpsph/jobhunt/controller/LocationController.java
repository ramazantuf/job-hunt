package ykpsph.jobhunt.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ykpsph.jobhunt.dto.LocationDTO;
import ykpsph.jobhunt.service.LocationService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/locations")
@AllArgsConstructor
public class LocationController {

    private LocationService locationService;

    // only admin can perform crud operations on locations : @PreAuthorize("hasRole('ADMIN')")

    // ADD
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<LocationDTO> addLocation(@RequestBody LocationDTO locationDTO){
        LocationDTO savedLocationDTO = locationService.addLocation(locationDTO);
        return new ResponseEntity<>(savedLocationDTO, HttpStatus.CREATED);
    }

    // GET ALL
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public ResponseEntity<List<LocationDTO>> getAllLocations() {
        List<LocationDTO> locations = locationService.getAllLocations();
        return new ResponseEntity<>(locations, HttpStatus.OK);
    }

    // GET
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("{id}")
    public ResponseEntity<LocationDTO> getLocation(@PathVariable Long id){
        LocationDTO locationDTO = locationService.getLocation(id);
        return new ResponseEntity<>(locationDTO, HttpStatus.OK);
    }

    // UPDATE
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<LocationDTO> updateLocation(@RequestBody LocationDTO locationDTO, @PathVariable("id") Long id){
        LocationDTO updatedLocationDTO = locationService.updateLocation(locationDTO, id);
        return new ResponseEntity<>(updatedLocationDTO, HttpStatus.OK);
    }

    // DELETE
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteLocation(@PathVariable("id") Long id){
        locationService.deleteLocation(id);
        return ResponseEntity.ok("Location deleted successfully.");
    }

}
