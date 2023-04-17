package com.ecommerce.pahina.dto;

public class CartsDto {
    private int cartId;
    private int productId;
    private int quantity;
    private int userId;
    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cart_id) {
        this.cartId = cart_id;
    }
}
