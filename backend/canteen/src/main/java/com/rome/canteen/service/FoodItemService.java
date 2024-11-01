package com.rome.canteen.service;

import com.rome.canteen.model.FoodItem;
import com.rome.canteen.repository.FoodItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodItemService {

    @Autowired
    private FoodItemRepository foodItemRepository;

    // Retrieve all food items from the database
    public List<FoodItem> getAllFoodItems() {
        return foodItemRepository.findAll();
    }

    // Retrieve available food items from the database
    public List<FoodItem> getAvailableFoodItems() {
        return foodItemRepository.findByAvailableTrue();
    }

    // Retrieve food items by food type
    public List<FoodItem> getFoodItemsByType(String foodType) {
        return foodItemRepository.findByFoodTypeIgnoreCase(foodType);
    }

    // Add a new food item to the database
    public void addFoodItem(FoodItem foodItem) {
        foodItemRepository.save(foodItem);
    }

    // Update an existing food item in the database by ID
    public void updateFoodItem(String id, FoodItem foodItem) {
        // Ensure the ID is set correctly for update
        foodItem.setId(id);
        foodItemRepository.save(foodItem);
    }

    // Delete a food item from the database by ID
    public void deleteFoodItem(String id) {
        foodItemRepository.deleteById(id);
    }

    // Retrieve a specific food item by ID
    public Optional<FoodItem> getFoodItemById(String id) {
        return foodItemRepository.findById(id);
    }


    // Method to search food items by name using partial matching
    public List<FoodItem> getFoodItemsByName(String name) {
        return foodItemRepository.findByNameContainingIgnoreCase(name);
    }
}