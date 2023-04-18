package com.ecommerce.pahina.entity;

import lombok.Data;

@Data
public class LoginMessage {
    String message;
    Boolean status;

    public LoginMessage(String message, boolean status) {
        this.message = message;
        this.status = status;
    }
}
