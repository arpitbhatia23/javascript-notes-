import test from "./new.js"
/*** The customArray class extends the Array class in JavaScript and provides a custom sorting method
called newsort that takes a callback function as a parameter.
* @param {Array} args - The elements to be added to the custom array.
* @returns {Array} - The sorted array based on the custom comparison function provided.

*/
Array.prototype.customSort=function(callback=(a,b)=>{if((typeof a && typeof b )==="string") return  a.localeCompare(b) }){

    if(typeof callback!=="function"){
      throw new Error("callback should be a function")
    }
    
    for(let i=0 ;i<this.length;i++){
  
      for(let j=i+1 ;j<this.length;j++){
        if(callback(this[i],this[j])>0){
          [this[i],this[j]]=[this[j],this[i]]
        }
      }
  
    }
    return this
  
  }
  
//   coustum reverse
 /* The `Array.prototype.coustomReverers` function is a custom method added to the prototype of the
 `Array` object in JavaScript. This function is designed to reverse the elements of an array. */
  Array.prototype.coustomReverers=function(){
   
   let left=0
   let right=this.length-1
   while (left<right) {
       [this[left],this[right]]=[this[right],this[left]]
    left++
    right--
   }
    return this
  }

 

/* This code snippet is adding a custom method `customsplit` to the prototype of the `String` object in
JavaScript. This method is designed to split a string based on a specified separator character. */
String.prototype.customsplit=function (sapreator) {
    let result=[]
    let cureentSubstring=""
    for(let i=0;i<this.length;i++){
        if(this[i]===sapreator){
            console.log(this[i])
            result.push(cureentSubstring)
            cureentSubstring=""
        }
else{
    console.log(this[i])
    cureentSubstring+=this[i]
}


}
result.push(cureentSubstring)
return result
    
}


/* The `Array.prototype.greatestnumber` function is a custom method added to the prototype of the
`Array` object in JavaScript. This function is designed to iterate through an array and find the
greatest (largest) number present in that array. */
Array.prototype.greatestnumber=function(){
  let greatest=this[0]
  for(let i=0;i<this.length;i++){
    if(this[i]>greatest){
      greatest=this[i]
    }

  }
  return greatest
}

/* This code snippet is adding a custom method `smallestNumber` to the prototype of the `Array` object
in JavaScript. This method is designed to iterate through an array and find the smallest number
present in that array. It initializes a variable `smallest` with the first element of the array and
then compares each element of the array with this variable. If the current element is smaller than
the `smallest` variable, it updates the `smallest` variable to hold the new smallest value found.
Finally, it returns the smallest number found in the array. */
Array.prototype.smallestNumber=function(){
  let smallest=this[0]
  for(let i=0 ;i<this.length;i++){
    if(this[i]<smallest){
      smallest=this[i]
    }
  }
  return smallest
}

/* This code snippet is adding a custom method `isPalindrome` to the prototype of the `String` object
in JavaScript. This method is designed to check if a given string is a palindrome. */
String.prototype.isPalindrome=function(){
  if(!this) throw new Error("string is required")
let str=this.toLowerCase().replace(/[^a-z0-9]/g,"")
let left=0
let right =str.length-1
while(left<right){
  if(str[left]!==str[right]) return false
  left++
  right --

}
return true
}

/* The `Number.prototype.evenOrOdd` function is a custom method added to the prototype of the Number
object in JavaScript. This function is designed to determine whether a given number is even or odd. */
Number.prototype.evenOrOdd=function () {
  if(this%2==0)return true
  return false
  
}

/* The `Array.prototype.removeDuplicate` function is a custom method added to the prototype of the
Array object in JavaScript. This function is designed to remove duplicate elements from an array. */
Array.prototype.removeDuplicate=function(){
  if(!this) throw new Error("array is required")
   return [ ... new Set(this)]

}

