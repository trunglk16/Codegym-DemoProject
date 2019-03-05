package com.codegym.Brainmusic.controller;

import com.codegym.Brainmusic.model.User;
import com.codegym.Brainmusic.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/admin/users")
    public List <User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/register")
    public User createUser(@Valid @RequestBody User user) {
        return userRepository.save(user);
    }
}
