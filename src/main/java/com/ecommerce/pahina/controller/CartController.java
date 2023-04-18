package com.ecommerce.pahina.controller;

import com.ecommerce.pahina.dto.CartsDto;
import com.ecommerce.pahina.entity.Carts;
import com.ecommerce.pahina.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/costumer/")
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping("/cart")
    public @ResponseBody ResponseEntity<HttpStatus>saveCart(@RequestBody CartsDto cartsDto){
        return  cartService.saveCart(cartsDto);

    }
}
