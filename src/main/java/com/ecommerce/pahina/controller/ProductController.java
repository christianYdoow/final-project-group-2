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

    @GetMapping("/all-products")
    public ResponseEntity<Page<Products>> getAllProducts(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int pageSize,
            @RequestParam(required = false, defaultValue = "") String searchKey,
            @RequestParam(required = false, defaultValue = "productName") String sortBy,
            @RequestParam(required = false, defaultValue = "ascending") String sortOrder
    ){

        Page<Products> products = productService.getAllProducts(page,pageSize,searchKey,sortBy, sortOrder);
        return ResponseEntity.ok(products);
    }

    @PatchMapping("/remove-product/{productId}")
    public @ResponseBody ResponseEntity<HttpStatus> removeProduct(@PathVariable(value = "productId") int product_id)
    { return productService.removeProductById(product_id);}

    @PatchMapping("/update-product/{productId}")
    public @ResponseBody ResponseEntity<HttpStatus> updateProductDetails (@PathVariable(value = "productId") int product_id,
                                                                          @RequestBody ProductsDto productsDto){
        return productService.updateProductById(product_id,productsDto);
    }

//    @PatchMapping("/update-product/{productId}")
//    public @ResponseBody ResponseEntity<HttpStatus> updateProductDetails (@PathVariable(value = "productId") int product_id,
//                                                                          @RequestBody ProductsDto productsDto,
//                                                                          @RequestParam MultipartFile file,
//                                                                          @RequestParam String imageName){
//        return productService.updateProductById(product_id,productsDto, file, imageName);
//    }
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

    @GetMapping("/get-product-id/{productId}")
    public Products findProductById(@PathVariable("productId") int product_id) {
        return productService.findProductById(product_id);
    }


}


