# Variables and Constants  

## `let`, `var`, and `const`  

### **`let`**  
`let` is a keyword used to declare a variable that can be reassigned but is block-scoped. It is a **mutable** variable and has **local (block) scope**.  

```js
let score = 30;
```

### **`const`**  
`const` is used to declare a **constant**. It is **immutable**, meaning its value **cannot be changed** after assignment.  

```js
const score = 20;
```

### **`var`**  
`var` is a **global scope** variable. It is **not recommended** in modern JavaScript because of issues with block scope and function scope.  

```js
var score = 40;

/* Never use `var` due to scoping issues */
```

---

## **Important Question**  
If we declare a variable without assigning a value, JavaScript **by default assigns `undefined`** to it.  

---

# **Datatypes and ECMAScript (ECMA)**  

### **Strict Mode**  
```js
"use strict";
/*
Important:
Treats JS code as the latest version (modern JavaScript).
*/
```

### **Browser vs Node.js Environment**  
```js
alert("Hello, world!");
// Runs only in a browser environment, not in Node.js
```

---

## **Bad Practices**  
```js
console.log("Hello, world!"); console.log("How are you?");
/*
Never write code like this
because it reduces readability.
*/
```

---

## **Datatypes in JavaScript**  

```js
let name = "Aurpit"; // String
let age = 21; // Number
let isLogin = false; // Boolean
let arr = []; // Array
let obj = {}; // Object  

// Other special datatypes:
let emptyValue = null; // Null (a standalone empty value)
let notAssigned; // Undefined (value not assigned)
```

### **Notes on `typeof` Operator**  

```js
console.log(typeof null); // Output: "object"
console.log(typeof undefined); // Output: "undefined"

let score = 33;
console.log(typeof score); // Output: "number"
console.log(typeof(score)); // Output: "number"
```

*(`typeof null` being "object" is a known JavaScript quirk.)*

---

## **Datatype Conversion and Operations**  

### **`typeof` in JavaScript**  

*`typeof`: In JavaScript, `typeof` is used to check the type of a variable.*  

Example:  

```js
let score = 33;
console.log(typeof score); // Output: "number"
console.log(typeof(score)); // Output: "number"
```

---

### **Datatype Conversion in JavaScript**  

#### **1. Conversion to `Number`**  

```js
// Case 1
let score = "33";
console.log(typeof score); // Output: "string"
let valueInNum = Number(score);
console.log(valueInNum); // Output: 33

// Case 2
let score = "33abc";
console.log(typeof score); // Output: "string"
let valueInNum = Number(score);
console.log(valueInNum); // Output: NaN

// Case 3
let score = null;
console.log(typeof score); // Output: "object"
let valueInNum = Number(score);
console.log(valueInNum); // Output: 0

// Case 4
let score = undefined;
console.log(typeof score); // Output: "undefined"
let valueInNum = Number(score);
console.log(valueInNum); // Output: NaN

// Case 5
let score = true;
console.log(typeof score); // Output: "boolean"
let valueInNum = Number(score);
console.log(valueInNum); // Output: 1

// Case 6
let score = false;
console.log(typeof score); // Output: "boolean"
let valueInNum = Number(score);
console.log(valueInNum); // Output: 0
```

---

#### **2. Conversion to `Boolean`**  

```js
// Case 1
let isLogin = 1;
let booleanValue = Boolean(isLogin);
console.log(booleanValue); // Output: true

// Case 2
let isLogin = 0;
let booleanValue = Boolean(isLogin);
console.log(booleanValue); // Output: false

// Case 3
let isLogin = "";
let booleanValue = Boolean(isLogin);
console.log(booleanValue); // Output: false

// Case 4
let isLogin = "hi";
let booleanValue = Boolean(isLogin);
console.log(booleanValue); // Output: true
```

---

#### **3. Conversion to `String`**  

```js
//case 1
let num = 33;
let str = String(num);
console.log(str); // Output: "33"
console.log(typeof str); // Output: "string"
// Case 2
let boolValue = true;
let strBool = String(boolValue);
console.log(strBool); // Output: "true"
console.log(typeof strBool); // Output: "string"

// Case 3
let nullValue = null;
let strNull = String(nullValue);
console.log(strNull); // Output: "null"
console.log(typeof strNull); // Output: "string"
```


# Why String Conversion is Confusing in JavaScript

## Operations in JavaScript

### Operations in Numbers
```js
let value = 3;
let negValue = -value;
console.log(negValue); // Output: -3

// Basic arithmetic operations
console.log(2 + 2);  // Output: 4
console.log(2 - 2);  // Output: 0
console.log(2 * 2);  // Output: 4
console.log(2 ** 2); // Output: 4
console.log(2 ** 3); // Output: 8
console.log(2 / 2);  // Output: 1
console.log(2 % 2);  // Output: 0
```

### Operations in Strings
```js
let str1 = "hellO";
let str2 = "aurpit";
let str3 = str1 + str2;
console.log(str1 + str2); // Output: helloaurpit
console.log("2" + 2); // Output: 22
console.log(1 + "2"); // Output: 12
console.log("2" + 2 + 2); // Output: 222
console.log(2 + 2 + "2"); // Output: 42
```
> **Note:** String concatenation can be tricky due to implicit type coercion.

