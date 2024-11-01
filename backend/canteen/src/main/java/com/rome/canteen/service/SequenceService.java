package com.rome.canteen.service;

import com.rome.canteen.model.Sequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class SequenceService {

    @Autowired
    private MongoOperations mongoOperations;

    public long getNextSequence(String seqName) {
        Query query = new Query(Criteria.where("_id").is(seqName));
        Update update = new Update().inc("counter", 1);
        Sequence counter = mongoOperations.findAndModify(query, update,
                FindAndModifyOptions.options().returnNew(true).upsert(true),
                Sequence.class);
        return counter != null ? counter.getCounter() : 1;
    }
}
