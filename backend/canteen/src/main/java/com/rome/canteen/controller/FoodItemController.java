package com.rome.canteen.controller;

import com.rome.canteen.model.FoodItem;
import com.rome.canteen.service.FoodItemService;
import com.google.firebase.cloud.StorageClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/fooditems")
public class FoodItemController {

    @Autowired
    private FoodItemService foodItemService;

    // GET all food items
    @GetMapping
    public ResponseEntity<List<FoodItem>> getAllFoodItems() {
        List<FoodItem> foodItems = foodItemService.getAllFoodItems();
        return ResponseEntity.ok(foodItems);
    }

    // GET available food items only
    @GetMapping("/available")
    public ResponseEntity<List<FoodItem>> getAvailableFoodItems() {
        List<FoodItem> availableItems = foodItemService.getAvailableFoodItems();
        return availableItems.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(availableItems);
    }

    // GET food items by food type
    @GetMapping("/type/{foodType}")
    public ResponseEntity<List<FoodItem>> getFoodItemsByFoodType(@PathVariable String foodType) {
        List<FoodItem> items = foodItemService.getFoodItemsByType(foodType);
        return items.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(items);
    }

    // POST add a new food item (with image upload)
    @PostMapping("/add")
    public ResponseEntity<String> addFoodItem(
            @RequestParam("name") String name,
            @RequestParam("price") double price,
            @RequestParam("foodType") String foodType,
            @RequestParam("imageUrl") String imageUrl, // URL from Firebase
            @RequestParam(value = "available", defaultValue = "true") boolean available) {

        try {
            // Create a new FoodItem object with the received parameters
            FoodItem foodItem = new FoodItem();
            foodItem.setName(name);
            foodItem.setPrice(price);
            foodItem.setFoodType(foodType);
            foodItem.setImageUrl(imageUrl); // Image URL with Firebase token
            foodItem.setAvailable(available);

            // Save the food item using the service
            foodItemService.addFoodItem(foodItem);

            return ResponseEntity.ok("Food item added successfully with image uploaded to Firebase!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error: " + e.getMessage());

        }
    }


    // PUT update an existing food item by ID
    @PutMapping("/{id}")
    public ResponseEntity<String> updateFoodItem(@PathVariable String id,
                                                 @RequestParam("name") String name,
                                                 @RequestParam("price") double price,
                                                 @RequestParam("foodType") String foodType,
                                                 @RequestParam(value = "image", required = false) MultipartFile image,
                                                 @RequestParam("available") boolean available) {
        try {
            Optional<FoodItem> existingFoodItem = foodItemService.getFoodItemById(id);
            if (existingFoodItem.isEmpty()) {
                return ResponseEntity.status(404).body("Food item not found");
            }

            FoodItem foodItem = existingFoodItem.get();
            foodItem.setName(name);
            foodItem.setPrice(price);
            foodItem.setFoodType(foodType);
            foodItem.setAvailable(available);



            foodItemService.updateFoodItem(id, foodItem);
            return ResponseEntity.ok("Food item updated successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        }
    }

    // DELETE a food item by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteFoodItem(@PathVariable String id) {
        try {
            foodItemService.deleteFoodItem(id);
            return ResponseEntity.ok("Food item deleted successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        }
    }


    // Endpoint for searching food items by name
    @GetMapping("api/search")
    public ResponseEntity<List<FoodItem>> searchFoodItemsByName(@RequestParam("name") String name) {
        List<FoodItem> items = foodItemService.getFoodItemsByName(name);
        return items.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(items);
    }



}
