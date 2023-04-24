package com.ecommerce.pahina.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "reports")
@Data
public class Reports {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="report_id")
    private int reportId;
    @Column(name="buydate")
    private Date buyDate;

    @Column(name="product_id")
    private int productId;
}
