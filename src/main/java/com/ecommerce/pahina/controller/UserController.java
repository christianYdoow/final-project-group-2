package com.ecommerce.pahina.controller;
import com.ecommerce.pahina.dto.LoginDto;
import com.ecommerce.pahina.dto.UsersDto;
import com.ecommerce.pahina.entity.Users;
import com.ecommerce.pahina.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/web/api")
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
    public Users getUserById(@PathVariable long id){
        return userService.findUserById(id);
    }

    @PostMapping("/login")
    public @ResponseBody ResponseEntity<?> findUserByEmail(@RequestBody LoginDto loginDto){
        return  userService.findUserByEmail(loginDto);
    }

    @PatchMapping("/update-user-details")
    public String updateUserDetails (@RequestParam int user_id, @RequestBody UsersDto usersDto){
        return userService.updateUserDetails(user_id,usersDto);
    }



}



