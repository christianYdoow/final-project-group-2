package com.ecommerce.pahina.service;

import com.ecommerce.pahina.dto.CartsDto;
import com.ecommerce.pahina.entity.Card;
import com.ecommerce.pahina.entity.Carts;
import com.ecommerce.pahina.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CardService {

    @Autowired
    private CardRepository cardRepository;

    public List<Card> getAllCards() {
        return cardRepository.findAll();
    }

    public Card getCardById(Long id) {
        return cardRepository.findById(id).orElse(null);
    }

    public Card saveCard(Card card) {
        return cardRepository.save(card);
    }

    public void deleteCard(Long id) {
        cardRepository.deleteById(id);
    }

    public Card updateCard(Long id, Card updatedCard) {
        Optional<Card> optionalCard = cardRepository.findById(id);
        if (optionalCard.isPresent()) {
            Card card = optionalCard.get();
            card.setCard_number(updatedCard.getCard_number());
            card.setCard_exp(updatedCard.getCard_exp());
            card.setCard_cvv(updatedCard.getCard_cvv());
            card.setCardName(updatedCard.getCardName());
            card.setCardType(updatedCard.getCardType());
            card.setCardBalance(updatedCard.getCardBalance());
            card.setUser_id(updatedCard.getUser_id());
            // Update any other fields that need to be updated

            return cardRepository.save(card);
        } else {
            return null;
        }
    }
}
