package com.rome.canteen.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sequences")
public class Sequence {

    @Id
    private String id; // "B", "L", "D" based on category
    private long counter;

    public Sequence() {}

    public Sequence(String id, long counter) {
        this.id = id;
        this.counter = counter;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public long getCounter() {
        return counter;
    }

    public void setCounter(long counter) {
        this.counter = counter;
    }
}
