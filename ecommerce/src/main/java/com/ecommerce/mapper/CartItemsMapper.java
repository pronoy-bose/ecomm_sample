package com.ecommerce.mapper;

import java.util.ArrayList;
import java.util.List;

import com.ecommece.VO.CartItemsVO;
import com.ecommerce.model.Cartitems;

public class CartItemsMapper {

	public CartItemsVO toCartItemsVO(Cartitems cartItems) {
		ProductListMapper productMapper = new ProductListMapper();
		CartItemsVO cartItemsVO = new CartItemsVO();
		cartItemsVO.setCartItemId(cartItems.getCartItemId());
		cartItemsVO.setCartId(cartItems.getCart().getCartId());
		cartItemsVO.setPrice(cartItems.getPrice());
		cartItemsVO.setQuantity(cartItems.getQuantity());
		cartItemsVO.setProductsVO(productMapper.toProductDetailsVO(cartItems.getProducts()));
		return cartItemsVO;
	}

	public List<CartItemsVO> toCartItemsVOList(List<Cartitems> cartItems) {
		List<CartItemsVO> cartItemsVOList = new ArrayList<CartItemsVO>();
		for (Cartitems cartItem : cartItems) {
			cartItemsVOList.add(toCartItemsVO(cartItem));
		}
		return cartItemsVOList;
	}
}
