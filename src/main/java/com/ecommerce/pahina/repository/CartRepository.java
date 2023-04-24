package com.ecommerce.pahina.repository;

import com.ecommerce.pahina.entity.Carts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Carts,Long> {

    Carts findByProductIdAndUserId(int productId, int userId);

    List<Carts> findByUserId(int userId);
}
