package com.rome.canteen.config;

import com.rome.canteen.service.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.http.HttpMethod;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtFilter jwtFilter;
    private final UserService userService;

    public SecurityConfig(JwtFilter jwtFilter, UserService userService) {
        this.jwtFilter = jwtFilter;
        this.userService = userService;
    }

    // Password encoder bean using BCrypt
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // Custom Authentication Provider using UserService and BCrypt Password Encoder
    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    // Define AuthenticationManager bean
    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                .authenticationProvider(authenticationProvider())
                .build();
    }

    // CORS configuration to allow requests from the frontend
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:5173")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }

    // SecurityFilterChain configuration
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // Disable CSRF as we are using a stateless API with JWT
                .csrf(AbstractHttpConfigurer::disable)
                // Enable CORS settings defined in `corsConfigurer`
                .cors()
                .and()
                // Authorization configuration for different endpoints
                .authorizeHttpRequests(authorize -> authorize
                        // Public endpoints
                        .requestMatchers("/auth/login", "/auth/signup", "/auth/forgot-password", "/api/ratings","/auth/reset-password").permitAll()
                        .requestMatchers("/api/contact/submit", "/api/fooditems/**","/auth/users/**").permitAll()
                        .requestMatchers("/api/orders/**").permitAll()


                        // Restricted endpoints
                        .requestMatchers("/api/fooditems/add", "/api/fooditems/delete/**", "/api/fooditems/{id}","/auth/users","/api/fooditems/{id}/toggle-availability").hasRole("OWNER") // Only OWNER role can add/delete food items
                        .requestMatchers("/auth/users/**").hasAnyRole("ADMIN", "OWNER") // ADMIN or OWNER can access user-related endpoints
                        .requestMatchers("/api/contact/messages").hasAnyRole("ADMIN", "OWNER") // ADMIN or OWNER can view contact messages
                        .requestMatchers(HttpMethod.PUT, "/api/fooditems/{id}/toggle-availability").hasRole("OWNER")




                        .anyRequest().authenticated() // All other requests require authentication
                )
                // Set session management to stateless as we are using JWT for authentication
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                // Register the custom authentication provider and JWT filter
                .authenticationProvider(authenticationProvider())
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
