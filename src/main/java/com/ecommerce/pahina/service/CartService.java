package com.ecommerce.pahina.service;

import com.ecommerce.pahina.dto.CartsDto;
import com.ecommerce.pahina.entity.Carts;
import com.ecommerce.pahina.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;


    //add new cart-----------------------------------------------------------------------------
    public ResponseEntity<HttpStatus> saveCart(CartsDto cartsDto){
        Carts cart = new Carts();
        cart.setProductId(cartsDto.getProductId());
        cart.setQuantity(cartsDto.getQuantity());
        cart.setUserId(cartsDto.getUserId());
        cartRepository.save(cart);
        return  new ResponseEntity<>(HttpStatus.OK);
    }

    //get call cart--------------------------------------------------------------------------------
    private List<Carts> getAllCarts(){
        return cartRepository.findAll();
    }

    //get cart based on the user id------------------------------------------------------------------
    public List<Carts>getCartByUserId(@PathVariable long userId ){
        List<Carts> carts=getAllCarts();
        List<Carts> filteredCarts=new ArrayList<>();
        for(Carts cart: carts){
            if(cart.getCartId()==userId){
                filteredCarts.add(cart);
            }
        }
        return filteredCarts;
    }

    //update cart by id----------------------------------------------------------------------------------
    public ResponseEntity<HttpStatus>updateCartItemById(int cartId,Carts carts){
        carts.setCartId(cartId);
        cartRepository.save(carts);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //delete cart by id----------------------------------------------------------------------------------
    public ResponseEntity<HttpStatus>deleteCartItemById(long cartId){
        cartRepository.deleteById(cartId);
        return  new ResponseEntity<>(HttpStatus.OK);
    }

}
