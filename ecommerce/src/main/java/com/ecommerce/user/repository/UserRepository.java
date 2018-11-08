package com.ecommerce.user.repository;

import org.springframework.stereotype.Repository;

import com.ecommerce.model.Users;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

@Repository
public interface UserRepository extends CrudRepository<Users,Integer>{
	Users findByUserEmail(String userEmail);
	
	Users findByUserEmailAndUserPassword(String userEmail,String userPassword);
	
	List<Users> findAll();
	
	Users save(Users user);
}
