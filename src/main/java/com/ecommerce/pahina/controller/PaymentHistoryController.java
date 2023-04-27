package com.ecommerce.pahina.controller;


import com.ecommerce.pahina.entity.PaymentHistory;
import com.ecommerce.pahina.entity.Products;
import com.ecommerce.pahina.service.PaymentHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/web/api/customer")
public class PaymentHistoryController {

    @Autowired
    PaymentHistoryService paymentHistoryService;


    @GetMapping("/payment-history")
    public ResponseEntity<Page<Object[]>> getPaymentHistory(
            @RequestParam int user_id,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int pageSize,
            @RequestParam(required = false, defaultValue = "") String searchKey,
            @RequestParam(required = false, defaultValue = "p.productname") String sortBy,
            @RequestParam(required = false, defaultValue = "ascending") String sortOrder
    ){

        Page<Object[]> products = paymentHistoryService.getPageOfPaymentHistory(user_id,page,pageSize,searchKey,sortBy, sortOrder);
        return ResponseEntity.ok(products);
    }


}
