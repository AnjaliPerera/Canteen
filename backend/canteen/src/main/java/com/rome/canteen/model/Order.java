package com.rome.canteen.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Objects;

@Document(collection = "orders")
public class Order {
    @Id
    private String id;
    private String orderId; // Generated based on pickupTime
    private List<FoodItem> items;
    private double totalPrice;
    private String pickupTime;

    // Constructor
    public Order() {
    }

    public Order(String orderId, List<FoodItem> items, double totalPrice, String pickupTime) {
        this.orderId = orderId;
        this.items = items;
        this.totalPrice = totalPrice;
        this.pickupTime = pickupTime;
    }

    // Getters and Setters
    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public List<FoodItem> getItems() {
        return items;
    }

    public void setItems(List<FoodItem> items) {
        this.items = items;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getPickupTime() {
        return pickupTime;
    }

    public void setPickupTime(String pickupTime) {
        this.pickupTime = pickupTime;
    }

    // Override toString for easier debugging
    @Override
    public String toString() {
        return "Order{" +
                "orderId='" + orderId + '\'' +
                ", items=" + items +
                ", totalPrice=" + totalPrice +
                ", pickupTime='" + pickupTime + '\'' +
                '}';
    }
}
