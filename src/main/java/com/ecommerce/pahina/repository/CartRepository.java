package com.ecommerce.pahina.repository;

import com.ecommerce.pahina.entity.Carts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartRepository extends JpaRepository<Carts,Long> {

    Carts findByProductIdAndUserId(int productId, int userId);

    List<Carts> findByUserId(int userId);

    @Query(value = "SELECT * FROM cart_items WHERE product_id = ?1", nativeQuery = true)
    List<Carts> findByProductId(Long product_id);
}
