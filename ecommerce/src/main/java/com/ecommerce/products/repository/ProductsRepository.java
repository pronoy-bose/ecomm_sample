package com.ecommerce.products.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.model.Products;

@Repository
public interface ProductsRepository extends CrudRepository<Products, Integer> {
	List<Products> findAll();
}