/* The `Number.prototype.Factorial` function you provided is a custom method added to the prototype of
the `Number` object in JavaScript. This function is designed to calculate the factorial of a given
number. */
Number.prototype.Factorial=function(){
  if(this===0 || this ===1 )return 1
  return this * Number(this-1).Factorial()
}

Array.prototype.Secondlargest=function(){
  if(this.length<2) throw new Error("array should have atleast 2 elements")
  let largest=this[0]
  let secondlargest=this[0]
  for(let num of this){
    if(num>largest){
      secondlargest=largest
      largest=num
    }
    else if(num>secondlargest && num<largest)
    {
      console.log("secondlargest",num)
      secondlargest=num
    }
  }
  return secondlargest
}

Number.prototype.fibonacciSeries=function () {
  if(this<0) return[]
 if(this===1)return[0]
 let series=[0,1]
 for(let i=2 ;i<this;i++){
  series.push(series[i-1]+series[i-2])
 }
 return series
  
}

Array.prototype.anagrams=function(){
  let str1=this[0].toLowerCase().replace(/[^a-z0-9]/g,"")
  let str2=this[1].toLowerCase().replace(/[^a-z0-9]/g,"")
  if(str1.length!==str2.length) return false
  return str1.split("").sort().join("")===str2.split("").sort().join("")

}


/*** The customArray class extends the Array class in JavaScript and provides a custom sorting method
called newsort that takes a callback function as a parameter.
* @param {Array} args - The elements to be added to the custom array.
* @returns {Array} - The sorted array based on the custom comparison function provided.

*/
export class customArray extends Array {
  constructor(...args) {
    super(...args)
  }

  /***
   * @param {callback} callback - The custom comparison function to be used for sorting the 
   *@returns{Array} - The sorted array based on the custom comparison function provided.
   */
  newsort(callback){
    if(typeof callback!=="function"){
      throw new Error("callback should be a function")
    }
    
    for(let i=0 ;i<this.length;i++){
  
      for(let j=i+1 ;j<this.length;j++){
        if(callback(this[i],this[j])>0){
          [this[i],this[j]]=[this[j],this[i]]
        }
      }
  
    }
    return [...this]

  }

  
}

/* This code snippet is adding a custom method `Customfilter` to the prototype of the `Array` object in
JavaScript. The purpose of this method is to filter elements of an array based on a provided
callback function. Here's a breakdown of how it works: */
Array.prototype.Customfilter=function (callback,thisarg) {
  if(typeof callback !=="function"){ throw new TypeError(`${callback} is not function`)}
  let newarray=[]
  for(let i=0 ;i<this.length;i++){
       if(callback.call(thisarg,this[i],i,this)){
          newarray.push(this[i])
       }
  }

  return  newarray
  
}

/* The `Array.prototype.customMap` function you provided is a custom method added to the prototype of
the `Array` object in JavaScript. This function is similar to the built-in `Array.prototype.map`
method but with some custom functionality. */
Array.prototype.customMap=function (callback,thisarg) {
  if(typeof callback!=="function"){
      throw new TypeError(` ${callback} is not a funtion`)
  }
let newarray=[]
  for(let i=0 ;i<this.length;i++){
  
  
      newarray.push( callback.call(thisarg,this[i],i,this))
   


  }
  return newarray
}

/* This code snippet is defining a custom `customSlice` method for arrays in JavaScript. This method is
similar to the built-in `Array.prototype.slice` method but with some additional functionality. */
Array.prototype.customSlice=function(startIndex,EndIndex){
  if (startIndex>EndIndex) return []
  
  let start = startIndex<0?this.length + startIndex :startIndex
  let end =EndIndex===undefined ?this.length :(EndIndex<0?this.length+EndIndex:EndIndex)
  
  start=Math.max(0,Math.min(start,this.length))
  end=Math.max(0,Math.min(end,this.length))

  
  let newarray=[]
      for(let i= start; i<end;i++){
         
          newarray.push(this[i])
  
      }
  
  return newarray
      
  }
  

  
