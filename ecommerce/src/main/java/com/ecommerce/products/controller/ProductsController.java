package com.ecommerce.products.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommece.VO.ProductsVO;
import com.ecommerce.products.service.Impl.ProductsServiceImpl;

@RestController
public class ProductsController {
	@Autowired
	private ProductsServiceImpl productsService;

	@RequestMapping(name = "getAllProducts")
	public ResponseEntity<List<ProductsVO>> getAllProducts() {
		List<ProductsVO> productList = productsService.findAll();
		return new ResponseEntity<List<ProductsVO>>(productList, HttpStatus.OK);
	}
}
