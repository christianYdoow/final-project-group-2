package com.ecommerce.pahina.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @Column(name = "status")
    private String status;

    @Column(name="user_id")
    private int userId;

    @Column(name = "category_id")
    private long categoryId;

    @ManyToMany
    @JoinTable(name = "carts",
            joinColumns = {@JoinColumn(name = "product_id", referencedColumnName = "product_id")},
            inverseJoinColumns = {@JoinColumn(name = "cart_id", referencedColumnName = "cart_id")})
    private List<Carts> carts;

    @ManyToMany
    @JoinTable(name = "reports",
            joinColumns = {@JoinColumn(name = "product_id", referencedColumnName = "product_id")},
            inverseJoinColumns = {@JoinColumn(name = "report_id", referencedColumnName = "report_id")})
    private List<Reports> reports;

    @JsonIgnore
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", referencedColumnName = "id", nullable = false, insertable=false, updatable=false)
    private Category category;


}

