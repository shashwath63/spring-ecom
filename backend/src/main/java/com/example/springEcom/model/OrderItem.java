package com.example.springEcom.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Data//used to automatically generate standard boilerplate code for simple Java objects, such as Data Transfer Objects (DTOs) or model classes like Getter, Setter,equals(), hashCode(), toString(), RequiredArgsConstructor
@NoArgsConstructor//used to have to default constructor for jpa and hibernate uses
@AllArgsConstructor//used to initialize args constructor automatically
@Builder//to assign values to variables without the use of constructors
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    private Product product;

    private int quantity;

    private BigDecimal totalPrice;
    @ManyToOne(fetch = FetchType.LAZY)
    private Order order;
}
