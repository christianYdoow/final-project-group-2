package com.ecommerce.pahina.service;

import com.ecommerce.pahina.entity.Category;
import com.ecommerce.pahina.repository.CategoryRepository;
import com.ecommerce.pahina.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ProductRepository productRepository;

    public List<Category> getCategories(){
        List<Category> categories = new ArrayList<>();
        categoryRepository.findAll().forEach(categories::add);
        return categories;
    }

    public Optional<Category> getSingleCategory(Long id){
        categoryRepository.findById(id).orElseThrow(() -> new IllegalStateException("Category does not exist"));
        return categoryRepository.findById(id);
    }

    public Category createCategory(Category category){
        return categoryRepository.save(category);
    }

    public void deleteCategory(Long id){
        categoryRepository.findById(id).orElseThrow(() -> new IllegalStateException("Category does not exist"));
        categoryRepository.deleteById(id);
    }

    public Category updateCategory(Category category, Long id){
        Category categoryExists = categoryRepository.findById(id).orElseThrow(() -> new IllegalStateException("Category does not exist"));
        categoryExists.setName(category.getName());
        categoryExists.setDescription(category.getDescription());
        return categoryRepository.save(categoryExists);
    }
}
