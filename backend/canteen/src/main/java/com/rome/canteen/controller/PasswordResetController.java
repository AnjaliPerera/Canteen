package com.rome.canteen.controller;

import com.rome.canteen.model.User;
import com.rome.canteen.service.EmailService;
import com.rome.canteen.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@RestController
@RequestMapping("/api")
public class PasswordResetController {

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Temporary storage for OTPs and their expiration times
    private Map<String, String> otpStore = new HashMap<>();  // Stores OTPs keyed by user email
    private Map<String, LocalDateTime> otpExpiry = new HashMap<>();  // Stores OTP expiration times keyed by user email

    /**
     * Endpoint to generate and send an OTP to the user's email for password reset.
     */
    @PostMapping("/generate-otp")
    public ResponseEntity<String> generateOtp(@RequestBody Map<String, String> request) {
        String userEmail = request.get("email");

        // Validate the email input
        if (userEmail == null || userEmail.isEmpty()) {
            return new ResponseEntity<>("Email is required.", HttpStatus.BAD_REQUEST);
        }

        // Check if the user exists in the database
        User user = userService.findByEmail(userEmail);
        if (user == null) {
            return new ResponseEntity<>("User not found.", HttpStatus.NOT_FOUND);
        }

        // Generate a 6-digit OTP
        String otp = String.format("%06d", new Random().nextInt(1000000));
        generateAndStoreOtp(userEmail, otp);

        // Send OTP email
        try {
            emailService.sendOtpEmail(userEmail, otp);
        } catch (Exception e) {
            e.printStackTrace();  // Log the exception for debugging
            return new ResponseEntity<>("Failed to send OTP email. Please try again later.", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>("OTP sent to your email.", HttpStatus.OK);
    }

    /**
     * Endpoint to reset the user's password using the OTP.
     */
    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody Map<String, String> request) {
        String userEmail = request.get("email");
        String otp = request.get("otp");
        String newPassword = request.get("newPassword");

        // Validate request data
        if (userEmail == null || otp == null || newPassword == null) {
            return new ResponseEntity<>("Email, OTP, and new password are required.", HttpStatus.BAD_REQUEST);
        }

        // Retrieve stored OTP and expiration time for the given email
        String storedOTP = otpStore.get(userEmail);
        LocalDateTime expiryTime = otpExpiry.get(userEmail);

        // Validate OTP and check if it's expired
        if (storedOTP == null || expiryTime == null || !storedOTP.equals(otp) || LocalDateTime.now().isAfter(expiryTime)) {
            return new ResponseEntity<>("Invalid or expired OTP.", HttpStatus.BAD_REQUEST);
        }

        // OTP is valid; proceed with password reset
        User user = userService.findByEmail(userEmail);
        if (user == null) {
            return new ResponseEntity<>("User not found.", HttpStatus.NOT_FOUND);
        }

        // Encrypt and set the new password
        String encodedPassword = passwordEncoder.encode(newPassword);
        user.setPassword(encodedPassword);
        userService.saveUser(user);

        // Clear OTP from temporary storage after successful password reset
        otpStore.remove(userEmail);
        otpExpiry.remove(userEmail);

        return new ResponseEntity<>("Password reset successful.", HttpStatus.OK);
    }

    /**
     * Helper method to generate and store OTP with expiration time.
     * This is called by the generateOtp endpoint.
     */
    private void generateAndStoreOtp(String email, String otp) {
        otpStore.put(email, otp);
        otpExpiry.put(email, LocalDateTime.now().plusMinutes(10));  // OTP expires in 10 minutes
    }
}
