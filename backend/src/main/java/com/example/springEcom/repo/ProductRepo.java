package com.example.springEcom.repo;

import com.example.springEcom.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepo extends JpaRepository<Product,Integer> {
    @Query("""
    SELECT p FROM Product p
    WHERE
      LOWER(TRIM(p.name)) LIKE LOWER(CONCAT('%', TRIM(:keyword), '%'))
      OR LOWER(TRIM(p.brand)) LIKE LOWER(CONCAT('%', TRIM(:keyword), '%'))
      OR LOWER(TRIM(p.description)) LIKE LOWER(CONCAT('%', TRIM(:keyword), '%'))
      OR LOWER(TRIM(p.category)) LIKE LOWER(CONCAT('%', TRIM(:keyword), '%'))
    """)
    //jpql query to search product which uses the model name and its columns and :keyword is variable
    List<Product> searchKeyword( String keyword);
}
