package com.ecommerce.pahina.service;


import com.ecommerce.pahina.dto.ProductsDto;
import com.ecommerce.pahina.entity.Products;
import com.ecommerce.pahina.repository.ProductRepository;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.Reader;
import java.net.URLDecoder;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Objects;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public ResponseEntity<HttpStatus> removeProductById(long product_id){
        Products products = findProductById(product_id);
        products.setStatus("inactive");
        productRepository.save(products);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public Page<Products> getPageOfProducts(int page, int pageSize,
                                            String searchBy,String sortBy, String sortOrder){
        Pageable pageable;
        if (sortBy != null){
            Sort sort;
            if(sortOrder != null && sortOrder.equalsIgnoreCase("descending")){
                sort = Sort.by(sortBy).descending();
            }else{
                sort = Sort.by(sortBy).ascending();
            }
            pageable = PageRequest.of(page - 1,pageSize,sort);
        } else{
            pageable = PageRequest.of(page - 1, pageSize);
        }
        Page<Products> pageResult;

        if(searchBy != null && !searchBy.isEmpty()){
            pageResult =  productRepository.findByStatusAndProductNameContainingIgnoreCase("active", searchBy, pageable );
        }
        else{
            pageResult = productRepository.findByStatus("active", pageable);
        }

        int totalPages = getAllProducts().size();
        return new PageImpl<>(pageResult.getContent(), pageable, totalPages)
                .map(product -> {
                    Products products = new Products();
                    products.setProductId(product.getProductId());
                    products.setCategoryId(product.getCategoryId());
                    products.setProductName(product.getProductName());
                    products.setProductDescription(product.getProductDescription());
                    products.setProductPrice(product.getProductPrice());
                    products.setProductImage(product.getProductImage());
                    products.setStatus(product.getStatus());
                    products.setProductQuantity(product.getProductQuantity());
                    return products;
                });
    }



    public Page<Products> getAllProducts(int page, int pageSize,
                                         String searchBy,String sortBy, String sortOrder){
        Pageable pageable;
        if (sortBy != null){
            Sort sort;
            if(sortOrder != null && sortOrder.equalsIgnoreCase("descending")){
                sort = Sort.by(sortBy).descending();
            }else{
                sort = Sort.by(sortBy).ascending();
            }
            pageable = PageRequest.of(page - 1,pageSize,sort);
        } else{
            pageable = PageRequest.of(page - 1, pageSize);
        }
        Page<Products> pageResult;

        if(searchBy != null && !searchBy.isEmpty()){
            pageResult =  productRepository.findByProductNameContainingIgnoreCase(searchBy, pageable );
        }
        else{
            pageResult = productRepository.findAll(pageable);
        }

        int totalPages = getAllProducts().size();
        return new PageImpl<>(pageResult.getContent(), pageable, totalPages)
                .map(product -> {
                    Products products = new Products();
                    products.setCategoryId(product.getCategoryId());
                    products.setProductId(product.getProductId());
                    products.setProductName(product.getProductName());
                    products.setProductDescription(product.getProductDescription());
                    products.setProductPrice(product.getProductPrice());
                    products.setProductImage(product.getProductImage());
                    products.setStatus(product.getStatus());
                    products.setProductQuantity(product.getProductQuantity());
                    return products;
                });
    }





    public static final String IMAGE_DIR = ".\\pahina-frontend\\src\\assets";

    public String uploadImage(MultipartFile file, String imageName) {
        String originalImageName;

        if (!file.isEmpty()) {
            try {
                originalImageName = URLDecoder.decode(Objects.requireNonNull(file.getOriginalFilename()), "UTF-8");
                Path imagePath = Paths.get(IMAGE_DIR, originalImageName);

                try (OutputStream os = Files.newOutputStream(imagePath)) {
                    os.write(file.getBytes());
                }
            } catch (IOException e) {
                throw new RuntimeException("Failed to save image", e);
            }
        } else {
            originalImageName = imageName;
        }

        return originalImageName;
    }

    public ResponseEntity<HttpStatus> updateProductById(long product_id, ProductsDto productsDto){

        Products updateProducts = findProductById(product_id);
        updateProducts.setProductName(productsDto.getProductName());
//        updateProducts.setProductName( productsDto.getProductName() != null ? productsDto.getProductName() : updateProducts.getProductName()); ;
        updateProducts.setProductDescription(productsDto.getProductDescription());
        updateProducts.setProductPrice(productsDto.getProductPrice());
        updateProducts.setProductQuantity(productsDto.getProductQuantity());
        updateProducts.setProductImage(productsDto.getProductImage());
        updateProducts.setStatus(productsDto.getStatus());
        productRepository.save(updateProducts);
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    public ResponseEntity<HttpStatus> updateProductById(long product_id, ProductsDto productsDto, MultipartFile file, String imageName){
//
//        Products updateProducts = findProductById(product_id);
//        if (!file.isEmpty()) {
//        updateProducts.setProductImage(uploadImage(file, imageName));
//        }
//        updateProducts.setProductName(productsDto.getProductName());
//        updateProducts.setProductDescription(productsDto.getProductDescription());
//        updateProducts.setProductPrice(productsDto.getProductPrice());
//        updateProducts.setProductQuantity(productsDto.getProductQuantity());
//        updateProducts.setStatus(productsDto.getStatus());
//        productRepository.save(updateProducts);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }


    public ResponseEntity<HttpStatus> addProductByForm(ProductsDto productsDto,
                                                       MultipartFile file, String imageName){
        Products products = new Products();
        productsDto.setProductImage(uploadImage(file, imageName));
        products.setCategoryId(productsDto.getCategoryId());
        products.setProductName(productsDto.getProductName());
        products.setProductDescription(productsDto.getProductDescription());
        products.setProductPrice(productsDto.getProductPrice());
        products.setProductQuantity(productsDto.getProductQuantity());
        products.setProductImage(productsDto.getProductImage());
        products.setStatus(productsDto.getStatus());
        products.setUserId(1);
        productRepository.save(products);

        return new ResponseEntity<>(HttpStatus.OK);
    }
    @Transactional
    public ResponseEntity<HttpStatus> addProductByFile(MultipartFile file) throws IOException {
        Reader reader = new InputStreamReader(file.getInputStream());
        CsvToBean<Products> csvToBean = new CsvToBeanBuilder<Products>(reader)
                .withType(Products.class)
                .withIgnoreLeadingWhiteSpace(true)
                .build();
        List<Products> products = csvToBean.parse();

        for (Products product : products){
            if(existByProductName(product.getProductName())){

                //Check for duplicates
                return new ResponseEntity<>(HttpStatus.CONFLICT);
            }
            else{

                productRepository.saveAll(products);
            }
        }



        return new ResponseEntity<>(HttpStatus.OK);
    }

    public Products findProductById(long product_id){
        return productRepository.findById(product_id).orElseThrow();
    }

    public List<Products> getAllProducts(){
        return productRepository.findByStatus("active");
    }
    private boolean existByProductName(String productName){
        return productRepository.existsByProductName(productName);
    }



}
