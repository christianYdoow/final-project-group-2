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


    @Query("SELECT r.productId as product, COUNT(*) " +
            "as dayCount, SUM(COUNT(*)) OVER() AS totalCount" +
            " FROM Reports r where buyDate = :dayDate GROUP BY product ORDER BY product  ")
    List<Object[]> countDayReportByProductId(@Param("dayDate")Date dayDate);

    @Query("SELECT r.productId as product, COUNT(*) " +
            "as dayCount, SUM(COUNT(*)) OVER() AS totalCount" +
            " FROM Reports r where EXTRACT(month FROM buyDate) = EXTRACT(month FROM :monthYearDate)" +
            " AND EXTRACT (year FROM buyDate) = EXTRACT(year FROM :monthYearDate)" +
            " GROUP BY product ORDER BY product")
    List<Object[]> countMonthReportByProductId(@Param("monthYearDate") Date monthYearDate);

    @Query("SELECT r.productId as product, COUNT(*) " +
            "as dayCount, SUM(COUNT(*)) OVER() AS totalCount" +
            " AND EXTRACT (year FROM buyDate) = EXTRACT(year FROM :yearDate)" +
            " GROUP BY product ORDER BY product")
    List<Object[]> countYearReportByProductId(@Param("yearDate") Date yearDate);

}
