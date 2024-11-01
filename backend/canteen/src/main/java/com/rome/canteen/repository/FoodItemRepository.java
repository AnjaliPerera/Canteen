package com.rome.canteen.repository;

import com.rome.canteen.model.FoodItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface FoodItemRepository extends MongoRepository<FoodItem, String> {
    // Custom query method to find food items by food type (ignoring case)
    List<FoodItem> findByFoodTypeIgnoreCase(String foodType);

    // Custom query method to find only available food items
    List<FoodItem> findByAvailableTrue();

    // Custom query method for partial matching by name (case-insensitive)
    List<FoodItem> findByNameContainingIgnoreCase(String name);



    }


