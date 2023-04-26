package com.ecommerce.pahina.controller;

import com.ecommerce.pahina.entity.Transaction;
import com.ecommerce.pahina.handler.ResponseHandler;
import com.ecommerce.pahina.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("web/api/transaction")
public class Transactioncontroller {
    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public List<Transaction> getAllTransactions() {
        return transactionService.getAllTransactions();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getTransactionById(@PathVariable Long id) {
        try {
            Transaction transaction = transactionService.getTransactionById(id);
            if (transaction != null) {
                return ResponseHandler.GenerateResponse("Success", HttpStatus.OK, transaction);
            } else {
                return ResponseHandler.GenerateResponse("Transaction not found", HttpStatus.NOT_FOUND, null);
            }
        } catch (Exception e) {
            return ResponseHandler.GenerateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
        }
    }

    @PostMapping
    public ResponseEntity<Object> createTransaction(@RequestBody Transaction transaction) {
        try {
            transactionService.saveTransaction(transaction);
            return ResponseHandler.GenerateResponse("Transaction created successfully", HttpStatus.CREATED, transaction);
        } catch (Exception e) {
            return ResponseHandler.GenerateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteTransactionById(@PathVariable Long id) {
        try {
            transactionService.deleteTransactionById(id);
            return ResponseHandler.GenerateResponse("Transaction deleted successfully", HttpStatus.NO_CONTENT, null);
        } catch (Exception e) {
            return ResponseHandler.GenerateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
        }
    }








}
