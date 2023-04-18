package com.ecommerce.pahina.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "products")
@Data

public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="product_id")
    private int productId;

    @Column(name="productname")
    private String productName;
    @Column(name="productdescription")
    private String productDescription;
    @Column(name="productquantity")
    private int productQuantity;
    @Column(name="productprice")
    private double productPrice;

    @Column(name = "productimage")
    private String productImage;

    @Column(name="user_id")
    private int userId;

    @ManyToMany
    @JoinTable(name = "carts",
            joinColumns = {@JoinColumn(name = "product_id", referencedColumnName = "product_id")},
            inverseJoinColumns = {@JoinColumn(name = "cart_id", referencedColumnName = "cart_id")})
    private List<Carts> carts;

}

