package com.ecommerce.pahina.dto;

import lombok.Data;

@Data
public class CartsDto {
    private int cartId;
    private int productId;
    private int quantity;
    private int userId;
    public int getQuantity() {
        return quantity;
    }
}
