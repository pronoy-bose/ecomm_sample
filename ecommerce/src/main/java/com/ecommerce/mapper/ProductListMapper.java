package com.ecommerce.mapper;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.core.io.ClassPathResource;
import org.springframework.util.StreamUtils;

import com.ecommece.VO.ProductsVO;
import com.ecommerce.model.Products;

public class ProductListMapper {

	public ProductsVO toProductDetailsVO(Products product) {
		ProductsVO productVO = new ProductsVO();
		productVO.setProductCartDesc(product.getProductCartDesc());
		productVO.setProductId(product.getProductId());
		productVO.setProductImage(product.getProductImage());
		productVO.setProductLive(product.getProductLive());
		productVO.setProductLocation(product.getProductLocation());
		productVO.setProductLongDesc(product.getProductLongDesc());
		productVO.setProductName(product.getProductName());
		productVO.setProductPrice(product.getProductPrice());
		productVO.setProductShortDesc(product.getProductShortDesc());
		productVO.setProductSku(product.getProductSku());
		productVO.setProductStock(product.getProductStock());
		productVO.setProductThumb(product.getProductThumb());
		productVO.setProductUnlimited(product.getProductUnlimited());
		productVO.setProductWeight(product.getProductWeight());
		productVO.setImageFileList(getImageFile(product.getProductThumb()));

		return productVO;
	}

	public List<ProductsVO> toProductDetailsVOList(List<Products> productList) {
		List<ProductsVO> productVOList = new ArrayList<ProductsVO>();
		for (Products product : productList) {
			productVOList.add(toProductDetailsVO(product));
		}
		return productVOList;
	}

	public byte[] getImageFile(String fileName) {
		byte[] imageData = null;
		ClassPathResource imgFile = new ClassPathResource("/static/images/" + fileName);
		try {
			imageData = StreamUtils.copyToByteArray(imgFile.getInputStream());
		} catch (IOException e) {
		}

		return imageData;
	}
}
