// Step 1: Inserting a Document
db.collection.insertOne({ field1: value1, field2: value2, ... });

// Step 2: Querying Documents
db.collection.find({ field: value });

// Step 3: Updating a Document
db.collection.updateOne({ field: value }, { $set: { updatedField: updatedValue } });

// Step 4: Deleting Documents
db.collection.deleteOne({ field: value });

// Step 5: Aggregation Pipeline
db.collection.aggregate([
  { $group: { _id: "$field", total: { $sum: "$quantity" } } },
  { $sort: { total: -1 } },
  { $limit: 5 }
]);

// Step 6: Index Creation
db.collection.createIndex({ field: 1 });

// Step 7: Joining Collections (using $lookup)
db.orders.aggregate([
  {
    $lookup:
      {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "orderDetails"
      }
  }
]);

// Step 8: Filtering and Counting
db.collection.find({ status: "active" }).count();

// Step 9: Sorting Documents
db.collection.find().sort({ field: 1 }); // 1 for ascending, -1 for descending

// Step 10: Limiting Results
db.collection.find().limit(10);
