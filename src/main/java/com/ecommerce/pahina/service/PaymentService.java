package com.ecommerce.pahina.service;

import com.ecommerce.pahina.dto.CardDto;
import com.ecommerce.pahina.entity.Card;
import com.ecommerce.pahina.entity.CardType;
import com.ecommerce.pahina.entity.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Service
public class PaymentService {

    @Autowired
    private CardService cardService;

    @Autowired
    private TransactionService transactionService;

    public void processPayment(Long cardId, BigDecimal amount) throws Exception {
        Card card = cardService.getCardById(cardId);
        if (card == null) {
            throw new Exception("Invalid card ID");
        }
        if (!isValidCard(card)) {
            throw new Exception("Invalid card information");
        }
        if (!hasSufficientFunds(card, amount)) {
            throw new Exception("Insufficient funds");
        }
        if (card.getCardType() == "credit") {
            BigDecimal availableCredit = card.getCardLimit().subtract(BigDecimal.valueOf(card.getCardBalance()));
            if (amount.compareTo(availableCredit) > 0) {
                throw new Exception("Exceeded card limit");
            }
        }
        // Process the payment and update the transaction record
        card.setCardBalance(BigDecimal.valueOf(card.getCardBalance()).subtract(amount).longValue());
        cardService.saveCard(card);
        Transaction transaction = new Transaction();
        transaction.setCard(card);
        transaction.setAmount(amount.longValue());
        transactionService.saveTransaction(transaction);
    }


    private boolean isValidCard(Card card) {
        // Check if the card is not expired
        LocalDate currentDate = LocalDate.now();
        LocalDate expiryDate = LocalDate.parse(card.getCard_exp(), DateTimeFormatter.ofPattern("MM/yy"));
        if (expiryDate.isBefore(currentDate)) {
            return false;
        }

        return true;
    }
    private boolean hasSufficientFunds(Card card, BigDecimal amount) {
        BigDecimal balance = BigDecimal.valueOf(card.getCardBalance());
        return balance.compareTo(amount) >= 0;
    }


}

