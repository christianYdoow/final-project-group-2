package com.ecommerce.pahina.entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "carts")
@Data
public class Carts extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cart_id")
    private long cartId;

    @Column(name="product_id")
    private long productId;

    @Column(name="user_id")
    private long userId;
    @Column(name="quantity")
    private long quantity;

    @Column(name="price")
    private Long price;

}
