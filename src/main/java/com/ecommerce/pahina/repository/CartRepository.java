package com.ecommerce.pahina.repository;

import com.ecommerce.pahina.entity.Carts;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Carts,Long> {

    Carts findByProductIdAndUserId(int productId, int userId);

    List<Carts> findByUserId(int userId);
}
