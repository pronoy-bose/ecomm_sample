package com.ecommerce.user.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.model.Cart;
import com.ecommerce.model.Users;
import com.ecommerce.user.VO.UserVO;
import com.ecommerce.user.service.IUserService;

@RestController
public class UserController {
	@Autowired
	private IUserService userService;

	@GetMapping(path = "/getAllUsers")
	public ResponseEntity<List<Users>> getAllUsers() {
		List<Users> users = userService.findAll();

		return new ResponseEntity<List<Users>>(users, HttpStatus.OK);
	}

	@PostMapping(path = "/getByUserEmail")
	public ResponseEntity<UserVO> getByUserEmail(@RequestBody String userEmail) {
		UserVO user;
		try {
			user = userService.findByUserEmail(userEmail);
			return new ResponseEntity<UserVO>(user, HttpStatus.OK);
		} catch (NullPointerException e) {
			return new ResponseEntity<UserVO>(HttpStatus.UNAUTHORIZED);
		} catch (Exception e) {
			return new ResponseEntity<UserVO>(HttpStatus.UNAUTHORIZED);
		}
	}

	@PostMapping(path = "/registerUser")
	public ResponseEntity<HashMap<String, String>> registerUser(@RequestBody Users user) {
		try {
			HashMap<String, String> saved = userService.save(user);
			if (saved.get("response").equals("registered")) {
				return new ResponseEntity<HashMap<String, String>>(saved, HttpStatus.OK);
			} else if (saved.get("response").equals("exist")) {
				return new ResponseEntity<HashMap<String, String>>(saved, HttpStatus.OK);
			} else {
				return new ResponseEntity<HashMap<String, String>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} catch (Exception e) {
			return new ResponseEntity<HashMap<String, String>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping(path = "/addToCart")
	public ResponseEntity<Integer> addToCart(@RequestHeader("userId") Users user, @RequestBody Cart cartItem) {
		cartItem.setCartId(user.getUserId());
		cartItem.setUsers(user);
		cartItem.getCartitemses().get(0).setCart(cartItem);;
		Integer cartItemCount = 0;
		try {
			cartItemCount = userService.addToCart(cartItem);
		} catch (Exception e) {
			return new ResponseEntity<Integer>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Integer>(cartItemCount, HttpStatus.OK);

	}

	@GetMapping(path = "/getCartItemCount")
	public ResponseEntity<Integer> getCartItemCount(@RequestHeader("userId") Integer cartId) {
		Integer cartItemCount = 0;
		try {
			cartItemCount = userService.getCartItemCount(cartId);
		} catch (Exception e) {
			return new ResponseEntity<Integer>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Integer>(cartItemCount, HttpStatus.OK);
	}

}
