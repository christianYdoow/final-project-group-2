package com.ecommerce.pahina.controller;


import com.ecommerce.pahina.entity.Card;
import com.ecommerce.pahina.handler.ResponseHandler;
import com.ecommerce.pahina.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("web/api/card")
public class CardController {

    @Autowired
    private CardService cardService;

    // POST /cards : Create a new card
    @PostMapping("/cards")
    public ResponseEntity<Object> saveCard(@RequestBody Card card) {
        try {
            // Save the new card using the CardService
            cardService.saveCard(card);
            return new ResponseEntity<Object>("Card saved successfully", HttpStatus.OK);
        } catch (Exception e) {
            String errorMessage = "Failed to save card: " + e.getMessage();
            return new ResponseEntity<Object>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // GET /cards : Get all cards
    @GetMapping("/cards")
    public ResponseEntity<Object> getAllCards() {
        try {
            // Get all cards using the CardService
            List<Card> cards = cardService.getAllCards();
            return new ResponseEntity<Object>(cards, HttpStatus.OK);
        } catch (Exception e) {
            String errorMessage = "Failed to get all cards: " + e.getMessage();
            return new ResponseEntity<Object>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // GET /cards/{id} : Get a specific card by ID
    @GetMapping("/cards/{id}")
    public ResponseEntity<Object> getCardById(@PathVariable("id") Long id) {
        try {
            // Get the card by ID using the CardService
            Card card = cardService.getCardById(id);
            if (card == null) {
                String errorMessage = "Card with ID " + id + " not found";
                return new ResponseEntity<Object>(errorMessage, HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<Object>(card, HttpStatus.OK);
        } catch (Exception e) {
            String errorMessage = "Failed to get card with ID " + id + ": " + e.getMessage();
            return new ResponseEntity<Object>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/cards/{id}")
    public ResponseEntity<Object> updateCard(@PathVariable("id") Long id, @RequestBody Card card) {
        try {
            // Update the card using the CardService
            Card updatedCard = cardService.updateCard(id, card);
            if (updatedCard == null) {
                String errorMessage = "Card with ID " + id + " not found";
                return new ResponseEntity<Object>(errorMessage, HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<Object>("Card updated successfully", HttpStatus.OK);
        } catch (Exception e) {
            String errorMessage = "Failed to update card with ID " + id + ": " + e.getMessage();
            return new ResponseEntity<Object>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // DELETE /cards/{id} : Delete a specific card by ID
    @DeleteMapping("/cards/{id}")
    public ResponseEntity<Object> deleteCard(@PathVariable("id") Long id) {
        try {
            // Delete the card by ID using the CardService
            cardService.deleteCard(id);
            return new ResponseEntity<Object>("Card deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            String errorMessage = "Failed to delete card with ID " + id + ": " + e.getMessage();
            return new ResponseEntity<Object>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}