/* This code snippet is defining a custom `customSplice` method for the `Array` prototype in
JavaScript. This custom method works similarly to the built-in `splice` method but with some
modifications. */
Array.prototype.customSplice=function (startIndex,deleteCount,...item) {
  let removed=[]
  let result=[]
let start = startIndex<0?this.length+startIndex:startIndex
start =Math.max(0,Math.min(start,this.length))
deleteCount=Math.max(0,Math.min(deleteCount,this.length-start))

for(let i=0 ;i<start;i++){
  result.push(this[i])
}
for(let i=start ;i<start+deleteCount;i++){
  removed.push(this[i])
}

for(let items of item){
  result.push(items)
}

for(let i=start+deleteCount ;i<this.length;i++){
  result.push(this[i])

}

this.length=0
for(let items of result ){
  this.push(items)
}


return removed



  
}
  
Array.prototype.customReduce=function (callback,dependency=0,thisarg) {
  if(typeof callback!=="function"){
      throw new TypeError(`${callback}is not afunction `)
  }
  let result = dependency !== undefined ? dependency : this[0];

  for (let i=0 ;i<this.length;i++) {

    
           result=callback.call( thisarg ,result,this[i],i,this)
      
  }

  return result
  
}

Array.prototype.customSome=function (callback,thisarg) {
  if(typeof callback!=="function"){
      throw new TypeError(`${callback}is not afunction `)
  }

  for (let i = 0; i < this.length; i++) {

      if (callback.call(thisarg,this[i],i,this)) {
          return true
      }
     
  }

  return false

  
}

Array.prototype.customshift=function(){
  let fristelement=this[0]
  for (let i=0 ;i<this.length-1;i++){
    this[i]=this[i+1]
  }
return fristelement
}

export class node {
  /**
   * The above function is a constructor in JavaScript for creating nodes with a value and a reference
   * to the next node in a linked list.
   * @param value - The `value` parameter in the constructor function is used to initialize the value
   * property of the object being created.
   */
  constructor(value) {
    this.value=value
    this.next=null
    
  }
}

export class linklist {
  constructor() {

    this.head=null;
    
  }

 /**
  * The `append` function adds a new node with a given value to the end of a linked list.
  * @param value - The `append` function you provided is used to add a new node with the given value to
  * the end of a linked list. The `value` parameter represents the data that will be stored in the new
  * node being added to the linked list.
  */
  append (value){
    const newNode=new node(value)
    if(!this.head){
      this.head=newNode
      return
    }

    let current=this.head
    while(current.next){
      current=current.next
    }

    current.next=newNode

  }


 // prepend
/**
 * The `prepend` function adds a new node with a specified value to the beginning of a linked list.
 * @param value - The `prepend` function you provided seems to be a method for adding a new node with a
 * given value at the beginning of a linked list. The `value` parameter is the data that you want to
 * store in the new node that will be added to the linked list.
 */
 prepend( value){
 const newNode=new node(value)
 newNode.next=this.head
 this.head=newNode
 } 


 delete (value){
  if (!this.head) return
  if(this.head.value ===value ){
    this.head=this.head.next
    return
  }
 let current=this.head
 while (current.next&&current.next.value!==value) {
  current=current.next
  
 }
 if(current.next){
  current.next=current.next.next
 }
  
 }

 print() {
  let current = this.head;
  let output = "";
  while (current) {
    output += current.value + (current.next ? " --→ " : "");
    current = current.next;
  }
  console.log(output || "Empty List");
}

}


export class stack {

  /**
   * The above JavaScript function is a constructor that initializes properties for a custom data
   * structure.
   */
  constructor() {
this.top=null
this.length=0
  }

