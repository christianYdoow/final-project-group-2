package com.ecommerce.pahina.dto;

import com.ecommerce.pahina.entity.CardType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

@Data
public class CardDto {

    private long id;
    private String card_number;
    private String card_exp;
    private String card_cvv;
    private String cardName;
    private long cardBalance;

    @Enumerated(EnumType.STRING)
    private CardType cardType;

}
