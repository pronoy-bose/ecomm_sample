package com.ecommerce.security;

public class SecurityConstants {
	public static final String SECRET = "SecretKeyToGenJWTs";
	public static final long EXPIRATION_TIME = 864_000_000; // 10 days
	public static final String TOKEN_PREFIX = "Bearer ";
	public static final String HEADER_STRING = "Authorization";
	public static final String SIGN_UP_URL = "/registerUser";
	public static final String USER_ID_HEADER = "userId";
	public static final String USER_EMAIL_HEADER = "userMail";
}
