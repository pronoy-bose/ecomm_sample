package com.ecommerce.user.mapper;

import com.ecommerce.model.Users;
import com.ecommerce.user.VO.UserVO;

public class UserMapper {
	
	public UserVO toUserVO(Users user){
		
		UserVO userVO = new UserVO();
		userVO.setUserId(user.getUserId());
		userVO.setUserEmail(user.getUserEmail());
		userVO.setUserFirstName(user.getUserFirstName());
		userVO.setUserLastName(user.getUserLastName());
		userVO.setUserCity(user.getUserCity());
		userVO.setUserState(user.getUserState());
		userVO.setUserZip(user.getUserZip());
		userVO.setUserEmailVerified(user.getUserEmailVerified());
		userVO.setUserRegistrationDate(user.getUserRegistrationDate());
		userVO.setUserVerificationCode(user.getUserVerificationCode());
		userVO.setUserIp(user.getUserIp());
		userVO.setUserPhone(user.getUserPhone());
		userVO.setUserFax(user.getUserFax());
		userVO.setUserCountry(user.getUserCountry());
		userVO.setUserAddress(user.getUserAddress());
		userVO.setUserAddress2(user.getUserAddress2());
		userVO.setOrderses(user.getOrderses());
		userVO.setCarts(user.getCarts());
		
		return userVO;		
	}

}
