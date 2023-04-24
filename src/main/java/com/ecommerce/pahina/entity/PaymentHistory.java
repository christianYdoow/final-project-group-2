package com.ecommerce.pahina.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "paymenthistory")
@Data
public class PaymentHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="product_id")
    private int paymentId;

    @Column(name="quantity")
    private int quantity;

    @Column(name="buydate")
    private Date buyDate;

    @Column(name="payment")
    private String payment;

    @Column(name="user_id")
    private int userId;

    @Column(name="product_id")
    private int productId;


}
