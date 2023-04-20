package com.ecommerce.pahina.controller;


import com.ecommerce.pahina.dto.ProductsDto;
import com.ecommerce.pahina.entity.Products;
import com.ecommerce.pahina.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/web/api/admin")
public class ProductController {

    @Autowired
    private ProductService productService;
    @GetMapping("/products")
    public ResponseEntity<Page<Products>> getProducts(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int pageSize,
            @RequestParam(required = false, defaultValue = "") String searchKey,
            @RequestParam(required = false, defaultValue = "productName") String sortBy,
            @RequestParam(required = false, defaultValue = "ascending") String sortOrder
            ){

        Page<Products> products = productService.getPageOfProducts(page,pageSize,searchKey,sortBy, sortOrder);
        return ResponseEntity.ok(products);
    }

    @PatchMapping("/remove-product")
    public @ResponseBody ResponseEntity<HttpStatus> removeProduct(@RequestParam int product_id)
    { return productService.removeProductById(product_id);}
    @PatchMapping("/update-product")
    public @ResponseBody ResponseEntity<HttpStatus> updateProductDetails (@RequestParam int product_id,
                                                                          @RequestBody ProductsDto productsDto){
        return productService.updateProductById(product_id,productsDto);
    }
    @PostMapping("/add-product")
    public  ResponseEntity<HttpStatus> addProductByForm(@ModelAttribute ProductsDto productsDto,
                                                                     @RequestParam MultipartFile file,
                                                                     @RequestParam String imageName){
        return productService.addProductByForm(productsDto,file,imageName);
    }
    @PostMapping("/add-product-file")
    public @ResponseBody ResponseEntity<HttpStatus> addProductByFile(@RequestParam MultipartFile file)
            throws IOException {
        return productService.addProductByFile(file);

    }







}


