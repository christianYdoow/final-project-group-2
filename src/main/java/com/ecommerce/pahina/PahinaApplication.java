package com.ecommerce.pahina;

import com.ecommerce.pahina.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class PahinaApplication {

	@Autowired
	private EmailService emailService;

	public static void main(String[] args) {

		SpringApplication.run(PahinaApplication.class, args);
	}
//	@EventListener(ApplicationReadyEvent.class)
//	public void sendmail(){
//		String email="sammuelis1214@gmail.com";
//		String subject="Your Order has been Confirmed!";
//		String body="We are happy to inform you that your order has been confirmed and is being processed";
//		emailService.sendEmailNotification(email,subject,body);
//	}

}
