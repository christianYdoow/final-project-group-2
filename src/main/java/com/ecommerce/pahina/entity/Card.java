package com.ecommerce.pahina.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.security.core.userdetails.User;

import java.math.BigDecimal;

@Entity
@Data
@Table(name = "card")
public class Card extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String card_number;
    private String card_exp;
    private String card_cvv;
    private String cardName;
    private long cardBalance;


    @Enumerated(EnumType.STRING)
    private CardType cardType;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private Users users;

    public BigDecimal getCardLimit() {
        // Card limit is 2 times the card balance
        return BigDecimal.valueOf(cardBalance).multiply(new BigDecimal("1"));
    }
}
