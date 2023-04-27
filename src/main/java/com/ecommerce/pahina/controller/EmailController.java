package com.ecommerce.pahina.controller;

import com.ecommerce.pahina.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(name = "web/api/email")
public class EmailController {

    @Autowired
    EmailService emailService;

    @PostMapping ("/sendEmail")
    public ResponseEntity<String>sendOrderNotification(@RequestBody String email,String subject,String body ){
        emailService.sendEmailNotification(email, subject, body);
        return ResponseEntity.ok("email notification sent successfully");
    }
}
