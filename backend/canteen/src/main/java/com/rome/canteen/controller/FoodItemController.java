package com.rome.canteen.controller;

import com.rome.canteen.model.FoodItem;
import com.rome.canteen.service.FoodItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Base64;
import java.util.List;
import java.util.Optional;

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

    // GET all food items with mealType "DINNER"
    @GetMapping("/dinner")
    public ResponseEntity<List<FoodItem>> getDinnerItems() {
        List<FoodItem> dinnerItems = foodItemService.getFoodItemsByMealType("DINNER");
        if (dinnerItems.isEmpty()) {
            return ResponseEntity.noContent().build(); // Return 204 No Content if no dinner items found
        }
        return ResponseEntity.ok(dinnerItems); // Return 200 OK with the list of dinner items
    }




    // GET all food items with mealType "BREAKFAST"
    @GetMapping("/breakfast")
    public ResponseEntity<List<FoodItem>> getBreakfastItems() {
        List<FoodItem> breakfastItems = foodItemService.getFoodItemsByMealType("BREAKFAST");
        if (breakfastItems.isEmpty()) {
            return ResponseEntity.noContent().build(); // Return 204 No Content if no breakfast items found
        }
        return ResponseEntity.ok(breakfastItems); // Return 200 OK with the list of breakfast items
    }

    // GET all food items with mealType "LUNCH"
    @GetMapping("/lunch")
    public ResponseEntity<List<FoodItem>> getLunchItems() {
        List<FoodItem> lunchItems = foodItemService.getFoodItemsByMealType("LUNCH");
        if (lunchItems.isEmpty()) {
            return ResponseEntity.noContent().build(); // Return 204 No Content if no lunch items found
        }
        return ResponseEntity.ok(lunchItems); // Return 200 OK with the list of lunch items
    }

    // GET all food items with mealType "DRINKS"
    @GetMapping("/drinks")
    public ResponseEntity<List<FoodItem>> getDrinksItems() {
        List<FoodItem> drinksItems = foodItemService.getFoodItemsByMealType("DRINKS");
        if (drinksItems.isEmpty()) {
            return ResponseEntity.noContent().build(); // Return 204 No Content if no drinks items found
        }
        return ResponseEntity.ok(drinksItems); // Return 200 OK with the list of drinks items
    }

    // GET all food items with mealType "DESSERT"
    @GetMapping("/dessert")
    public ResponseEntity<List<FoodItem>> getDessertItems() {
        List<FoodItem> dessertItems = foodItemService.getFoodItemsByMealType("DESSERT");
        if (dessertItems.isEmpty()) {
            return ResponseEntity.noContent().build(); // Return 204 No Content if no dessert items found
        }
        return ResponseEntity.ok(dessertItems); // Return 200 OK with the list of dessert items
    }

    // GET all food items with mealType "SHORT EAT"
    @GetMapping("/short-eat")
    public ResponseEntity<List<FoodItem>> getShortEatItems() {
        List<FoodItem> shortEatItems = foodItemService.getFoodItemsByMealType("SHORT EAT");
        if (shortEatItems.isEmpty()) {
            return ResponseEntity.noContent().build(); // Return 204 No Content if no short eat items found
        }
        return ResponseEntity.ok(shortEatItems); // Return 200 OK with the list of short eat items
    }



    // GET all available food items
    @GetMapping("/available")
    public ResponseEntity<List<FoodItem>> getAvailableFoodItems() {
        List<FoodItem> availableItems = foodItemService.getAvailableFoodItems();
        if (availableItems.isEmpty()) {
            return ResponseEntity.noContent().build(); // Return 204 No Content if no items are available
        }
        return ResponseEntity.ok(availableItems); // Return 200 OK with the list of available items
    }




    // GET a specific food item by ID
    @GetMapping("/{id}")
    public ResponseEntity<FoodItem> getFoodItemById(@PathVariable String id) {
        Optional<FoodItem> foodItem = foodItemService.getFoodItemById(id);
        return foodItem.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // POST a new food item
    @PostMapping("/add")
    public ResponseEntity<String> addFoodItem(@RequestParam("name") String name,
                                              @RequestParam("description") String description,
                                              @RequestParam("price") double price,
                                              @RequestParam("availability") String availability,
                                              @RequestParam("mealType") String mealType,
                                              @RequestParam("image") MultipartFile image) {
        try {
            // Convert image to Base64 string
            String imageBase64 = Base64.getEncoder().encodeToString(image.getBytes());

            // Create a new FoodItem object and save it
            FoodItem foodItem = new FoodItem(null, name, description, price, availability, mealType, imageBase64);
            foodItemService.save(foodItem);

            return ResponseEntity.ok("Food item added successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        }
    }

    // PUT (Update) an existing food item by ID
    @PutMapping("/{id}")
    public ResponseEntity<String> updateFoodItem(@PathVariable String id,
                                                 @RequestParam("name") String name,
                                                 @RequestParam("description") String description,
                                                 @RequestParam("price") double price,
                                                 @RequestParam("availability") String availability,
                                                 @RequestParam("mealType") String mealType,
                                                 @RequestParam(value = "image", required = false) MultipartFile image) {
        try {
            // Find the existing food item by ID
            Optional<FoodItem> existingFoodItem = foodItemService.getFoodItemById(id);
            if (existingFoodItem.isEmpty()) {
                return ResponseEntity.status(404).body("Food item not found");
            }

            // Update the fields of the existing food item
            FoodItem foodItem = existingFoodItem.get();
            foodItem.setName(name);
            foodItem.setDescription(description);
            foodItem.setPrice(price);
            foodItem.setAvailability(availability);
            foodItem.setMealType(mealType);

            // If an image is provided, update it
            if (image != null && !image.isEmpty()) {
                String imageBase64 = Base64.getEncoder().encodeToString(image.getBytes());
                foodItem.setImageBase64(imageBase64);
            }

            // Save the updated food item
            foodItemService.save(foodItem);

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
}
