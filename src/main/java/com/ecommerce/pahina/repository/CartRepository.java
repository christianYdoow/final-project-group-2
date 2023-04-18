package com.ecommerce.pahina.repository;

import com.ecommerce.pahina.entity.Carts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Carts,Long> {

}
