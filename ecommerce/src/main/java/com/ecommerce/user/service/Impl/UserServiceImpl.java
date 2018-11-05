package com.ecommerce.user.service.Impl;

import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommece.VO.CartItemsVO;
import com.ecommerce.mapper.CartItemsMapper;
import com.ecommerce.model.Cart;
import com.ecommerce.model.Cartitems;
import com.ecommerce.model.Users;
import com.ecommerce.shopArea.repository.CartItemRepository;
import com.ecommerce.shopArea.repository.CartRepository;
import com.ecommerce.user.VO.LoginVO;
import com.ecommerce.user.VO.UserVO;
import com.ecommerce.user.mapper.UserMapper;
import com.ecommerce.user.repository.UserRepository;
import com.ecommerce.user.service.IUserService;

@Service
public class UserServiceImpl implements IUserService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CartRepository cartRepository;

	@Autowired
	private CartItemRepository cartItemRepository;

	@Override
	public UserVO findByUserEmail(String userEmail) {
		// TODO Auto-generated method stub
		Users findUser = userRepository.findByUserEmail(userEmail);
		UserMapper mapUser = new UserMapper();
		UserVO userVO = mapUser.toUserVO(findUser);
		return userVO;
	}

	@Override
	public List<Users> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	@Override
	public UserVO findByUserEmailAndUserPassword(LoginVO loginVO) throws NullPointerException, Exception {
		// TODO Auto-generated method stub
		Users findUser = userRepository.findByUserEmail(loginVO.getUserEmail());
		String hashedPassword = hashString(loginVO.getUserPassword(), findUser.getUserVerificationCode());
		Users user = userRepository.findByUserEmailAndUserPassword(loginVO.getUserEmail(), hashedPassword);
		UserMapper mapUser = new UserMapper();
		UserVO userVO = mapUser.toUserVO(user);
		return userVO;
	}

	@Override
	public HashMap<String, String> save(Users user) {
		// TODO Auto-generated method stub
		HashMap<String, String> responseMap = new HashMap<String, String>();
		try {
			Users queryUser = userRepository.findByUserEmail(user.getUserEmail());
			if (queryUser != null) {
				responseMap.put("response", "exist");
				return responseMap;
			} else {
				String salt = getRandomKey();
				String hashedPassword = hashString(user.getUserPassword(), salt);
				user.setUserVerificationCode(salt);
				user.setUserPassword(hashedPassword);
				userRepository.save(user);
				responseMap.put("response", "registered");
				return responseMap;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			responseMap.put("response", "error");
			return responseMap;
		}
	}

	private static String getRandomKey() {
		return UUID.randomUUID().toString();
	}

	private static String hashString(String password, String salt) throws Exception {

		MessageDigest digest = MessageDigest.getInstance("SHA-256");
		byte[] hashedBytes = digest.digest((password + salt).getBytes("UTF-8"));

		return convertByteArrayToHexString(hashedBytes);

	}

	private static String convertByteArrayToHexString(byte[] arrayBytes) {
		StringBuffer stringBuffer = new StringBuffer();
		for (int i = 0; i < arrayBytes.length; i++) {
			stringBuffer.append(Integer.toString((arrayBytes[i] & 0xff) + 0x100, 16).substring(1));
		}
		return stringBuffer.toString();
	}

	@Override
	public Integer addToCart(Cart cart) {
		Cartitems cartItem = cartItemRepository
				.findByProducts_ProductId(cart.getCartitemses().get(0).getProducts().getProductId());
		if (Optional.ofNullable(cartItem).isPresent()) {
			cartItem.setQuantity(cartItem.getQuantity() + 1);
			cart.setCartitemses(Arrays.asList(cartItem));
		}
		Cart savedCart = cartRepository.save(cart);
		Integer cartItemCount = 0;
		if (Optional.ofNullable(savedCart.getCartId()).isPresent()) {
			cartItemCount = cartItemRepository.getCartItemCount(savedCart.getCartId());
		}
		return cartItemCount;
	}

	@Override
	public Integer getCartItemCount(Integer cartId) {
		Integer cartItemCount = 0;
		cartItemCount = cartItemRepository.getCartItemCount(cartId);
		return cartItemCount;
	}

	@Override
	public List<CartItemsVO> getCartItems(Integer cartId) {
		List<Cartitems> cartItemsList = new ArrayList<Cartitems>();
		CartItemsMapper cartItemsMapper = new CartItemsMapper();
		if (Optional.ofNullable(cartId).isPresent()) {
			cartItemsList = cartItemRepository.findByCart_CartId(cartId);
		}
		return cartItemsMapper.toCartItemsVOList(cartItemsList);
	}

}
