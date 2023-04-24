package com.ecommerce.pahina.service;


import com.ecommerce.pahina.entity.PaymentHistory;
import com.ecommerce.pahina.entity.Products;
import com.ecommerce.pahina.repository.PaymentHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class PaymentHistoryService {

    @Autowired
    PaymentHistoryRepository paymentHistoryRepository;

    public Page<PaymentHistory> getPageOfPaymentHistory(int user_id,
                                                        int product_id,
                                                        int page, int pageSize,
                                                  String searchBy, String sortBy, String sortOrder){
        Pageable pageable;
        if (sortBy != null){
            Sort sort;
            if(sortOrder != null && sortOrder.equalsIgnoreCase("descending")){
                sort = Sort.by(sortBy).descending();
            }else{
                sort = Sort.by(sortBy).ascending();
            }
            pageable = PageRequest.of(page - 1,pageSize,sort);
        } else{
            pageable = PageRequest.of(page - 1, pageSize);
        }
        Page<PaymentHistory> paymentHistoryPage;

        if(searchBy != null && !searchBy.isEmpty()){
            paymentHistoryPage =  paymentHistoryRepository.findByUserIdAndProductId(
                    user_id,product_id,searchBy, pageable );
        }
        else{
            paymentHistoryPage = paymentHistoryRepository.findByUserIdAndProductId(
                    user_id,product_id, pageable);
        }

        return paymentHistoryPage;


    }


}
