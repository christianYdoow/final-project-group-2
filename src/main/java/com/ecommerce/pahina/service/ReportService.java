package com.ecommerce.pahina.service;


import com.ecommerce.pahina.entity.Reports;
import com.ecommerce.pahina.repository.ProductRepository;
import com.ecommerce.pahina.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReportService {

    @Autowired
    private ReportRepository reportRepository;





    public String getAllReportByDay(LocalDate dayDate){
        Date date = java.sql.Date.valueOf(dayDate);
        List<Object[]> reportCounts = reportRepository.countDayReportByProductId(date);
        return reportCounts.stream()
                .map(row -> String.format("Product %d: %d ", row[0], row[1]))
                .collect(Collectors.joining("\n"));
    }

    public String getAllReportByMonthYear(LocalDate monthYearDate){
        Date date = java.sql.Date.valueOf(monthYearDate);
        List<Object[]> reportCounts = reportRepository.countMonthReportByProductId(date);
        return reportCounts.stream()
                .map(row -> String.format("Product %d: %d ", row[0], row[1]))
                .collect(Collectors.joining("\n"));
    }

    public String getAllReportByYear(LocalDate yearDate){
        Date date = java.sql.Date.valueOf(yearDate);
        List<Object[]> reportCounts = reportRepository.countYearReportByProductId(date);
        return reportCounts.stream()
                .map(row -> String.format("Product %d: %d ", row[0], row[1]))
                .collect(Collectors.joining("\n"));
    }







}
