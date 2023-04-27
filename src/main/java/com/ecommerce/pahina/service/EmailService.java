package com.ecommerce.pahina.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

    public void sendEmailNotification(String email,
                                      String subject,
                                      String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        String sender="pahinaecom@gmail.com";
        message.setFrom(sender);
        message.setTo(email);
        message.setSubject(subject);
        message.setText(body);
        emailSender.send(message);

        System.out.println("mail sent successfully");
    }
}
