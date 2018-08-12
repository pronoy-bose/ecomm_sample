package com.ecommece.VO;

import java.util.Date;

public class ProductsVO {
	private Integer productId;
	private String productSku;
	private String productName;
	private float productPrice;
	private float productWeight;
	private String productCartDesc;
	private String productShortDesc;
	private String productLongDesc;
	private String productThumb;
	private String productImage;
	private Date productUpdateDate;
	private Float productStock;
	private Boolean productLive;
	private Boolean productUnlimited;
	private String productLocation;
	private byte[] imageFileList;

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public String getProductSku() {
		return productSku;
	}

	public void setProductSku(String productSku) {
		this.productSku = productSku;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public float getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(float productPrice) {
		this.productPrice = productPrice;
	}

	public float getProductWeight() {
		return productWeight;
	}

	public void setProductWeight(float productWeight) {
		this.productWeight = productWeight;
	}

	public String getProductCartDesc() {
		return productCartDesc;
	}

	public void setProductCartDesc(String productCartDesc) {
		this.productCartDesc = productCartDesc;
	}

	public String getProductShortDesc() {
		return productShortDesc;
	}

	public void setProductShortDesc(String productShortDesc) {
		this.productShortDesc = productShortDesc;
	}

	public String getProductLongDesc() {
		return productLongDesc;
	}

	public void setProductLongDesc(String productLongDesc) {
		this.productLongDesc = productLongDesc;
	}

	public String getProductThumb() {
		return productThumb;
	}

	public void setProductThumb(String productThumb) {
		this.productThumb = productThumb;
	}

	public String getProductImage() {
		return productImage;
	}

	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}

	public Date getProductUpdateDate() {
		return productUpdateDate;
	}

	public void setProductUpdateDate(Date productUpdateDate) {
		this.productUpdateDate = productUpdateDate;
	}

	public Float getProductStock() {
		return productStock;
	}

	public void setProductStock(Float productStock) {
		this.productStock = productStock;
	}

	public Boolean getProductLive() {
		return productLive;
	}

	public void setProductLive(Boolean productLive) {
		this.productLive = productLive;
	}

	public Boolean getProductUnlimited() {
		return productUnlimited;
	}

	public void setProductUnlimited(Boolean productUnlimited) {
		this.productUnlimited = productUnlimited;
	}

	public String getProductLocation() {
		return productLocation;
	}

	public void setProductLocation(String productLocation) {
		this.productLocation = productLocation;
	}

	public byte[] getImageFileList() {
		return imageFileList;
	}

	public void setImageFileList(byte[] imageFileList) {
		this.imageFileList = imageFileList;
	}

}
