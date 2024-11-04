package com.rome.canteen.service;

import com.rome.canteen.model.Order;
import com.rome.canteen.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final SequenceService sequenceService;

    // Track counts of orders per time slot
    private final ConcurrentHashMap<String, Integer> timeSlotOrderCount = new ConcurrentHashMap<>();

    @Autowired
    public OrderService(OrderRepository orderRepository, SequenceService sequenceService) {
        this.orderRepository = orderRepository;
        this.sequenceService = sequenceService;
    }

    // Generate a unique orderId based on pickup time category and slot limit
    private String generateOrderId(String pickupTime) {
        String prefix;
        int hour = Integer.parseInt(pickupTime.split(":")[0]); // Extract hour from "HH:mm" format

        // Determine the prefix based on the time of day
        if (hour >= 7 && hour <= 11) {
            prefix = "B"; // Breakfast
        } else if (hour >= 12 && hour <= 17) {
            prefix = "L"; // Lunch
        } else if (hour >= 18 && hour <= 19) {
            prefix = "D"; // Dinner
        } else {
            throw new IllegalArgumentException("Invalid pickup time");
        }

        // Increment the count for the specific time slot, initializing if necessary
        timeSlotOrderCount.putIfAbsent(pickupTime, 0);
        int count = timeSlotOrderCount.get(pickupTime);

        // Check if the slot has reached its limit
        if (count >= 5) {
            throw new IllegalStateException("Order limit reached for this time slot");
        }

        // Increment the count and update the map
        timeSlotOrderCount.put(pickupTime, count + 1);

        // Generate the creative order ID
        String orderId = prefix + pickupTime.replace(":", "") + (count + 1); // Example: B07301 for 7:30, first order in slot
        return orderId;
    }

    public Order createOrder(Order order) {
        // Generate a unique order ID with pickup time and slot limit check
        order.setOrderId(generateOrderId(order.getPickupTime()));
        return orderRepository.save(order);
    }

    public Optional<Order> getOrderByOrderId(String orderId) {
        return orderRepository.findByOrderId(orderId);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }




    // Optional: Reset the slot counts at midnight if needed
    public void resetTimeSlotOrderCounts() {
        timeSlotOrderCount.clear();
    }
}
