package com.ecommerce.pahina.repository;

import com.ecommerce.pahina.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {

    Users findByEmail(String email);

    Optional<Users> findOneByEmailAndPassword(String email,String password);

    Users findByUserId(long id);
}
