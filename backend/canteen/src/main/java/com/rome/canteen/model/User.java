package com.rome.canteen.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "users")
public class User {

    @Id
    private String id;  // MongoDB document ID
    private String userId;  // Unique identifier for the user, e.g., student/staff ID
    private String name;
    private String email;
    private String password;  // Encrypted password
    private String role;  // Role of the user (e.g., USER, ADMIN, OWNER)
    private String imageBase64;  // Base64 encoded profile image (optional)

    // Fields for password reset functionality
    private String resetToken;  // Token used for password reset
    private LocalDateTime tokenExpiration;  // Expiration time for the reset token

    // Default constructor
    public User() {}

    // Parameterized constructor
    public User(String userId, String name, String email, String password, String role, String imageBase64) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.imageBase64 = imageBase64;
    }

    // Getters and Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getImageBase64() {
        return imageBase64;
    }

    public void setImageBase64(String imageBase64) {
        this.imageBase64 = imageBase64;
    }

    public String getResetToken() {
        return resetToken;
    }

    public void setResetToken(String resetToken) {
        this.resetToken = resetToken;
    }

    public LocalDateTime getTokenExpiration() {
        return tokenExpiration;
    }

    public void setTokenExpiration(LocalDateTime tokenExpiration) {
        this.tokenExpiration = tokenExpiration;
    }

    // Override toString() for better logging and debugging
    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", userId='" + userId + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", role='" + role + '\'' +
                ", resetToken='" + resetToken + '\'' +
                ", tokenExpiration=" + tokenExpiration +
                '}';
    }
}
