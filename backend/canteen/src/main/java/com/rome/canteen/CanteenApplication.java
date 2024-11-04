package com.rome.canteen;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
@SpringBootApplication
@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class })

public class CanteenApplication {

	public static void main(String[] args) {
		SpringApplication.run(CanteenApplication.class, args);
	}

	@PostConstruct
	public void initializeFirebase() {
		try {
			InputStream serviceAccount = getClass().getClassLoader()
					.getResourceAsStream("serviceAccountKey.json");

			if (serviceAccount == null) {
				throw new RuntimeException("serviceAccountKey.json not found in resources folder");
			}

			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials.fromStream(serviceAccount))
					.setStorageBucket("rome-829b9.appspot.com") // Replace with your actual bucket name
					.build();

			if (FirebaseApp.getApps().isEmpty()) {
				FirebaseApp.initializeApp(options);
			}

			System.out.println("Firebase has been initialized.");
		} catch (IOException e) {
			e.printStackTrace();
			throw new RuntimeException("Could not initialize Firebase: " + e.getMessage());
		}
	}
}
