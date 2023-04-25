package com.ecommerce.pahina.repository;

import com.ecommerce.pahina.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long> {
}
