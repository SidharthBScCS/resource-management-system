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

import com.app_backend.CRUD.model.Department;
import com.app_backend.CRUD.service.DepartmentService;

@RestController
@RequestMapping("/department")
public class DepartmentController {
    public final DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @PostMapping
    public Department createDepartment(@RequestBody Department department) {
        return departmentService.saveDepartment(department);
    }

    @GetMapping
    public List<Department> readDepartments() {
        return departmentService.readDepartments();
    }

    @GetMapping("/{id}")
    public Department readDepartment(@PathVariable Integer id) {
        return departmentService.readDepartment(id);
    }

    @DeleteMapping("/{id}")
    public void deleteDepartment(@PathVariable Integer id) {
        departmentService.deleteDepartment(id);
    }

    @PutMapping("/{id}")
    public Department updateDepartment(@PathVariable Integer id,@RequestBody Department department) {
        return departmentService.putDepartment(id, department);
    }

}