 /**
  * The `push` function adds a new node with a given value to the top of a stack data structure.
  * @param value - The `value` parameter in the `push` function represents the value that you want to
  * add to the top of the stack.
  */
  push(value){
    const newNode=new node(value)
    if(this.top){
      newNode.next=this.top
    }
    this.top=newNode
    this.length ++

  }
 /**
  * The pop function removes and returns the top value from a stack data structure in JavaScript.
  * @returns The `pop` function is returning the value of the top element that is being removed from
  * the stack. If the stack is empty, it returns the message "stack is empty".
  */
  pop(){
if(!this.top)  return "stack is empty" 

const popedvalue=this.top.value
this.top=this.top.next
this.length--
return popedvalue

  }

  peek (){
    return this.top ? this.top.value:"stack is empty"
  }

  print (){
    let current=this.top
    let output=""
    while (current) {
      output+=current.value +(current.next?"<--":"")
      current=current.next

      
    }
    console.log(output?output:"stack is empty")
  }
  size(){
    return this.length
  }
}


export class Queue{
  constructor(){
    this.front=null
    this.rear=null
    this.length=0

  }
enqueue(value){
const newNode=new node(value)
  if(!this.front){
    this.front=this.rear=newNode
  }else{
    this.rear.next=newNode
    this.rear=newNode
  }

  this.length++
  
}

dequeue(){
if(!this.front) return "Queue is empty"
const dequeue=this.front.value
this.front=this.front.next
console.log("front value ",this.front)
if(!this.front) this.rear=null
this.length--
return dequeue



}


print() {
  let current = this.front;
  let output = "";
  while (current) {
    output += current.value + (current.next ? " <- " : "");
    current = current.next;
  }
  console.log(output || "Empty Queue");
}


}


class treeNode {
  constructor(value){
    this.value=value
    this.right=null
    this.left=null

  }
}

export class BTS{
  constructor(){
    this.root=null

  }
  insert(value){
    const newNode=new treeNode(value)
    if(!this.root) {
      this.root=newNode
      console.log("root",this.root)
      return
    }
    let current =this.root
    while(true){
      if(value<current.value){
        if(!current.left){
          current.left=newNode
          return
        }
        current=current.left
      }
      else if (value>current.value){
        if(!current.right){
          current.right=newNode
          return
        }
        current=current.right
      }
      else{
        return
      }
    }
  }
  
  search(value){
    let current=this.root
    while(current){
      if(value===current.value) return true

     current=value<current.value?current.left:current.right

    }
    return false
  }
  printTree(node = this.root, prefix = "", isLeft = true) {
    if (!node) return;

    if (node.right) {
      this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }

    console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

    if (node.left) {
      this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }
  }

}
Array.prototype.Quicksort=function (callback=function (a,b) {
  if (typeof a ==="string" && typeof b==='string') {
    return a.localeCompare(b)   
  }
  return a-b
}){
  const sorthelper=(arr)=>{
      if (arr.length<=1)return arr

      let povit =arr[arr.length-1]
      let left =[], right =[]
      for (let i = 0; i < arr.length-1; i++) {
          if(callback(arr[i],povit)<0){
              left.push(arr[i])
          }else{
              right.push(arr[i])
          }
      }
      return [...sorthelper(left),povit,...sorthelper(right)]
  }
  const sortedarray=sorthelper([...this])
this.splice(0,this.length,...sortedarray)


}

Object.defineProperties(Array.prototype,{
  "customSort":{enumerable:false},
  coustomReverers:{enumerable:false},
  greatestnumber:{enumerable:false},
  smallestNumber:{enumerable:false},
  removeDuplicate:{enumerable:false},
  Secondlargest:{enumerable:false},
  anagrams:{enumerable:false},
  Customfilter:{enumerable:false},
  customMap:{enumerable:false},
  customSlice:{enumerable:false},
  customSplice:{enumerable:false},
  customReduce:{enumerable:false},
  customSome:{enumerable:false},
  customshift:{enumerable:false},
  Quicksort:{enumerable:false}
}
)
test()


 