package com.ecommerce.pahina.repository;

import com.ecommerce.pahina.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {

    Users findByemail(String email);
}
