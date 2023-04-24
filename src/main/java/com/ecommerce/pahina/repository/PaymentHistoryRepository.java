package com.ecommerce.pahina.repository;


import com.ecommerce.pahina.entity.PaymentHistory;
import com.ecommerce.pahina.entity.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentHistoryRepository extends JpaRepository<PaymentHistory,Long> {
    Page<PaymentHistory> findByUserIdAndProductId(int user_id, int product_id, String searchBy, Pageable pageable);
    Page<PaymentHistory> findByUserIdAndProductId(int user_id, int product_id, Pageable pageable);






}
