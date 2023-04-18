package com.ecommerce.pahina.service;

import com.ecommerce.pahina.dto.LoginDto;
import com.ecommerce.pahina.dto.UsersDto;
import com.ecommerce.pahina.entity.LoginMessage;
import com.ecommerce.pahina.entity.Users;
import com.ecommerce.pahina.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {



    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserService( UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public ResponseEntity<HttpStatus> saveUser(UsersDto usersDto){
        Users users = new Users();
        users.setFirstName(usersDto.getFirstName());
        users.setLastName(usersDto.getLastName());
        users.setEmail(usersDto.getEmail());
        users.setPassword(passwordEncoder.encode(usersDto.getPassword()));
        users.setRoleId(usersDto.getRoleId());
        userRepository.save(users);
        return new ResponseEntity<>(HttpStatus.OK);
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



    public LoginMessage findUserByEmail(LoginDto loginDto) {
        Users currentUser = userRepository.findByEmail(loginDto.getEmail());
        if (currentUser != null) {
            String password = loginDto.getPassword();
            String encodedPassword = currentUser.getPassword();
            Boolean isCorrect = passwordEncoder.matches(password, encodedPassword);
            if (isCorrect) {
                Optional<Users> user = userRepository.findOneByEmailAndPassword(loginDto.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginMessage("Login Success", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {
                return new LoginMessage("Password not Match", false);
            }
        } else {
            return new LoginMessage("Email not exist", false);
        }
    }


    public Optional findUserById(long id){
        return  userRepository.findByUserId(id);
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
