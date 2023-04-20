package com.ecommerce.pahina.service;

import com.ecommerce.pahina.dto.CartsDto;
import com.ecommerce.pahina.dto.UsersDto;
import com.ecommerce.pahina.entity.Carts;
import com.ecommerce.pahina.entity.Products;
import com.ecommerce.pahina.entity.Users;
import com.ecommerce.pahina.repository.CartRepository;
import com.ecommerce.pahina.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserService userService;

    private Integer getUserByRole(long userId){
      Users user=userService.findUserById(userId);
      return user.getRoleId();
    }

    //get call cart--------------------------------------------------------------------------------
    private List<Carts> getAllCarts(){
        return cartRepository.findAll();
    }
    private boolean isProductExists(long productId) {
        Optional<Carts> product = cartRepository.findById(productId);
        return product.isPresent();
    }


    //add new cart -----------------------------------------------------------------------------
    public ResponseEntity<HttpStatus> saveCart(CartsDto cartsDto){
        Carts cart = new Carts();
        cart.setProductId(cartsDto.getProductId());
        cart.setQuantity(cartsDto.getQuantity());
        cart.setUserId(cartsDto.getUserId());
        cartRepository.save(cart);
        return  new ResponseEntity<>(HttpStatus.OK);
    }

    //get cart based on the user id------------------------------------------------------------------
    public List<Carts>getCartByUserId(int userId ){
        List<Carts> carts=getAllCarts();
        List<Carts> filteredCarts=new ArrayList<>();
        for(Carts cart: carts){
            if(cart.getUserId()==userId){
                filteredCarts.add(cart);
            }
        }
        return filteredCarts;
    }
    public ResponseEntity<HttpStatus>updateCartItemByUserId(int userId,CartsDto cartsDto){
        if(userId != cartsDto.getUserId()){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        int userRole = getUserByRole(cartsDto.getUserId());
        if(userRole !=1){
            return  new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        List<Carts> userCarts= cartRepository.findByUserId(userId);
        boolean cartItemFound=false;
        for(Carts cart:userCarts){
            if(cart.getProductId() == cartsDto.getProductId()){
                cart.setQuantity(cartsDto.getQuantity());
                cartRepository.save(cart);
                cartItemFound=true;
                break;
            }
        }
        if (cartItemFound){
            return new ResponseEntity<>(HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }






    //delete cart by id----------------------------------------------------------------------------------
    public ResponseEntity<HttpStatus>deleteCartItemById(long cartId){
        cartRepository.deleteById(cartId);
        return  new ResponseEntity<>(HttpStatus.OK);
    }

}
