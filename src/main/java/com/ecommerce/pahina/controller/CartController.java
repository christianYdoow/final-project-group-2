package com.ecommerce.pahina.controller;

import com.ecommerce.pahina.dto.CartsDto;
import com.ecommerce.pahina.entity.Carts;
import com.ecommerce.pahina.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("web/api/customer")
public class CartController {
    @Autowired
    private CartService cartService;


    @PostMapping("/cart")
    public @ResponseBody ResponseEntity<HttpStatus>saveCart(@RequestBody CartsDto cartsDto){
        return  cartService.saveCart(cartsDto);
    }

    @GetMapping("/cart/{userId}")
    public List<Carts>getCartByUserId(@PathVariable int userId){
        return cartService.getCartByUserId(userId);
    }

    @PutMapping("/cart/{userId}")
    public  ResponseEntity<HttpStatus>updateCartItemByUserId(@PathVariable int userId,@RequestBody CartsDto cartsDto){
        return  cartService.updateCartItemByUserId(userId,cartsDto);
    }

    @DeleteMapping("/cart/{cartId}")
    public ResponseEntity<HttpStatus>deleteCartItemById(@PathVariable long cartId){
        return cartService.deleteCartItemById(cartId);
    }

}
