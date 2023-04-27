package com.ecommerce.pahina.controller;


import com.ecommerce.pahina.entity.Products;
import com.ecommerce.pahina.entity.Reports;
import com.ecommerce.pahina.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/web/api/admin")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @GetMapping("/reports-day")
    public String getReportDay(@RequestParam LocalDate dayDate){

        return reportService.getAllReportByDay(dayDate);
    }

    @GetMapping("/reports-month")
    public String getReportMonthYear(@RequestParam LocalDate monthYearDate){
        return reportService.getAllReportByMonthYear(monthYearDate);
    }

    @GetMapping("/reports-year")
    public String getReportYear(@RequestParam LocalDate yearDate){

        return reportService.getAllReportByYear(yearDate);
    }


}
