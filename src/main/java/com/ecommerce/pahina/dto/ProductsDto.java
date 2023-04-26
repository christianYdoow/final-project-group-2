package com.ecommerce.pahina.dto;

import lombok.Data;

@Data
public class ProductsDto {

    private long categoryId;
    private int productId;
    private String productName;
    private String productDescription;
    private int productQuantity;
    private double productPrice;
    private String productImage;

    private String status;


}
