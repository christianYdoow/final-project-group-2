package com.ecommerce.pahina.controller;

import com.ecommerce.pahina.entity.Transaction;
import com.ecommerce.pahina.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/{cardId}")
    public ResponseEntity<?> processPayment(@PathVariable("cardId") Long cardId, @RequestBody Transaction transaction) {
        try {
            paymentService.processPayment(cardId, BigDecimal.valueOf(transaction.getAmount()));
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}








