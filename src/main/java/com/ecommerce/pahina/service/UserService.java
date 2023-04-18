package com.ecommerce.pahina.service;

import com.ecommerce.pahina.dto.UsersDto;
import com.ecommerce.pahina.entity.Users;
import com.ecommerce.pahina.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    public String login (String email, String password){

        if(findUserByEmailAndPassword(email,password) != null){
            return "You've been logged in!";
        }

        else {
            return "No ACCOUNT!";
        }
    }

    public List<Users> getAllUsers(){
        return userRepository.findAll();
    }
    public Users findUserByEmailAndPassword(String email, String password){
        return userRepository.findByEmailAndPassword(email,password);
    }

    public Users findUserByEmail(String email){

        return userRepository.findByEmail(email);
    }

    public Users findUserById(int user_id){
        return userRepository.findByUserId(user_id);
    }

    public String updateUserDetails(int user_id, UsersDto usersDto){
        Users updateUsers = findUserById(user_id);
        updateUsers.setFirstName(usersDto.getFirstName());
        updateUsers.setLastName(usersDto.getLastName());
        updateUsers.setEmail(usersDto.getEmail());
        updateUsers.setPassword(passwordEncoder.encode(usersDto.getPassword()));
        updateUsers.setRoleId(usersDto.getRoleId());
        userRepository.save(updateUsers);
        return "Success";


    }




}
