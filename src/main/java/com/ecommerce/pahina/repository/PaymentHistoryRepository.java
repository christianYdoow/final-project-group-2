package com.ecommerce.pahina.repository;


import com.ecommerce.pahina.entity.PaymentHistory;
import com.ecommerce.pahina.entity.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentHistoryRepository extends JpaRepository<PaymentHistory,Long> {


    @Query(nativeQuery = true,value="SELECT ph.user_id, p.productName , p.productPrice, ph.quantity, " +
            "ph.buyDate FROM PaymentHistory AS ph join Products AS p " +
            "ON ph.product_id = p.product_id WHERE ph.user_id = :userId" )
    Page<Object[]> test(@Param("userId")int user_id,
                                Pageable pageable);







}
