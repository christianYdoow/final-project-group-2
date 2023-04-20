package com.ecommerce.pahina.dto;

import lombok.Data;

@Data
public class CartsDto {
    private long cartId;
    private long productId;
    private long quantity;
    private long userId;

}
