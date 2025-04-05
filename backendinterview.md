## Backend Interview Questions and Answers (Asked in Chandigarh Companies)

1. **What is a backend?**
   - Backend refers to the server-side part of a web application that handles business logic, database interactions, authentication, and more.

2. **What is Node.js?**
   - Node.js is a JavaScript runtime built on Chrome's V8 engine, used for building scalable backend applications.

3. **What is Express.js?**
   - Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

4. **What is middleware in Express?**
   - Middleware functions are functions that have access to the request and response objects and can modify them or end the request-response cycle.

5. **How does routing work in Express.js?**
   - Routing defines the endpoints of your application, where each route defines a path and an HTTP method.

6. **What is REST API?**
   - REST API is an architectural style that uses HTTP methods to interact with resources identified by URLs.

7. **What are HTTP methods?**
   - Common HTTP methods include GET, POST, PUT, DELETE, and PATCH.

8. **What is the difference between PUT and PATCH?**
   - PUT replaces the entire resource, while PATCH updates only the specified fields.

9. **What is a status code in HTTP?**
   - A status code is a 3-digit number that indicates the result of the HTTP request. E.g., 200 (OK), 404 (Not Found), 500 (Server Error).

10. **What is CORS?**
   - Cross-Origin Resource Sharing (CORS) is a mechanism that allows restricted resources to be requested from another domain.

11. **How to handle errors in Express.js?**
   - Use try-catch blocks or an error-handling middleware function.

12. **What is JWT?**
   - JSON Web Token is a compact way to securely transmit information between parties as a JSON object.

13. **How does authentication differ from authorization?**
   - Authentication verifies who a user is. Authorization checks what they have access to.

14. **What is bcrypt used for?**
   - Bcrypt is used to hash passwords securely before storing them in a database.

15. **What is a database?**
   - A database is a collection of structured data stored electronically.

16. **What is the difference between SQL and NoSQL?**
   - SQL databases are relational and use structured query language; NoSQL databases are non-relational and use flexible schema.

17. **What is MongoDB?**
   - MongoDB is a NoSQL document-based database that stores data in JSON-like format.

18. **What is Mongoose?**
   - Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.

19. **What are schemas in Mongoose?**
   - Schemas define the structure of documents within a MongoDB collection.

20. **How do you connect to MongoDB using Mongoose?**
   - Use `mongoose.connect(DB_URI)` method.

21. **What is async/await in JavaScript?**
   - Syntax to handle promises in a cleaner and more readable way.

22. **What are Promises?**
   - Promises are objects representing the eventual completion or failure of an asynchronous operation.

23. **What is the difference between synchronous and asynchronous code?**
   - Synchronous code runs in sequence. Asynchronous code allows other operations while waiting for tasks to complete.

24. **What is an event loop?**
   - An event loop is a mechanism that handles asynchronous operations in Node.js.

25. **What is a callback function?**
   - A callback is a function passed into another function to be executed later.

26. **What is clustering in Node.js?**
   - Clustering allows Node.js to take advantage of multi-core systems by creating child processes.

27. **What is load balancing?**
   - Distributing incoming network traffic across multiple servers to ensure no single server is overwhelmed.

28. **How do you handle file uploads in Node.js?**
   - Using middleware like `multer` for multipart/form-data.

29. **How can you secure a Node.js app?**
   - Validate input, use HTTPS, escape user input, manage sessions securely, and handle authentication.

30. **What is Helmet.js?**
   - A middleware that helps secure Express apps by setting HTTP headers.

31. **What is rate limiting?**
   - A technique to control the amount of incoming requests to prevent abuse.

32. **What is caching and why is it used?**
   - Caching stores data in temporary storage to reduce data fetching times.

33. **What is Redis?**
   - Redis is an in-memory key-value data store used for caching and session management.

34. **How do sessions work in Express?**
   - Using packages like `express-session` to store session data on the server.

35. **What is a cookie and how is it different from a token?**
   - Cookies store data on the client side; tokens (like JWT) are used for stateless authentication.

36. **What are environment variables?**
   - Variables used to configure applications without hardcoding values.

37. **How to use dotenv in Node.js?**
   - By requiring the `dotenv` package and using `process.env.VAR_NAME`.

38. **What is a 500 Internal Server Error?**
   - A generic server error indicating an unexpected condition prevented fulfilling the request.

39. **What is a 404 Not Found error?**
   - Indicates the requested resource does not exist on the server.

40. **What are microservices?**
   - An architectural style where applications are composed of small, independent services.

41. **What is API rate limiting?**
   - Restricting the number of API calls a user can make in a certain timeframe.

42. **What are webhooks?**
   - Webhooks are automated messages sent from apps when something happens, acting like event listeners.

43. **How to monitor a Node.js app?**
   - Use tools like PM2, LogRocket, New Relic, or Sentry.

44. **What is PM2?**
   - A production process manager for Node.js applications.

45. **What is the role of a backend in full-stack development?**
   - It handles business logic, data storage, authentication, and server-side rendering.

46. **What is RESTful architecture?**
   - RESTful architecture follows stateless communication using HTTP verbs and endpoints.

47. **What is GraphQL?**
   - A query language for APIs and runtime to fulfill those queries with your existing data.

48. **How to test backend APIs?**
   - Use tools like Postman or automated testing frameworks like Mocha or Jest.

49. **What are the common security issues in backend?**
   - SQL injection, XSS, CSRF, broken authentication.

50. **How to deploy a Node.js app?**
   - Deploy on platforms like Heroku, Vercel, Railway, or VPS using services like Nginx and PM2.

---

## Additional Questions

51. **What is WebSocket?**
   - WebSocket is a protocol that provides full-duplex communication channels over a single TCP connection. It’s used for real-time applications like chat apps and live updates.

52. **How is WebSocket different from HTTP?**
   - HTTP is a request-response protocol, while WebSocket enables two-way persistent communication between client and server.

53. **What is Socket.IO?**
   - A library for real-time communication using WebSockets (and fallback mechanisms) with easy-to-use APIs in Node.js.

54. **What is WebRTC?**
   - WebRTC (Web Real-Time Communication) is a protocol for peer-to-peer audio, video, and data sharing in web browsers without plugins.

55. **Use cases of WebRTC?**
   - Video conferencing, screen sharing, voice calls, and direct peer-to-peer file transfers.

56. **What are the key components of WebRTC?**
   - RTCPeerConnection, RTCDataChannel, and MediaStream (getUserMedia).

57. **How does signaling work in WebRTC?**
   - Signaling exchanges session information between peers to set up a WebRTC connection, typically handled via WebSockets or any messaging system.

