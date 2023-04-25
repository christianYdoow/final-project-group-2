package com.ecommerce.pahina.service;

import com.ecommerce.pahina.dto.LoginDto;
import com.ecommerce.pahina.dto.UsersDto;
import com.ecommerce.pahina.entity.LoginMessage;
import com.ecommerce.pahina.entity.Users;
import com.ecommerce.pahina.repository.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    CustomUsersDetailService customUsersDetailService;



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

    public List<Users> getAllUsers(){
        return userRepository.findAll();
    }
    public Optional<Users> findUserByEmailAndPassword(String email, String password){
        return userRepository.findOneByEmailAndPassword(email,password);
    }



    public ResponseEntity<?> findUserByEmail(LoginDto loginDto) {
        Users currentUser = userRepository.findByEmail(loginDto.getEmail());
        if (currentUser != null) {
            String password = loginDto.getPassword();
            String encodedPassword = currentUser.getPassword();
            boolean isCorrect = passwordEncoder.matches(password, encodedPassword);
            if (isCorrect) {

                customUsersDetailService.loadUserByUsername(loginDto.getEmail());

                Optional<Users> user = userRepository.findOneByEmailAndPassword(loginDto.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    return ResponseEntity.ok().body(new LoginMessage("Login Success", true));
                } else {
                    return ResponseEntity.badRequest().body(new LoginMessage("Login Failed", false));
                }
            } else {
                return ResponseEntity.badRequest().body(new LoginMessage("Password not Match", false));
            }
        } else {
            return ResponseEntity.badRequest().body(new LoginMessage("Email not exist", false));
        }
    }


    public Users findUserById(long id){
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
