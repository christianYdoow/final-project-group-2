package com.ecommerce.pahina.controller;

import com.ecommerce.pahina.dto.LoginDto;
import com.ecommerce.pahina.dto.UsersDto;
import com.ecommerce.pahina.entity.LoginMessage;
import com.ecommerce.pahina.entity.Users;
import com.ecommerce.pahina.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/list-users")
    public List<Users> getAllUsers() {return userService.getAllUsers();}

    @PostMapping("/add-user")
    public @ResponseBody ResponseEntity<HttpStatus> addUser( @RequestBody UsersDto usersDto){
        return userService.saveUser(usersDto);
    }

    @GetMapping("/users/{id}")
    public Optional<Users> getUserById(@PathVariable long id){
        return userService.findUserById(id);
    }

    @PostMapping("/login")
    public @ResponseBody LoginMessage findUserByEmail(@RequestBody LoginDto loginDto){
        return  userService.findUserByEmail(loginDto);
    }


}



