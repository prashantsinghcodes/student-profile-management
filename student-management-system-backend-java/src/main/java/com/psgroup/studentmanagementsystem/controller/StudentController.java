package com.psgroup.studentmanagementsystem.controller;

import com.psgroup.studentmanagementsystem.entity.Student;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping(path = "/student")
public class StudentController {

    @PostMapping("/save")
    public void save(@RequestBody Student student) {
        System.out.println(student.toString());
    }
}
