package com.app_backend.CRUD.controller;

import java.util.List;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app_backend.CRUD.model.Faculty;
import com.app_backend.CRUD.service.FacultyService;

@RestController
@RequestMapping("/faculty")
public class FacultyController {
    public final FacultyService facultyService;

    public FacultyController(FacultyService facultyService) {
        this.facultyService = facultyService;
    }

    @PostMapping
    public Faculty createFaculty(@RequestBody Faculty faculty) {
        return facultyService.saveFaculty(faculty);
    }

    @GetMapping
    public List<Faculty> readFaculties() {
        return facultyService.readFaculties();
    }

    @GetMapping("/{id}")
    public Faculty readFaculty(@PathVariable Integer id) {
        return facultyService.readFaculty(id);
    }

    @DeleteMapping("/{id}")
    public void deleteFaculty(@PathVariable Integer id) {
        facultyService.deleteFaculty(id);
    }

    @PutMapping("/{id}")
    public Faculty updateFaculty(@PathVariable Integer id, @RequestBody Faculty faculty) {
        return facultyService.updateFaculty(id, faculty);
    }
    
}
