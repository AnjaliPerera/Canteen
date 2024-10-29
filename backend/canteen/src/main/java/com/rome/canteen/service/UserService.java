package com.rome.canteen.service;

import com.rome.canteen.model.User;
import com.rome.canteen.repository.UserRepository;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;  // Inject EmailService

    public UserService(UserRepository userRepository, @Lazy PasswordEncoder passwordEncoder, EmailService emailService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.emailService = emailService;
    }

    // Register a new user
    public void registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new IllegalArgumentException("Email is already in use.");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    // Load user by email for authentication
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + user.getRole().toUpperCase()));
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
    }

    // Find user by email
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Update user details
    public void updateUser(User updatedUser) {
        User existingUser = userRepository.findByEmail(updatedUser.getEmail());
        if (existingUser != null) {
            existingUser.setName(updatedUser.getName());
            if (!updatedUser.getPassword().equals(existingUser.getPassword())) {
                existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
            }
            existingUser.setRole(updatedUser.getRole());
            userRepository.save(existingUser);
        } else {
            throw new UsernameNotFoundException("User not found with email: " + updatedUser.getEmail());
        }
    }

    // Delete user by email
    public void deleteUser(String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            userRepository.delete(user);
        } else {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
    }

    // Generate password reset token
    public void generatePasswordResetToken(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
        String token = UUID.randomUUID().toString();
        user.setResetToken(token);
        user.setTokenExpiration(LocalDateTime.now().plusMinutes(30)); // Token expires in 30 minutes
        userRepository.save(user);

        // Send password reset email
        String resetUrl = "http://localhost:8080/auth/reset-password?token=" + token;
        emailService.sendEmail(user.getEmail(), "Password Reset Request", "To reset your password, click the link below:\n" + resetUrl);
    }

    // Reset password with the token
    public boolean resetPassword(String token, String newPassword) {
        User user = userRepository.findByResetToken(token);
        if (user != null && user.getTokenExpiration().isAfter(LocalDateTime.now())) {
            user.setPassword(passwordEncoder.encode(newPassword));
            user.setResetToken(null); // Clear the token after use
            user.setTokenExpiration(null);
            userRepository.save(user);
            return true;
        }
        return false;
    }
}
