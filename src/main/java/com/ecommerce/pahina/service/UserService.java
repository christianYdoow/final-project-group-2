package com.ecommerce.pahina.service;

import com.ecommerce.pahina.dto.UsersDto;
import com.ecommerce.pahina.entity.Users;
import com.ecommerce.pahina.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public String saveUser(UsersDto usersDto){
        Users users = new Users();
        users.setFirstName(usersDto.getFirstName());
        users.setLastName(usersDto.getLastName());
        users.setEmail(usersDto.getEmail());
        users.setPassword(passwordEncoder.encode(usersDto.getPassword()));
        users.setRoleId(usersDto.getRoleId());

        userRepository.save(users);
        return "Success";
    }

    public List<Users> getAllUsers(){
        return userRepository.findAll();
    }

    public Users findUserByEmail(String email){
        return userRepository.findByemail(email);
    }

    public String checker(@CurrentSecurityContext(expression = "authentication?.name")
                          String email){
        return "checker";

    }

    //testing
}
