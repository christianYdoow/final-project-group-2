package com.ecommerce.pahina.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "carts")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Carts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cart_id")
    private int cartId;

    @Column(name="product_id")
    private int productId;

    @Column(name="user_id")
    private int userId;
    @Column(name="quantity")
    private int quantity;

}
