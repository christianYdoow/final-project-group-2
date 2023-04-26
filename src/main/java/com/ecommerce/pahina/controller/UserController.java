package com.ecommerce.pahina.controller;
import com.ecommerce.pahina.dto.LoginDto;
import com.ecommerce.pahina.dto.UsersDto;
import com.ecommerce.pahina.entity.Users;
import com.ecommerce.pahina.service.CustomUsersDetailService;
import com.ecommerce.pahina.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
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
    public @ResponseBody ResponseEntity<?> findUserByEmailCustomer(@RequestBody LoginDto loginDto){
        return  userService.findUserByEmail(loginDto);
    }

    @PostMapping("/admin-login")
    public @ResponseBody ResponseEntity<?> findUserByEmailAdmin(@RequestBody LoginDto loginDto){
        return  userService.findUserByEmail(loginDto);
    }

    @PatchMapping("/update-user-details")
    public String updateUserDetails (@RequestParam int user_id, @RequestBody UsersDto usersDto){
        return userService.updateUserDetails(user_id,usersDto);
    }


    @GetMapping("/logout")
    public ResponseEntity<String> logout() {
        return ResponseEntity.ok().body("Logged out successfully");
    }

    @GetMapping("/check-role")
    public String checkRole(@RequestParam String email){
        return userService.CheckUserRole(email);
    }

}



