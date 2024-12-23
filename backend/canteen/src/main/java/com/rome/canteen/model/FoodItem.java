package com.rome.canteen.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "foodItems")
public class FoodItem {

    @Id
    private String id;

    private String name;

    private double price;

    private String foodType;

    private String imageUrl;

    private boolean available; // Field to indicate availability, defaults to true

    private int quantity; // New field for quantity

    // No-argument constructor for Spring Data
    public FoodItem() {
        this.available = true; // Default to available if not explicitly set
        this.quantity = 1; // Default quantity to 1 if not explicitly set
    }

    // Parameterized constructor for ease of object creation
    public FoodItem(String name, double price, String foodType, String imageUrl, int quantity) {
        this.name = name;
        this.price = price;
        this.foodType = foodType;
        this.imageUrl = imageUrl;
        this.available = true; // Default to available if not explicitly set
        this.quantity = quantity; // Set initial quantity
    }

    // Optionally add another constructor to explicitly set 'available' status if needed
    public FoodItem(String name, double price, String foodType, String imageUrl, boolean available, int quantity) {
        this.name = name;
        this.price = price;
        this.foodType = foodType;
        this.imageUrl = imageUrl;
        this.available = available; // Allows flexibility to set availability
        this.quantity = quantity; // Set initial quantity
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public String getFoodType() { return foodType; }
    public void setFoodType(String foodType) { this.foodType = foodType; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public boolean isAvailable() { return available; }
    public void setAvailable(boolean available) { this.available = available; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    @Override
    public String toString() {
        return "FoodItem{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", foodType='" + foodType + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", available=" + available +
                ", quantity=" + quantity +
                '}';
    }
}
