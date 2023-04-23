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
            "as monthYearCount, SUM(COUNT(*)) OVER() AS totalCount" +
            " FROM Reports r " +
            "WHERE EXTRACT(month FROM CAST(r.buyDate AS date)) = EXTRACT(month FROM CAST(:monthYearDate AS date))" +
            " AND EXTRACT (year FROM CAST(r.buyDate AS date)) = EXTRACT(year FROM CAST(:monthYearDate AS date))" +
            " GROUP BY product ORDER BY product")
    List<Object[]> countMonthReportByProductId(@Param("monthYearDate") Date monthYearDate);

    @Query("SELECT r.productId as product, COUNT(*) " +
            "as yearCount, SUM(COUNT(*)) OVER() AS totalCount" +
            " FROM Reports r WHERE " +
            " EXTRACT (year FROM CAST(r.buyDate AS date)) = EXTRACT(year FROM CAST(:yearDate AS date))" +
            " GROUP BY product ORDER BY product")
    List<Object[]> countYearReportByProductId(@Param("yearDate") Date yearDate);

}
