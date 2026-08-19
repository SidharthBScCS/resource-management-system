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

import com.app_backend.CRUD.model.Library;
import com.app_backend.CRUD.service.LibraryService;

@RestController
@RequestMapping("/library")
public class LibraryController {
    public final LibraryService libraryService;

    public LibraryController(LibraryService libraryService) {
        this.libraryService = libraryService;
    }

    @PostMapping
    public Library createLibrary(@RequestBody Library library) {
        return libraryService.saveLibrary(library);
    }

    @GetMapping
    public List<Library> readLibraries() {
        return libraryService.readLibraries();
    }

    @GetMapping("/{id}")
    public Library readLibrary(@PathVariable Integer id) {
        return libraryService.readLibrary(id);
    }

    @DeleteMapping("/{id}")
    public void deleteLibrary(@PathVariable Integer id) {
        libraryService.deleteLibrary(id);
    }

    @PutMapping("/{id}")
    public Library updateLibrary(@PathVariable Integer id, @RequestBody Library library) {
        return libraryService.putLibrary(id, library);
    }

}