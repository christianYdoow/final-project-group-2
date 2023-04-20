package com.ecommerce.pahina.repository;

import com.ecommerce.pahina.entity.Products;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Products,Long> {

    List<Products> findByStatus(String status, Pageable pageable);

    boolean existsByProductName(String productName);

    List<Products> findByStatusAndProductNameContainingIgnoreCase(String status, String searchBy, Pageable pageable);
}
