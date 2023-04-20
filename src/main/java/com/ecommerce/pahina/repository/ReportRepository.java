package com.ecommerce.pahina.repository;


import com.ecommerce.pahina.entity.Products;
import com.ecommerce.pahina.entity.Reports;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;


import java.util.Date;
import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<Reports,Long> {


    @Query("SELECT r.productId as product, COUNT(r.buyDate) " +
            "as buyDate FROM Reports r where buyDate = :buyDate GROUP BY product ORDER BY product  ")
    List<Object[]> countDayReportByProductId(@Param("buyDate")Date today);

}
