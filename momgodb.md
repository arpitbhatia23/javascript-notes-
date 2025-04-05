## Backend Interview Questions and Answers (Asked in Chandigarh Companies)

...[unchanged content here]...

---

## MongoDB Interview Questions and Answers

1. **What is MongoDB?**
   - A NoSQL document database that stores data in JSON-like documents.

2. **What is a collection in MongoDB?**
   - A collection is a group of MongoDB documents, similar to a table in relational databases.

3. **What is a document in MongoDB?**
   - A record in a collection, stored as a BSON object (Binary JSON).

4. **How do you connect to MongoDB in Node.js?**
   - Using the official MongoDB Node.js driver or Mongoose ODM with `mongoose.connect()`.

5. **What is Mongoose?**
   - An Object Data Modeling (ODM) library for MongoDB and Node.js.

6. **What are schemas in Mongoose?**
   - Blueprints that define the structure of documents in a collection.

7. **How to create a schema in Mongoose?**
   - `const userSchema = new mongoose.Schema({ name: String })`

8. **How to define relationships in MongoDB?**
   - Use references (`ref`) or embedded documents.

9. **What is an ObjectId in MongoDB?**
   - A 12-byte identifier automatically generated for each document.

10. **How to perform CRUD in MongoDB?**
   - Create: `insertOne`, Read: `find`, Update: `updateOne`, Delete: `deleteOne`

11. **What is indexing in MongoDB?**
   - Indexes improve the speed of search operations on collections.

12. **How to create an index?**
   - `db.collection.createIndex({ key: 1 })`

13. **What is aggregation in MongoDB?**
   - A powerful framework for data processing and transformation.

14. **What is the aggregation pipeline?**
   - A sequence of stages like `$match`, `$group`, `$sort`, `$project` used for data processing.

15. **What is the difference between `find()` and `aggregate()`?**
   - `find()` retrieves documents; `aggregate()` processes data through multiple stages.

16. **What is `$lookup` in MongoDB?**
   - It performs a left outer join to another collection.

17. **How does MongoDB ensure data consistency?**
   - Through write concern and replica sets.

18. **What are replica sets?**
   - A group of mongod instances that maintain the same data set for high availability.

19. **What is sharding in MongoDB?**
   - Distributing data across multiple machines to support horizontal scaling.

20. **What is a capped collection?**
   - A fixed-size collection that overwrites the oldest data when full.

21. **What is a TTL index?**
   - Time-To-Live index to automatically delete documents after a certain period.

22. **What is the role of `_id` field?**
   - A unique identifier for each document in a collection.

23. **What is the use of `$in` operator?**
   - Matches values against an array of values.

24. **What is `$set` in MongoDB?**
   - Used to update specific fields of a document.

25. **What is `$push` in MongoDB?**
   - Adds a value to an array.

26. **What is `$pull` in MongoDB?**
   - Removes matching values from an array.

27. **What is `$addToSet` in MongoDB?**
   - Adds a value to an array only if it doesn't already exist.

28. **What is the difference between `$push` and `$addToSet`?**
   - `$push` allows duplicates, `$addToSet` prevents duplicates.

29. **How to remove a document from MongoDB?**
   - Using `deleteOne()` or `deleteMany()` methods.

30. **How to update multiple documents?**
   - Using `updateMany()` method.

31. **How to find documents with conditions?**
   - Using `find({ age: { $gt: 25 } })`.

32. **What is `$regex` in MongoDB?**
   - Matches documents using regular expressions.

33. **How to sort results in MongoDB?**
   - Use `.sort({ field: 1 })` for ascending and `-1` for descending.

34. **How to limit results in MongoDB?**
   - Use `.limit(number)` to restrict the number of documents returned.

35. **How to skip documents?**
   - Use `.skip(number)` to skip over documents.

36. **What is a transaction in MongoDB?**
   - A set of operations that are executed as a single unit of work.

37. **How to perform a transaction in MongoDB?**
   - Start a session and use `startTransaction()` and `commitTransaction()`.

38. **What is `$inc` in MongoDB?**
   - Increments a field value by a specified amount.

39. **How to count documents in a collection?**
   - Use `countDocuments()` or `estimatedDocumentCount()`.

40. **What is a validator in MongoDB schema?**
   - Rules defined to enforce data integrity.

41. **How to check for null or missing fields?**
   - Use `{ field: null }` or `$exists: false`.

42. **What is the use of `populate()` in Mongoose?**
   - Replaces referenced ObjectIds with actual documents.

43. **How to seed initial data in MongoDB?**
   - Use scripts or tools like MongoDB Compass or import JSON/CSV files.

44. **How to back up MongoDB data?**
   - Use `mongodump` for backup and `mongorestore` for restore.

45. **What is Compass in MongoDB?**
   - GUI tool to interact with your MongoDB data.

46. **How to monitor MongoDB performance?**
   - Use Atlas Monitoring, Compass, or `db.stats()`.

47. **What is MongoDB Atlas?**
   - A fully managed cloud version of MongoDB.

48. **What are the benefits of MongoDB?**
   - Flexible schema, scalability, high availability, and JSON-like storage.

49. **What is a field projection in MongoDB?**
   - Specifying fields to include or exclude in query results.

50. **How to create a unique index in MongoDB?**
   - `db.collection.createIndex({ field: 1 }, { unique: true })`

---

