package com.rome.canteen.model;

import java.util.ArrayList;
import java.util.List;

public class MealTypeFoodDetails {
    private List<FoodDetail> breakfast;
    private List<FoodDetail> lunch;
    private List<FoodDetail> dinner;

    public MealTypeFoodDetails() {
        this.breakfast = new ArrayList<>();
        this.lunch = new ArrayList<>();
        this.dinner = new ArrayList<>();
    }

    // Getters and Setters
    public List<FoodDetail> getBreakfast() {
        return breakfast;
    }

    public void setBreakfast(List<FoodDetail> breakfast) {
        this.breakfast = breakfast;
    }

    public List<FoodDetail> getLunch() {
        return lunch;
    }

    public void setLunch(List<FoodDetail> lunch) {
        this.lunch = lunch;
    }

    public List<FoodDetail> getDinner() {
        return dinner;
    }

    public void setDinner(List<FoodDetail> dinner) {
        this.dinner = dinner;
    }
}
