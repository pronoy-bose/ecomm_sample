package com.ecommerce.shopArea.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ecommerce.model.Cartitems;

@Repository
public interface CartItemRepository extends JpaRepository<Cartitems, Integer>{
	
	public List<Cartitems> findByCart_CartId(Integer cartId);
	
	public Cartitems findByCart_CartIdAndProducts_ProductId(Integer cartId, Integer productId);
	
	@Query(value="SELECT SUM(Quantity) from cartitems where CartID = ?1",nativeQuery=true)
	Integer getCartItemCount(Integer cartId);
	
}
