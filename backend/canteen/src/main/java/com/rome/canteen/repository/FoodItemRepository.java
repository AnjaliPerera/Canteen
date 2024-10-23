package com.rome.canteen.repository;

import com.rome.canteen.model.FoodItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodItemRepository extends MongoRepository<FoodItem, String> {

    // Custom query to find by mealType
    @Query("{ 'mealType' : ?0 }")
    List<FoodItem> findByMealType(String mealType);

    List<FoodItem> findByAvailability(String availability);
}
