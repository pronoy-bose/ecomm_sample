package com.ecommerce.products.service.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommece.VO.ProductsVO;
import com.ecommerce.mapper.ProductListMapper;
import com.ecommerce.model.Products;
import com.ecommerce.products.repository.ProductsRepository;
import com.ecommerce.products.service.IProductsService;

@Service
public class ProductsServiceImpl implements IProductsService {

	@Autowired
	private ProductsRepository productsRepository;

	@Override
	public List<ProductsVO> findAll() {
		List<Products> productList = productsRepository.findAll();
		ProductListMapper productMapper = new ProductListMapper();
		List<ProductsVO> productVOList = new ArrayList<ProductsVO>();
		productVOList = productMapper.toProductDetailsVOList(productList);
		return productVOList;
	}

}
