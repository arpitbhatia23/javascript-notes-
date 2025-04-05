## JavaScript Interview Questions and Answers

1. **What are the different data types present in JavaScript?**
   - Primitive: String, Number, BigInt, Boolean, undefined, Symbol, null
   - Non-Primitive: Object, Array, Function

2. **What is the difference between let, const, and var?**
   - `var` is function-scoped, while `let` and `const` are block-scoped. `const` cannot be reassigned.

3. **What is hoisting in JavaScript?**
   - JavaScript's default behavior of moving declarations to the top of the current scope.

4. **What is the difference between == and ===?**
   - `==` compares value with type coercion; `===` compares both value and type.

5. **What are closures in JavaScript?**
   - Functions that retain access to their lexical scope even when executed outside that scope.

6. **What is the difference between null and undefined?**
   - `undefined` is a variable declared but not assigned. `null` is an assignment value representing no value.

7. **What is the use of the `this` keyword?**
   - Refers to the object it belongs to; depends on the context in which it's used.

8. **What is the difference between call, apply, and bind?**
   - `call`: invokes a function with a given `this` and arguments.
   - `apply`: same as call but arguments are passed as an array.
   - `bind`: returns a new function with bound `this` and arguments.

9. **What are arrow functions?**
   - A shorter syntax for writing functions and they don't have their own `this`.

10. **What is the event loop in JavaScript?**
   - A mechanism that handles asynchronous callbacks and ensures non-blocking execution.

11. **What is the difference between synchronous and asynchronous code?**
   - Synchronous code blocks execution until it finishes. Asynchronous code does not block execution.

12. **What is a promise?**
   - An object representing the eventual completion or failure of an asynchronous operation.

13. **What are async/await?**
   - Syntax to work with promises in a cleaner, more readable way.

14. **What is a callback function?**
   - A function passed as an argument to another function to be executed later.

15. **What is a higher-order function?**
   - A function that takes other functions as arguments or returns a function.

16. **What are template literals?**
   - Strings enclosed in backticks allowing interpolation and multiline strings.

17. **What is destructuring in JavaScript?**
   - A way to unpack values from arrays or properties from objects.

18. **What is the spread operator?**
   - `...` syntax used to expand or copy arrays/objects.

19. **What are default parameters?**
   - Function parameters that have default values if no value or `undefined` is passed.

20. **What is the difference between map and forEach?**
   - `map` returns a new array, `forEach` does not return anything.

21. **What is the use of `setTimeout` and `setInterval`?**
   - `setTimeout`: executes a function once after a delay. `setInterval`: executes repeatedly at intervals.

22. **What is an IIFE?**
   - Immediately Invoked Function Expression - runs as soon as it is defined.

23. **What are modules in JavaScript?**
   - Files that export variables/functions and import them elsewhere to organize code.

24. **What is the difference between deep copy and shallow copy?**
   - Shallow copy copies only top-level properties. Deep copy duplicates nested objects.

25. **What is NaN in JavaScript?**
   - Not a Number: a special value representing an undefined or unrepresentable number.

26. **What is the typeof operator?**
   - Returns a string indicating the type of the operand.

27. **What are truthy and falsy values?**
   - Values that coerce to `true` or `false` in a Boolean context.

28. **What is the difference between `Object.freeze()` and `Object.seal()`?**
   - `freeze`: makes object immutable. `seal`: prevents adding/removing properties but allows modification.

29. **What are generators in JavaScript?**
   - Functions that can pause and resume their execution using `function*` and `yield`.

30. **What is the difference between Array and Set?**
   - Array allows duplicates and maintains order. Set only stores unique values.

31. **How does prototypal inheritance work?**
   - Objects inherit properties from other objects via their prototype chain.

32. **What is the difference between function declaration and expression?**
   - Declarations are hoisted; expressions are not.

33. **What are event bubbling and capturing?**
   - Bubbling: event moves from target to root. Capturing: from root to target.

34. **What is debounce and throttle?**
   - Debounce: delays function call until after wait time. Throttle: limits function call to once in a time frame.

35. **What are WeakMap and WeakSet?**
   - Similar to Map/Set but keys are weakly referenced, allowing garbage collection.

36. **What is the difference between parseInt and Number?**
   - `parseInt` parses a string and returns an integer. `Number` converts to a number.

37. **What is the difference between isNaN and Number.isNaN?**
   - `isNaN` converts to number before checking. `Number.isNaN` checks if the value is exactly NaN.

38. **What is optional chaining?**
   - `?.` lets you safely access deeply nested properties.

39. **What is a Symbol in JavaScript?**
   - A primitive data type used to create unique identifiers.

40. **What is memoization?**
   - Caching function results to improve performance.

41. **What is the difference between async functions and regular functions?**
   - Async functions return a promise and can use await.

42. **How does garbage collection work in JavaScript?**
   - Automatically frees memory of objects no longer referenced.

43. **What is an event listener?**
   - A function that waits for and responds to events.

44. **What are Promises chaining?**
   - Linking multiple `.then()` calls to handle sequences of asynchronous operations.

45. **What is the difference between innerHTML, innerText, and textContent?**
   - `innerHTML`: parses and renders HTML. `innerText`: gets visible text. `textContent`: gets all text.

46. **What is localStorage and sessionStorage?**
   - Web Storage APIs to store data on the client-side. `localStorage` persists longer than `sessionStorage`.

47. **What is the difference between JSON.stringify and JSON.parse?**
   - `stringify`: converts object to JSON string. `parse`: converts JSON string to object.

48. **What is event delegation?**
   - Attaching a single event listener to a parent element to handle events from its children.

49. **What is the Temporal Dead Zone (TDZ)?**
   - The time between entering scope and variable declaration with `let` or `const`.

50. **How to clone an object in JavaScript?**
   - `Object.assign({}, obj)` or `{ ...obj }` for shallow copy; use `structuredClone(obj)` or recursion for deep copy.

