package com.ecommerce.pahina.dto;


import jakarta.persistence.Column;
import lombok.Data;

import java.util.Date;

@Data
public class PaymentHistoryDto {
    private int paymentId;
    private int quantity;
    private Date buyDate;
    private String payment;
    private int userId;
    private int productId;
}