### Operations in Boolean
```js
console.log(true);  // Output: true
console.log(+true); // Output: 1
console.log(+false); // Output: 0
```
> **Tip:** Avoid writing unreadable code like `+true` or `+false` as it reduces code clarity.

---

## Prefix and Postfix Operators in `JavaScript`
### Explanation
- **Prefix (`++var`)**: The variable is incremented **before** its value is used.
- **Postfix (`var++`)**: The variable is incremented **after** its value is used.

### Examples
#### Postfix Operator (`var++`)
```js
let score = 100;
console.log(score++); // Output: 100 (Returns value first, then increments)
console.log(score);   // Output: 101 (Now the value is incremented)
```
#### Prefix Operator (`++var`)
```js
let score = 100;
console.log(++score); // Output: 101 (Increments first, then returns value)
console.log(score);   // Output: 101
```

### Edge Cases
```js
let a = 5;
let b = a++ + ++a;
console.log(b); // Output: 12
```
**Breakdown:**
1. `a++` (Postfix) → Uses `5`, then increments `a` to `6`
2. `++a` (Prefix) → Increments `a` to `7`, then uses `7`
3. `b = 5 + 7 = 12`

---

### Best Practices
- Avoid complex expressions like `console.log((3 + 2) * 5 % 3);` for readability.
- Use parentheses to make operations clearer.
- Prefer explicit type conversion when dealing with numbers and strings.

```js
console.log(Number("2") + 2); // Output: 4 (Explicit conversion is clearer)
```

By following these practices, you can write cleaner and more maintainable JavaScript code.


## Comparison in `javascript`

```js
console.log(2>1)//output true
console.log(2>=1)//output true
console.log(2<1)//output false
console.log(2==1)//output false
console.log(2!=1)//output true
console.log("2">1)//output true
console.log("02">1)//output true
console.l0g(null>0)//output false
console.l0g(null==0)//output false
console.l0g(null>=0)//output true

/* 
the reason is that an equality check == and comparison > < >= <= work differently 
comparison convert null to a  number treating it as 0
that why (3) null >=0 is ture and (1) null >0 is false
console.log(undefined ==0 )  //output false
console.log(undefined>0) // output false
console.log(undefined<0) //output false
not prefered mostly  
*/

console.l0g(undefined>0)//output false
console.l0g(undefined==0)//output false
console.l0g(undefined>=0)//output false

/*=== strict check also check datatype 
console.log("2" ===2) //false*/
```
# Datatype Summary

## Types of Datatypes

### Primitive Datatypes
Primitive datatypes are stored in stack memory and hold copies of values.

- **String**
- **Number**
- **Boolean**
- **Null**
- **Undefined**
- **Symbol**
- **BigInt**

#### Example:
```js
// Primitive Datatypes
let name = "Aurpit"; // String
let age = 21; // Number
let isLogin = false; // Boolean
let address = null; // Null
let office = undefined; // Undefined
const id = Symbol("123"); // Symbol
const anotherId = Symbol("123"); // Symbol

console.log(id === anotherId); // false
```

### Non-Primitive Datatypes (Reference Types)
Non-primitive datatypes are stored in heap memory and hold references to values.

- **Array**
- **Object**
- **Function**

#### Example:
```js
// Non-Primitive Datatypes
let arr = [1, 2, 3, 4, 5, 6]; // Array
let obj = { name: "Aurpit", age: 12 }; // Object
let myFunc = function() { console.log("Hello World"); }; // Function
```

## Stack and Heap Memory

### Stack Memory
Stack memory is used for **primitive** datatypes, and it stores a copy of the value.

#### Example:
```js
// Stack Example
let myName = "Aurpit";
let myAnotherName = myName;

console.log(myAnotherName); // Aurpit

myAnotherName = "Hanu";
console.log(myAnotherName); // Hanu
console.log(myName); // Aurpit (unchanged)
```

### Heap Memory
Heap memory is used for **non-primitive** datatypes, and it stores a reference of the value.

#### Example:
```js
// Heap Example
let user = {
    name: "Aurpit",
    age: 21,
    email: "abc@gmail.com"
};

let user2 = user;
console.log(user2.email); // abc@gmail.com

user2.email = "123@gmail.com";
console.log(user.email); // 123@gmail.com
console.log(user2.email); // 123@gmail.com
```

In this case, `user2` references the same memory location as `user`, so changing `user2.email` also updates `user.email`.

# Strings
**we can denote strings with '' or ""**
 ```js
 // examples 
 const name ="auprit"
 const repos=22
 //*** old method
 console.log(name+repos)//output aurpit22
 //**morder syntex String interpolation
 console.log(`hello my name is  ${name} i have ${repos} repos on my git hub`) 
 // hello my name is  auprit i have $22 repos on my git hub

const str =String('aurpit')
console.log(str)// String {'aurpit'}
console.log(str[0]) // a
console.log(str.toUpperCase())//AURPIT
console.log(str.chatAt(2))//r
console.log(str.indexOf('t'))//5
console.log(str.subString(0,4))//aurp
 ```