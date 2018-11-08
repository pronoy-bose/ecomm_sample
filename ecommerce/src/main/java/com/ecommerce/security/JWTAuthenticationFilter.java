package com.ecommerce.security;

import com.auth0.jwt.JWT;
import com.ecommerce.user.VO.LoginVO;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;
import static com.ecommerce.security.SecurityConstants.EXPIRATION_TIME;
import static com.ecommerce.security.SecurityConstants.HEADER_STRING;
import static com.ecommerce.security.SecurityConstants.SECRET;
import static com.ecommerce.security.SecurityConstants.TOKEN_PREFIX;
import static com.ecommerce.security.SecurityConstants.USER_ID_HEADER;
import static com.ecommerce.security.SecurityConstants.USER_EMAIL_HEADER;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private AuthenticationManager authenticationManager;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req,
                                                HttpServletResponse res) throws AuthenticationException {
        try {
            LoginVO creds = new ObjectMapper()
                    .readValue(req.getInputStream(), LoginVO.class);

            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            creds.getUserEmail(),
                            creds.getUserPassword(),
                            new ArrayList<>())
            );
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req,
                                            HttpServletResponse res,
                                            FilterChain chain,
                                            Authentication auth) throws IOException, ServletException {
    	Map<String,String> loggedInUserDetails = new HashMap<String,String>();
    	loggedInUserDetails = (Map<String, String>) auth.getPrincipal();
        String token = JWT.create()
                .withSubject((loggedInUserDetails.get(USER_EMAIL_HEADER)))
                .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .sign(HMAC512(SECRET.getBytes()));
        res.addHeader(HEADER_STRING, TOKEN_PREFIX + token);
        res.addHeader(USER_ID_HEADER, loggedInUserDetails.get(USER_ID_HEADER));
    }
    
    @Override
	public void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) throws IOException, ServletException {

		response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
	}
    
}