package com.ecommerce.pahina.repository;

import com.ecommerce.pahina.entity.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Products,Long> {

    Page<Products> findByStatus(String status, Pageable pageable);
    List<Products> findByStatus(String status);
    boolean existsByProductName(String productName);

    Page<Products> findByStatusAndProductNameContainingIgnoreCase(String status, String searchBy, Pageable pageable);
}
