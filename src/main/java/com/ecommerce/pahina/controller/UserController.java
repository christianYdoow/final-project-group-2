package com.ecommerce.pahina.controller;

import com.ecommerce.pahina.dto.UsersDto;
import com.ecommerce.pahina.entity.Users;
import com.ecommerce.pahina.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/web/api")
public class UserController {

    @Autowired
    private UserService userService;
    @GetMapping("/list-users")
    public List<Users> getAllUsers() {return userService.getAllUsers();}
    @PostMapping("/register")
    public String register (UsersDto usersDto){
        return userService.saveUser(usersDto);
    }

    @GetMapping("/login")
    public String login (@RequestParam String email, @RequestParam String password){
        return userService.login(email, password);
    }
    @GetMapping("/user-details/{user_id}")
    public Users getUserById (@PathVariable int user_id){ return userService.findUserById(user_id);}
    @GetMapping("/user-details/{email}")
    public Users getUserByEmail (@PathVariable String email){ return userService.findUserByEmail(email);}

@PatchMapping("update-user-details")
    public String updateUserDetails (@RequestParam int user_id, @RequestBody UsersDto usersDto){
        return userService.updateUserDetails(user_id,usersDto);
}




}



