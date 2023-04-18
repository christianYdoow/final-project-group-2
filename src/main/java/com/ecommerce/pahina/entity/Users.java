package com.ecommerce.pahina.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@Data
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="user_id")
    private int userId;
    @Column(name ="firstname")
    private String firstName;
    @Column(name ="lastname")
    private String lastName;
    @Column(name ="email")
    private String email;
    @Column(name ="password")
    private String password;
    @Column(name ="role_id")
    private int roleId;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "users",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id", referencedColumnName = "role_id")})
    private List<Role> roles = new ArrayList<>();

//    @OneToMany
//    @JoinTable(name = "users",
//            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
//            inverseJoinColumns = {@JoinColumn(name = "product_id", referencedColumnName = "product_id")})
//    private List<Products> products;

}

