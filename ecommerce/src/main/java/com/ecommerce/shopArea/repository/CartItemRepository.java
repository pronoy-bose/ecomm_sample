package com.ecommerce.shopArea.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.model.Cartitems;

@Repository
public interface CartItemRepository extends JpaRepository<Cartitems, Integer>{
	
	public List<Cartitems> findByCart_CartId(Integer cartId);
}
