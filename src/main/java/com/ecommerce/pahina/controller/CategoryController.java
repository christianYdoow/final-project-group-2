package com.ecommerce.pahina.controller;

import com.ecommerce.pahina.entity.Category;
import com.ecommerce.pahina.handler.ResponseHandler;
import com.ecommerce.pahina.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("web/api/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public ResponseEntity<Object> getCategories(){
        try
        {
            List<Category> result = categoryService.getCategories();
            return ResponseHandler.GenerateResponse("Success", HttpStatus.OK, result);
        }
        catch(Exception e)
        {
            return ResponseHandler.GenerateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
        }
    }
    @GetMapping(path = "{id}")
    public ResponseEntity<Object> getSingleCategory(@PathVariable("id") Long id){
        try
        {
            Optional<Category> result = categoryService.getSingleCategory(id);
            return ResponseHandler.GenerateResponse("Success", HttpStatus.OK, result);
        }
        catch(Exception e)
        {
            return ResponseHandler.GenerateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
        }
    }

    @PostMapping
    public ResponseEntity<Object> createCategory(@RequestBody Category category){
        try
        {
            Category result = categoryService.createCategory(category);
            return ResponseHandler.GenerateResponse("Category created successfully", HttpStatus.CREATED, result);
        }
        catch (Exception e)
        {
            return ResponseHandler.GenerateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
        }
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<Object> updateProduct(@RequestBody Category category, @PathVariable("id") Long id){
        try
        {
            Category result = categoryService.updateCategory(category, id);
            return ResponseHandler.GenerateResponse("Category updated successfully", HttpStatus.OK, result);
        }
        catch(Exception e)
        {
            return ResponseHandler.GenerateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
        }
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<Object> deleteCategory(@PathVariable("id") Long id){
        try
        {
            categoryService.deleteCategory(id);
            return ResponseHandler.GenerateResponse("Category deleted successfully", HttpStatus.OK, null);
        }
        catch(Exception e)
        {
            return ResponseHandler.GenerateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
        }
    }

}
