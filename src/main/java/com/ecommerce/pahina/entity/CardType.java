package com.ecommerce.pahina.entity;

public enum CardType {
    CREDIT("credit"),
    DEBIT("debit");

    private final String value;

    CardType(String value){
        this.value=value;
    }

    public String getValue(){
        return value;
    }
}
