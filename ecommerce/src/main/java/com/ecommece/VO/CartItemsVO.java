package com.ecommece.VO;

public class CartItemsVO {

	private Integer cartItemId;
	private Integer cartId;
	private ProductsVO productsVO;
	private Integer quantity;
	private Double price;

	public Integer getCartItemId() {
		return cartItemId;
	}

	public void setCartItemId(Integer cartItemId) {
		this.cartItemId = cartItemId;
	}

	public Integer getCartId() {
		return cartId;
	}

	public void setCartId(Integer cartId) {
		this.cartId = cartId;
	}

	public ProductsVO getProductsVO() {
		return productsVO;
	}

	public void setProductsVO(ProductsVO productsVO) {
		this.productsVO = productsVO;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}
}
