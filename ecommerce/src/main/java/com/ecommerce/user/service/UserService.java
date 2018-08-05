package com.ecommerce.user.service;

import java.util.HashMap;
import java.util.List;

import com.ecommerce.model.Users;
import com.ecommerce.user.VO.LoginVO;
import com.ecommerce.user.VO.UserVO;

public interface UserService {

	List<Users> findAll();
	
	UserVO findByUserEmailAndUserPassword(LoginVO loginVO) throws NullPointerException, Exception;

	UserVO findByUserEmail(String userEmail);
	
	HashMap<String, String> save(Users user);
}
