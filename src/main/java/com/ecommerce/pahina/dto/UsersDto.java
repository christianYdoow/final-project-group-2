package com.ecommerce.pahina.dto;

import com.ecommerce.pahina.entity.Products;
import lombok.Data;

import java.util.List;

@Data
public class UsersDto {

    private int userId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private int roleId;
    private List<Products> products;
}
