package com.rome.canteen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    /**
     * Sends a general email with the specified subject and text.
     *
     * @param to      recipient's email address
     * @param subject email subject
     * @param text    email body text
     */
    public void sendEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);

        try {
            mailSender.send(message);
            System.out.println("Email sent successfully to " + to);
        } catch (Exception e) {
            System.err.println("Failed to send email to " + to + ": " + e.getMessage());
            // Optionally log the error or throw a custom exception for further handling
        }
    }

    /**
     * Generates a 6-digit OTP as a string.
     *
     * @return generated OTP
     */
    public String generateOtp() {
        return String.format("%06d", new Random().nextInt(1000000));
    }

    /**
     * Sends an OTP email with a predefined subject and message body.
     *
     * @param to  recipient's email address
     * @param otp one-time password for verification
     */
    public void sendOtpEmail(String to, String otp) {
        String subject = "Password Reset OTP";
        String text = "Hello,\n\nYour OTP for password reset is: " + otp + "\nThis code will expire in 10 minutes.";

        try {
            sendEmail(to, subject, text);  // Reuse the sendEmail method for OTP emails
            System.out.println("OTP email sent successfully to " + to);
        } catch (Exception e) {
            System.err.println("Failed to send OTP email to " + to + ": " + e.getMessage());
            // Optionally log the error or handle as needed
        }
    }
}
