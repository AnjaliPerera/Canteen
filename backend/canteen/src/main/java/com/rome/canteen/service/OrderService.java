package com.rome.canteen.service;

import com.rome.canteen.model.Order;
import com.rome.canteen.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final SequenceService sequenceService;

    @Autowired
    public OrderService(OrderRepository orderRepository, SequenceService sequenceService) {
        this.orderRepository = orderRepository;
        this.sequenceService = sequenceService;
    }

    // Generate a unique orderId based on pickup time category
    private String generateOrderId(String pickupTime) {
        String prefix;
        int hour = Integer.parseInt(pickupTime.split(":")[0]); // Extract hour from "HH:mm" format

        if (hour >= 7 && hour <= 11) {
            prefix = "B"; // Breakfast
        } else if (hour >= 12 && hour <= 17) {
            prefix = "L"; // Lunch
        } else if (hour >= 18 && hour <= 19) {
            prefix = "D"; // Dinner
        } else {
            throw new IllegalArgumentException("Invalid pickup time");
        }

        long sequenceNumber = sequenceService.getNextSequence(prefix); // Get next sequence for category
        return prefix + String.format("%03d", sequenceNumber); // Generate ID like B001, L002, D003
    }

    public Order createOrder(Order order) {
        order.setOrderId(generateOrderId(order.getPickupTime())); // Set generated order ID
        return orderRepository.save(order);
    }

    public Optional<Order> getOrderByOrderId(String orderId) {
        return orderRepository.findByOrderId(orderId);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}
