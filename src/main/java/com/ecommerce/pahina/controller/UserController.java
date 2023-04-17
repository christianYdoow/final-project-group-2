package com.ecommerce.pahina.controller;

import com.ecommerce.pahina.dto.UsersDto;
import com.ecommerce.pahina.entity.Users;
import com.ecommerce.pahina.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/web/api")
public class UserController {

    @Autowired
    private UserService userService;
    @GetMapping("/list-users")
    public List<Users> getAllUsers() {return userService.getAllUsers();}

    @PostMapping("/add-user")
    public String addUser (UsersDto usersDto){
        return userService.saveUser(usersDto);
    }


}
