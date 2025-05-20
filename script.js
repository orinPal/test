function strToArr(x) {
  let arrStructure = x.split(" ").join('", "');
  return console.log(`["${arrStructure}"]`);
}
function strToArrNum(x) {
  const arr = x.split(" ");
  const numArr = arr.map((val) => {
    return Number(val);
  });
  console.log(numArr);
}
// {{
// // const demo = document.getElementById("demo");
// // const me = {
// // firstName: "Orin",
// // lastName: "Pal",
// // age: 23,
// // hobby: "coding",
// // intro: function () {
// // return `Hello! I'm ${this.firstName} ${this.lastName}. I'm ${this.age} and i love ${this.hobby}.`;
// // return "Hello! I'm" + this.firstName + this.lastName + ". I'm " + this.age + " and i love " + this.hobby + ".";
// // },
// // };
// // demo.innerHTML = me.intro();
// // const person = {
// // name: "Jhon Doe",
// // age: 27,
// // occupation: "Doctor",
// // nationality: "Bangladeshi",
// // intro: function () {
// // return `Hello! I'm ${this.name}. I'm ${this.nationality}. I'm ${this.age} and I'm a ${this.occupation}.`;
// // },
// // };
// // class Car {
// // start() {
// // console.log("The car is started.")
// // }
// // brake() {
// // console.log("The car is braked.")
// // }
// // stop() {
// // console.log("The car is stopped.")
// // }
// // setBrand(brand) {
// // this.brandName= brand;
// // }
// // setModel(model){
// // this.modelName= model;
// // }
// // intro() {
// // return `I'm a ${this.brandName} and my model is ${this.modelName}.`;
// // }
// // };
// // let thar = new Car();
// // thar.setBrand("Mahindra Thar");
// // thar.setModel("Black");
// // console.log(thar.intro())
// // class Student{
// // constructor (name, level, section, roll) {
// // this.name = name;
// // this.level = level;
// // this.section = section;
// // this.roll = roll;
// // }
// // };
// // let orin = new Student("Orin Pal", "Bsc 1st year", "A", 5270);
// // console.log(orin);
// // let obonti = new Student("Obonti Pal", "One", "B", 1);
// // console.log(obonti);
// // class User {
// // constructor(name, email) {
// // this.name = name;
// // this.email = email;
// // };
// // std() {
// // console.log("yes")
// // }
// // };
// // class spUser extends User {
// // constructor(name, email, prof) {
// // super(name, email);
// // this.prof = prof;
// // };
// // std() {
// // console.log("no")
// // }
// // tchr() {
// // console.log("yes, teacher")
// // }
// // }
// // let userOne = new User("Orin", "orin@gmail.com");
// // let userTwo = new spUser("Sumon Ghos", "ghos@gmail.com", "teacher");
// // function Person(name, age, nationality) {
// // this.name = name;
// // this.age = age;
// // this.nationality = nationality;
// // };
// // let myself = new Person("Orin", 23, "Bangladesh");
// // console.log(myself);
// // let a = "hello";
// // let b = new String("hello");
// // console.log(a);
// // console.log(typeof a);
// // console.log(b);
// // console.log(typeof b);
// // console.log(c==b)
// // =============================================
// // deepseek codes to understand js object method
// // =============================================
// // =============================================
// // JavaScript Object Methods - Comprehensive Examples
// // =============================================
// /*
//   Object methods fall into two categories:
//   1. Static methods (called on `Object` constructor, e.g., `Object.keys()`)
//   2. Instance methods (inherited from `Object.prototype`, e.g., `obj.toString()`)
// */
// // ========================
// // 1. Object Static Methods
// // ========================
// // Example object with a Symbol property
// const person = {
//   name: "Alice",
//   age: 30,
//   [Symbol("id")]: 123, // Symbol properties are non-enumerable by default
// };
// // ----- Object.assign(target, ...sources) -----
// // Copies properties from source objects to a target object (shallow merge).
// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source); // Modifies `target`
// console.log("Object.assign():", target); // { a: 1, b: 2 }
// const aObj = {
// 	a: 1,
// 	b: 2,
// 	c: 3
// };
// const bObj = {
// 	d: 4,
// 	e: 5
// };
// // Object.assign(aObj, bObj);
// const mergeAB = {...aObj , ...bObj};
// console.log("========================");
// // ----- Object.create(proto, [propertiesObject]) -----
// // Creates a new object with the specified prototype.
// const protoObj = {
//   greet() {
//     return "Hello!";
//   },
// };
// const newObj = Object.create(protoObj); // `newObj` inherits from `protoObj`
// console.log("Object.create():", newObj.greet()); // "Hello!"
// // ----- Object.defineProperty(obj, prop, descriptor) -----
// // Defines a new property or modifies an existing one with fine-grained control.
// Object.defineProperty(person, "hiddenProp", {
//   value: "secret",
//   enumerable: false, // Hidden in `for...in` and `Object.keys()`
//   writable: false, // Cannot be changed
//   configurable: false, // Cannot be deleted
// });
// console.log("Object.defineProperty():", person.hiddenProp); // "secret"
// // ----- Object.entries(obj) -----
// // Returns an array of [key, value] pairs for enumerable own properties.
// console.log("Object.entries():", Object.entries(person)); // [["name", "Alice"], ["age", 30]]
// // ----- Object.freeze(obj) -----
// // Freezes an object: no changes (add/remove/modify) allowed.
// Object.freeze(person);
// person.age = 40; // Fails silently in non-strict mode
// console.log("Object.freeze():", person.age); // Still 30
// // ----- Object.fromEntries(iterable) -----
// // Converts a list of [key, value] pairs into an object.
// const entries = [
//   ["x", 10],
//   ["y", 20],
// ];
// const fromEntriesObj = Object.fromEntries(entries);
// console.log("Object.fromEntries():", fromEntriesObj); // { x: 10, y: 20 }
// // ----- Object.getOwnPropertyDescriptor(obj, prop) -----
// // Returns metadata about a property (e.g., enumerable, writable).
// const desc = Object.getOwnPropertyDescriptor(person, "name");
// console.log("Object.getOwnPropertyDescriptor():", desc);
// // { value: "Alice", writable: true, enumerable: true, configurable: true }
// // ----- Object.getOwnPropertyNames(obj) -----
// // Returns all own property names (including non-enumerable ones).
// console.log(
//   "Object.getOwnPropertyNames():",
//   Object.getOwnPropertyNames(person)
// ); // ["name", "age", "hiddenProp"]
// // ----- Object.getOwnPropertySymbols(obj) -----
// // Returns an array of all own Symbol properties.
// console.log(
//   "Object.getOwnPropertySymbols():",
//   Object.getOwnPropertySymbols(person)
// ); // [Symbol(id)]
// // ----- Object.getPrototypeOf(obj) -----
// // Returns the prototype of an object.
// console.log(
//   "Object.getPrototypeOf():",
//   Object.getPrototypeOf(newObj) === protoObj
// ); // true
// // ----- Object.is(value1, value2) -----
// // A better comparison than `===` (handles NaN and ±0 correctly).
// console.log("Object.is():", Object.is(NaN, NaN)); // true (whereas NaN === NaN is false)
// console.log("Object.is():", Object.is(0, -0)); // false (whereas 0 === -0 is true)
// // ----- Object.keys(obj) -----
// // Returns an array of enumerable own property names.
// console.log("Object.keys():", Object.keys(person)); // ["name", "age"] (excludes Symbols and non-enumerable)
// // ----- Object.seal(obj) -----
// // Prevents adding/removing properties, but allows modifying existing ones.
// const sealedObj = { a: 1 };
// Object.seal(sealedObj);
// sealedObj.a = 2; // Works
// // sealedObj.b = 2; // Fails (cannot add new properties)
// console.log("Object.seal():", sealedObj); // { a: 2 }
// // ----- Object.values(obj) -----
// // Returns an array of enumerable own property values.
// console.log("Object.values():", Object.values(person)); // ["Alice", 30]
// // ==================================
// // 2. Object Instance Methods (from Object.prototype)
// // ==================================
// // ----- obj.hasOwnProperty(prop) -----
// // Checks if a property exists directly on the object (not inherited).
// console.log("hasOwnProperty():", person.hasOwnProperty("name")); // true
// console.log("hasOwnProperty():", person.hasOwnProperty("toString")); // false (inherited from prototype)
// // ----- obj.isPrototypeOf(object) -----
// // Checks if the object is in another object's prototype chain.
// console.log("isPrototypeOf():", protoObj.isPrototypeOf(newObj)); // true
// // ----- obj.propertyIsEnumerable(prop) -----
// // Checks if a property is enumerable (visible in `for...in` or `Object.keys()`).
// console.log("propertyIsEnumerable():", person.propertyIsEnumerable("name")); // true
// console.log(
//   "propertyIsEnumerable():",
//   person.propertyIsEnumerable("hiddenProp")
// ); // false
// // ----- obj.toString() -----
// // Returns a string representation (often overridden by other types).
// console.log("toString():", person.toString()); // "[object Object]"
// console.log("toString():", [1, 2].toString()); // "1,2" (Array overrides toString)
// // ----- obj.valueOf() -----
// // Returns the primitive value of the object (used in type coercion).
// console.log("valueOf():", person.valueOf() === person); // true (default returns the object itself)
// // ----- obj.toLocaleString() -----
// // Returns a localized string (used by Date, Number, etc.).
// const date = new Date();
// console.log("toLocaleString():", date.toLocaleString()); // e.g., "5/10/2023, 10:30:00 AM"
// // =============================================
// // JavaScript Object Fundamentals
// // Covering: Properties, Display, and Constructors
// // =============================================
// /*
//   OBJECT PROPERTIES
//   -----------------
//   - Properties are key-value pairs in objects
//   - Can be strings or Symbols as keys
//   - Have attributes: enumerable, configurable, writable
// */
// // 1. Basic Object with Properties
// const user = {
//     // String properties (most common)
//     firstName: 'John',
//     'last-name': 'Doe', // Quotes needed for special characters
//     age: 30,
//     // Computed property names (ES6)
//     [`id_${Math.random().toString(36).substr(2, 5)}`]: 'unique-value',
//     // Method (function property)
//     getFullName() {
//         return `${this.firstName} ${this['last-name']}`;
//     }
// };
// console.log('1. Basic Object:');
// console.log(user);
// console.log('Full Name:', user.getFullName());
// // 2. Property Attributes and Descriptors
// console.log('\n2. Property Attributes:');
// const descriptor = Object.getOwnPropertyDescriptor(user, 'firstName');
// console.log('Descriptor for firstName:', descriptor);
// /*
//   Descriptor contains:
//   - value: current value
//   - writable: can be changed
//   - enumerable: shows up in for...in loops
//   - configurable: can be deleted or modified
// */
// // 3. Property Types
// const specialProperties = {
//     // Symbol property (unique and hidden from normal iteration)
//     [Symbol('internalId')]: 'abc123',
//     // Non-enumerable property
//     hiddenSecret: 'shhh',
// };
// // Make hiddenSecret non-enumerable
// Object.defineProperty(specialProperties, 'hiddenSecret', {
//     enumerable: false
// });
// console.log('\n3. Special Property Types:');
// console.log('Object.keys():', Object.keys(specialProperties)); // Doesn't show Symbol or hiddenSecret
// console.log('getOwnPropertySymbols():', Object.getOwnPropertySymbols(specialProperties));
// /*
//   OBJECT DISPLAY
//   -------------
//   - Converting objects to readable strings
//   - JSON serialization
//   - Custom display methods
// */
// // 4. Basic Object Display
// console.log('\n4. Object Display Methods:');
// console.log('Direct console.log:', user); // Browser shows interactive object
// console.log('String concatenation:', 'User: ' + user); // Calls toString()
// console.log('Template literal:', `User: ${user}`); // Also calls toString()
// // 5. Custom toString()
// const product = {
//     name: 'Laptop',
//     price: 999,
//     toString() {
//         return `${this.name} - $${this.price}`;
//     }
// };
// console.log('\n5. Custom toString():');
// console.log('Product as string:', product.toString());
// console.log('String context:', `Product: ${product}`);
// // 6. JSON Serialization
// console.log('\n6. JSON Serialization:');
// console.log('JSON.stringify:', JSON.stringify(user));
// // Note: JSON.stringify omits:
// // - Functions
// // - Symbol properties
// // - Non-enumerable properties
// // Custom JSON serialization with toJSON()
// const customSerializable = {
//     data: 'important',
//     toJSON() {
//         return { data: this.data, serialized: true };
//     }
// };
// console.log('Custom toJSON():', JSON.stringify(customSerializable));
// /*
//   OBJECT CONSTRUCTORS
//   ------------------
//   - Constructor functions (traditional)
//   - Class syntax (ES6)
//   - Object.create()
// */
// // 7. Constructor Function (traditional)
// function Person(firstName, lastName, age) {
//     // Properties
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     // Method
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     };
// }
// const person1 = new Person('Jane', 'Smith', 28);
// console.log('\n7. Constructor Function:');
// console.log('Person instance:', person1);
// console.log('Full name:', person1.getFullName());
// // 8. Class Syntax (ES6)
// class Employee {
//     constructor(name, position, salary) {
//         this.name = name;
//         this.position = position;
//         this.salary = salary;
//     }
//     // Method
//     getDetails() {
//         return `${this.name} (${this.position}) - $${this.salary}`;
//     }
//     // Static method
//     static getCompany() {
//         return 'ACME Inc.';
//     }
// }
// const emp1 = new Employee('Bob', 'Developer', 85000);
// console.log('\n8. Class Syntax:');
// console.log('Employee instance:', emp1);
// console.log('Details:', emp1.getDetails());
// console.log('Static method:', Employee.getCompany());
// // 9. Object.create() - Prototypal Inheritance
// const personPrototype = {
//     greet() {
//         return `Hello, my name is ${this.name}`;
//     }
// };
// const person2 = Object.create(personPrototype);
// person2.name = 'Alice';
// console.log('\n9. Object.create():');
// console.log('Person with prototype:', person2);
// console.log('Greeting:', person2.greet());
// console.log('Prototype:', Object.getPrototypeOf(person2) === personPrototype);
// // 10. Property Access Patterns
// console.log('\n10. Property Access Patterns:');
// // Dot notation
// console.log('Dot notation:', user.firstName);
// // Bracket notation (useful for dynamic properties)
// const propName = 'last-name';
// console.log('Bracket notation:', user[propName]);
// // Optional chaining (ES2020)
// console.log('Optional chaining:', user?.address?.city);
// // Destructuring
// const { firstName, age } = user;
// console.log('Destructuring:', firstName, age);
// const num = "0123456789";
// const num2 = new String("0123456789"); //object
// do not create object string. it complicates, slows down and can produce unexpected result
// console.log(typeof num2); //object
// console.log(typeof num); //string
// console.log(num);
// console.log(num[1]);
// console.log(num.length);
// const str1 = "hello";
// const str2 = "world!";
// const helloWorld = str1 + " " + str2;
// console.log(helloWorld)
// const x = 1234;
// const y = "1234";
// console.log(x == y); //true
// console.log(x === y); //false
// console.log(num.at(-3));
// console.log(num.at(3));
// console.log(num[3]);
// Both str[1] and str.at(1) allow you to access characters in a string by index, but str.at() has one key advantage: it supports negative indexing.
// console.log(num.charAt(0));
// console.log("charAt " + num.charAt(10)); // "" (empty string)
// console.log(num[10]);        // undefined
// charAt() is safer if you're dealing with uncertain indexes and want to avoid undefined errors.
// console.log(num.charCodeAt(0));
// console.log(num.charCodeAt(1)); //get the unicode
// console.log(num.codePointAt(3));
// let a = "orin";
// let b = "chandra";
// let c = "pal";
// let newStr = a.concat(" ", b, c);
// console.log(typeof newStr + " " + newStr);
// console.log(a);
// let aConstructor = a.constructor;
// console.log(aConstructor); //es1 feature
// console.log(a.endsWith("g")); //true of false
// let charCode = String.fromCharCode(48, 49, 50, 51);
// console.log(charCode);
// console.log(a.includes("or"));
// console.log(a.indexOf("r"));
// console.log(a.indexOf("i", 2));
// console.log(a.lastIndexOf("r"));
// console.log(a.length);
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.startsWith("o"));
// let strSlice = num.slice(-4, -1);
// console.log(strSlice);
// let strSubstring = num.substring(1, 5);
// console.log(strSubstring);
// const str = "JavaScript is awesome, JavaScript is fun!";
// console.log(str.replace("JavaScript", "JS"));
// "JS is awesome, JavaScript is fun!" (only first match is replaced)
// console.log(str.replace(/JavaScript/g, "JS"));
// "JS is awesome, JS is fun!" (regex with `g` replaces all)
// const str = "               i love javascript. javascript is the best proggraming language                       ";
// const newStr = str.replaceAll("javascript", "orin");
// console.log(newStr);
// console.log(str + "a");
// console.log(str.trim() + "a");
// console.log(str.trimStart() + "a");
// console.log(str.trimEnd() + "a");
// {
//   let str = "javascript, python";
//   console.log(str);
//   console.log(str.split(","));
//   console.log(str.split(""));
//   console.log(str.split("", 4)); //this is limit
//   let arr = str.split("");
//   console.log(arr);
//   let strAgain = arr.join("");
//   console.log(strAgain);
//   console.log(typeof strAgain);
//   let repeatedStr = str.repeat(3);
//   console.log(repeatedStr);
//   console.log(typeof repeatedStr);
//   console.log(`2 + 2 = ${2 + 2}`);
//   "2 + 2 = 4"
//   console.log(`The time is ${new Date().toLocaleTimeString()}`);
//   The time is 10:30:45 AM (varies)
// }
// array
// {
// const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven"];
//   console.log(arr.length);
//   console.log(arr[1]);
//   arr.push("eight");
//   console.log(arr);
//   arr.push("nine");
//   console.log(arr);
//   arr.pop();
//   console.log(arr);
//   arr.shift();
//   console.log(arr);
//   arr.unshift("zero");
//   console.log(arr);
//   arr.unshift("minus one");
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(i + ": " +element);
// }
// arr.push("eight");
// arr.push("nine");
// console.log(arr);
// console.log(arr.find((word) => word.includes("e")));
// console.log(arr.filter((word) => word.includes("e")));
// console.log(arr.find((word) => word.length == 5));
// console.log(arr.filter((word) => word.length == 4));
// console.log(arr.findIndex((word) => word.includes("g")));
// console.log(arr.findIndex((word) => word === "three"));
// arr.forEach(elem => console.log(elem.split("") + " " + elem));
// const newArr = arr.map((word) => word + " hello");
// console.log(newArr);
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];
// const userNames = users.map((user) => user.name);
// console.log(userNames); // ['Alice', 'Bob', 'Charlie']
// array.reduce(callback(accumulator, currentValue, index, array), initialValue);
//   callback: A function that runs on each element.
// accumulator: Stores the accumulated result.
// currentValue: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array that reduce() is called on.
// initialValue (optional): The starting value of the accumulator.
// If provided, it sets the initial accumulator value.
// If not provided, the first element of the array is used as the accumulator, and iteration starts from the second element.
// const numbers = [1, 2, 3, 4, 5, 10];
// const sum = numbers.reduce((acc, num) => acc + num);
// console.log(sum); // Output: 15
// const max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);
// console.log(max); // Output: 25
// let add = numbers.reduce((acc, num) => acc + num);
// console.log(add)
// let max = numbers.reduce(
// (acc, num) => num > acc ? num : acc
// );
// console.log(max)
// }
// const obj = {
// fName: "Orin",
// lName: "Pal",
// age: 23,
// intro: function () {
// return `Hi, I'm ${this.fName} ${this.lName}. and I'm ${this.age} years old.`;
// }
// };
// console.log(obj.intro());
// console.log(obj);
// delete obj.age;
// console.log(obj);
// for (let key in obj) {
// console.log(`${key}: ${obj[key]}`);
// };
// const obj1 = {
// a: 1,
// b: 2,
// c: 3
// };
// const obj2 = {
// d: 4,
// e: 5,
// f: 6
// };
// const newObj = {...obj1, ...obj2};
// console.log(newObj);
// const obj3 = {...obj1};
// console.log(obj3);
// const add = (a, b) => a ** b;
// console.log(add(10, 4));
// function reverseStr(a) {
// let splt = a.split("");
// let reverse = splt.reverse();
// let join = reverse.join("");
// return join;
// };
// console.log(reverseStr("hello"));
// console.log(reverseStr("Good Morning"));
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNum = num.filter(num => num % 2 === 0);
// console.log(evenNum);
// const doubleNum = num.map(a => a * 2);
// console.log(doubleNum);
// const addNum = doubleNum.reduce((acc, num) => (acc + num), 0);
// console.log(addNum);
// console.log(doubleNum.includes(6));
// doubleNum.pop();
// console.log(doubleNum);
// const arr1 = ["a", "b", "c", "d"];
// const arr2 = ["e", "f", "g", "h"];
// const mergedArr1 = arr1.concat(arr2);
// const mergedArr2 = [...arr1, ...arr2];
// console.log(mergedArr1);
// console.log(mergedArr2);
// const reversedArr = mergedArr2.reverse();
// console.log(reversedArr);
// const splicedArr = reversedArr.splice(2, 5);
// console.log(splicedArr);
// const slicedArr = reversedArr.slice(0, 5);
// console.log(slicedArr);
// const arrToStr = slicedArr.join("");
// console.log(arrToStr);
// console.log(typeof arrToStr);
// {
// let a = "orin chandra pal";
// let aReversed = a.split("").reverse().join("");
// console.log(aReversed);
// }
// const person = {
// fName: "Orin",
// lName: "Pal",
// age: 23,
// prof: "student"
// };
// console.log(person["fName"]);
// console.log(person.lName);
// person.height = "6ft";
// delete person.lName
// console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// for(const key in person) {
// console.log(`${key} : ${person[key]}`});
// };
// for (let key in person) {
// console.log(`${key}: ${person[key]}`);
// };
// const person = {
// name: "Orin Pal",
// age: 23,
// prof: "student",
// intro: function() {
// return `Hello I'm ${this.name} and I'm ${this.age}. I'm a ${this.prof}.`;
// },
// };
// console.log(person.intro());
// const obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };
// const obj2 = {
//   e: 5,
//   f: 6,
//   g: 7,
//   h: 8,
// };
// const mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj);
// const copiedObj2 = { ...obj2 };
// console.log(copiedObj2);
// function subst(a, b) {
//   return a - b;
// }
// console.log(subst(5, 2));
// console.log(subst(7, 9));
// let squareNum = (a) => a ** 2;
// console.log(squareNum(5));
// console.log(squareNum(7));
// console.log(squareNum(20));
// function a(parameter1, parameter2, parameter3) {
// console.log(parameter1);
// console.log(parameter2);
// console.log(parameter3);
// console.log(parameter1 + parameter2 + parameter3);
// };
// a(5, 3, 7);
// a("Orin", "Chandra", "Pal");
// function strToReverse(a) {
// let b = [...a].reverse().join("");
// return console.log(b);
// };
// strToReverse("orin");
// strToReverse("SS Anik vaiya");
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const evenNum = arr.filter((num) => num % 2 === 0);
// console.log(evenNum);
// const squaredArr = evenNum.map((a) => a * a);
// console.log(squaredArr);
// console.log(squaredArr.includes(2));
// console.log(squaredArr.includes(4));
// squaredArr.pop();
// console.log(squaredArr);
// const addArr = squaredArr.reduce((acc, num) => acc + num, 0);
// console.log(addArr);
// const toArr = [addArr];
// console.log(toArr);
//} // 1ST BLOCK ENDS HERE

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// console.log(fruits); DON'T USE DELETE. USE POP() AND SHIFT INSTEAD BECAUSE DELETE CREATES AN UNDEFINED VALUE

// const arrToStr = fruits.toString();
// console.log(arrToStr);
// console.log(typeof arrToStr);

// const points = [40, 100, 1, 5, 25, 10, 500, -5];
// console.log(
// points.sort((a, b) => {
//   return a - b;
// })
// );

// console.log(points.sort(function(a, b){return a - b}))

// console.log(points.sort());

// function myArrayMin(arr) {
//   return Math.min.apply(null, arr);
// }
// function myArrayMax(arr) {
//   return Math.max.apply(null, arr);
// }

// console.log(myArrayMin(points));
// console.log(myArrayMax(points));

// let num = [13, 14, 15, 16];

// console.log(num.trim());

// {
// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(12)); // Output: 55

// let a = !true;
// console.log(a);
// }

// let a = "hello";
// console.log(a);
// a = "world";
// console.log(a);

// function showA() {
//   let b = "wor";
//   return console.log(a, b);
// }

// function a(b, c = 10) {
//   return console.log(b * c);
// }

// a(5);

// const person = {
// name: "Luna",
// age: 14,
// city: "Dreamland"
// };
// const demo = document.getElementById("demo");
// demo.innerHTML = person;

// function Person(fName, lName, Age) {
// this.fName = fName;

// }

// const person = new Object();

// person.fName = "Orin";
// person.lName = "Pal";

// console.log(person);

// const person = {
// fName: "Orin",
// lName: "Pal",
// age: 23,
// hobby: "coding",
// intro: function () {
// let introduction = `Hello I'm ${this.fName} ${this.lName}. I'm ${this.age} years old. I love ${this.hobby}. Nice too meet you. Have a good day.`;
// return console.log(introduction);
// },
// };

// person.intro();

// function Person(fName, lName, age, nationality = "Bangladeshi") {
// this.fName = fName;
// this.lName = lName;
// this.age = age;
// this.nationality = nationality;
// };

// const person1 = new Person("Orin", "Pal", 23);
// const person2 = new Person("Obonti", "Pal", 8);

// console.log(person1);
// console.log(person2);

// let str = "a1a234a5678";
// let strA = "abcdefghijklmnopqrstuvwxyz";
// let a = "5";

// console.log(a.padEnd(3, "x"));

// let strMethod = str.split("").reverse();

// console.log(strMethod);
// console.log(typeof strMethod);

// {
// let x = "hello";
// x = 7;
// console.log(x);
// }

// let a = 5;
// let b = 7;
// let x = `Here a * b is ${a * b}`;
// console.log(x);

// let str = "This is JavaScript is";
// console.log(str.matchAll("is"));

// let str = "Hello | World!";

// let positionIndexOf = str.indexOf("World");

// console.log(positionIndexOf);

// let positionSearch = str.search(/World/);

// console.log(positionSearch);

// let str = "       Hello World!          ";
// let num = 25;
// let x = "|";

// console.log(x + str.trim() + x)

// let a = str.trim();

// demo.innerHTML = x + str + x;

// let str = "A,B,C,D,E,F";

// console.log(str.split(",")[0]);

// let str = "0123456789";

// const arr = ["A", "B", "C", "D"];
// console.log(arr);

// arr.push("E", "F", "G");
// console.log(arr);

// const logo = document.getElementById("logo");
// logo.innerText = "<OP/>";
// logo.innerText = "orinPal;";

// let num = "1000000000000000000000000000000 he was 40";
// let parsedInt = parseInt(num);

// demo.innerHTML = parsedInt;
// }
const demo = document.getElementById("demo");
// let pi = Math.PI;
// let epsilon = Number.EPSILON;
// let maxValue = Number.MAX_VALUE;
// let minValue = Number.MIN_VALUE;
// let maxSafeInteger = Number.MAX_SAFE_INTEGER;
// let minSafeInteger = Number.MIN_SAFE_INTEGER;

// let allNum = `EPSILON = ${epsilon}<br/>MAX_VALUE = ${maxValue}<br/>MIN_VALUE = ${minValue}<br/>MAX_SAFE_INTEGER = ${maxSafeInteger}<br/>MIN_ SAFE_INTEGER = ${minSafeInteger}`;

// let piToString = pi.toString();
// const person = {
//   name: "hello",
//   age: 25
// };

// let num = 5.77;
// console.log(pi);
// console.log(parseFloat(pi.toFixed(2)));
// console.log(pi.toPrecision());

// let a = [1, 2, 3, 4, 5];
// console.log(a.join(""));

// {
//   let arr = [
//     "O",
//     "R",
//     "I",
//     "N",
//     "C",
//     "H",
//     "A",
//     "N",
//     "D",
//     "R",
//     "A",
//     "P",
//     "A",
//     "L",
//   ];

//   let arrMethod = arr.at(3);

//   demo.innerHTML = typeof arr + arr;
// }

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");

// const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const arr2 = ["10", "11", "12"];
// const arr3 = [...arr , ...arr2];
// console.log(arr3);
// console.log(arr);
// one.innerHTML = typeof arr3;
// two.innerHTML = arr3;

// let a = "a";
// let b = "b";
// let c = a;
// a = b;
// b = c;
// console.log(a, b);

// [a, b] = [b, a];
// console.log(b);

// const colors = ["red", "green", "blue", "black", "white"];
// console.log("colors", colors);
// let lastIndex = colors.length - 1;

// [colors[0], colors[lastIndex]] = [colors[lastIndex], colors[0]];
// console.log("colors updated", colors);

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// console.log(firstColor, secondColor, thirdColor);
// console.log(extraColors);
// console.log(colors);

// const person1 = {
//   fName: "Orin",
//   lName: "Pal",
//   age: 23,
//   job: "Student",
// };

// const person2 = {
//   fName: "Obonti",
//   lName: "Pal",
//   age: 7,
// };

// const {fName, lName, age, job = "nothing"} = person2;
// console.log(fName, lName, age, job);

// function destrutedObj({ fName, lName, age, job = "Nothing" }) {
//   return console.log(`name: ${fName} ${lName}
//   age: ${age}
//   job: ${job}`);
// }
// destrutedObj(person1);
// destrutedObj(person2);

// let str1 = ["h", "e", "l"];
// let str2 = ["l", "o"];
// console.log(str1.concat(str2).join(""));
// let arr = [1, 2, 3];
// let result = arr.map(x => [x * 2]).flat();
// console.log(result); // [2, 4, 6]

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 2)
// console.log(fruits);

// const arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
// const numArr = [
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "11",
//   "12",
//   "13",
//   "14",
//   "15",
// ];
// function arrForEach(value, index, array) {
// console.log("value", value);
// console.log("index", index);
// console.log("array", array);
// console.log("------------");
// return console.log(`hello ${`${value} ${index} ${array}`}`);
// }
// arr.forEach(arrForEach);
// console.log("=================================");
// function evenNum(value, index, array) {
//   return (value % 2) === 0;
// };
// function oddNum(value, index, array) {
//   return (value % 2) === 1;
// };
// function maxNum(a, b) {
// return b - a;
// }
// console.log(numArr.sort(maxNum));
// const arrFilter = numArr.filter(oddNum);

// console.log(arrFilter);
// function map(value, index, array) {
//  return value + index;
// };
// const mapArr = arr.map(map);

// console.log(numArr);
// console.log(mapArr);
// function reduceArr(total, value, index, array) {
//   let a = parseInt(total);
//   let b = parseInt(value);
//   return a + b;
// }
// console.log(numArr.reduce(reduceArr, 10));
// const elements = document.querySelectorAll("li");

// [...elements].forEach((element) => {
//   let randomColor = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`;
//   element.style.backgroundColor = randomColor;
//   element.innerHTML = randomColor;
// });

//DESTRUCTURING

// const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const arr2 = ["10", "11", "12"];
// const arr3 = [...arr , ...arr2];
// console.log(arr3);
// console.log("==================================");
// console.log(arr);
// one.innerHTML = typeof arr3;
// two.innerHTML = arr3;

// let a = "a";
// let b = "b";
// let c = a;
// a = b;
// b = c;
// console.log(a, b);

// [a, b] = [b, a];
// console.log(b);

// const colors = ["red", "green", "blue", "black", "white"];
// console.log("colors", colors);
// let lastIndex = colors.length - 1;

// [colors[0], colors[lastIndex]] = [colors[lastIndex], colors[0]];
// console.log("colors updated", colors);

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// console.log(firstColor, secondColor, thirdColor);
// console.log(extraColors);
// console.log(colors);

// const person1 = {
//   fName: "Orin",
//   lName: "Pal",
//   age: 23,
//   job: "Student",
// };

// const person2 = {
//   fName: "Obonti",
//   lName: "Pal",
//   age: 7,
// };

// const {fName, lName, age, job = "nothing"} = person1;
// console.log(fName, lName, age, job);

// function destrutedObj({ fName, lName, age, job = "Nothing" }) {
//   return console.log(`name: ${fName} ${lName}
//   age: ${age}
//   job: ${job}`);
// }
// destrutedObj(person1);
// destrutedObj(person2);

// function destrutedObj(fName, lName, age, job = "Nothing") {
//   this.fName = fName;
//   this.lName = lName;
//   this.age = age;
//   this.job = job;
// }
// const p = new destrutedObj("orin", "pal", 23, "stydent");
// console.log(p);

// let str = "helloWorld";
// console.log(str.length);
// console.log(str.charAt(3));
// console.log(str.charCodeAt(4));
// console.log(str.at(-3));
// console.log(str[2]);

// console.log(str.slice(-4,-1));
// console.log(str.substring(2,3));
// console.log(str.substr(4,3));
// console.log(str.toUpperCase());
// let a = "hello";
// let b = "world";
// let c = a.concat(" ", b);
// console.log(c);

// console.log(str.repeat(3));
// console.log(str.replace("hello", "javascript"));
// console.log(str.split(""));
// console.log(str.indexOf("l"));
// console.log(str.lastIndexOf("l"));
// console.clear()
// console.log('hello');

// console.log(str.search("e"));
// console.log(str.match("e"));
// console.log(str.includes("q"));
// console.log(str.startsWith("h"));
// console.log(str.endsWith("d"));

// let num = 0.1 + 0.27;
// console.log(num.toPrecision(1));

// const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
// const num = [5, 6, 7, 1, 8, 2, 3, 54, 856, 32, 45, 75, 21, 56, 32, 0, 4475];

// console.log(arr.splice(4, 2));
// arr.slice(1, 4)
// console.log(arr);
// console.log(arr.join("-"));
// arr.toSpliced(0, 1)
// console.log(arr);

// console.log(arr.find((x) => x == "a"));
// console.log(num.toSorted((a, b) => a - b));
// console.log(Math.min.apply(null, num));
// one.innerHTML = `<input type="text" class="input" style="background-color: #d3ccf3; border: none; border-radius: 16px; color: #1e1e1e; padding: 8px 16px;">
// <br/>
// <button class="button" style="padding: 8px 16px; border-radius: 16px; background-color: #2c53ff; color: #fff; border: none; margin-top: 16px;">Check</button>`;
// const input = document.querySelector(".input");
// const button = document.querySelector(".button");
// two.innerHTML = "Enter a number.";
// button.addEventListener("click", function () {
//   let year = parseInt(input.value.trim());

//   if (isNaN(year) || year <= 0) {
//     two.innerHTML = `Enter a valid positive number.`;
//   } else {
//     if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//       two.innerHTML = `Yes, ${year} is a leap year.`;
//     } else {
//       two.innerHTML = `No, ${year} is not a leap year.`;
//     }
//   }
// });

// const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = Object.fromEntries(
//   keys.map((key, index) => [key, values[index]])
// );

// console.log(result);

// const num = [5, 7, 3, 10];

// function maxNum(arr) {
// const orgArr = arr.sort((a, b) => b - a);
// return console.log(orgArr[0]);
// }

// maxNum(num)

// function a(x) {
// return console.log(x <= 100 && x >= 10);
// }
// a(10)

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function addTheNum(arr) {
// function add(a, b) {
// return a + b;
// }
// return console.log(arr.reduce(add));
// }
// addTheNum(num)

// function evenNum(arr) {
// const even = arr.filter((val) => val % 2 === 0);
// return console.log(even);
// }
// evenNum(num)

// ========= longest word==========
// const str = "I love JavaScript";

// function longestWord(sentence) {
// const words = sentence.split(" ");
// return words.reduce((longest, word) =>
// word.length > longest.length ? word : longest
// , "");
// }
// console.log(longestWord("Web development is powerful"));

// let x = 9;

// function a(num) {
// return console.log(!(num >= 10 && num <= 20));
// }

// a(x)

// console.log("5" !== 5);

// let str = "HELLO WORLD!";

// function lowerCase(str) {
// return console.log(str.toLowerCase());
// }

// lowerCase(str)

// function countCharacter(str, char) {
// return str.split(char).length - 1;
// }
// console.log(countCharacter("hello", "l"));

// function a(x) {
// return console.log(x % 3 === 0 && x % 5 === 0);
// }
// a(30);

// ===== QST 2 =====
// let str = "Hi, I'm Orin Chandra Pal.";

// function countVowels(string) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const arr = string.split("");
//   let totalVowels = 0;
//   arr.forEach(function (val) {
//     if (vowels.includes(val.toLowerCase())) {
//       totalVowels++;
//     }
//   });
//   return totalVowels;
// }

// console.log(countVowels(str));

// ===== QST 3 =====
// const num = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// function evenNum(arr) {
//   return arr.filter((val) => val % 2 === 0);
// }
// function oddNum(arr) {
//   return arr.filter((val) => val % 2 !== 0);
// }
// console.log(evenNum(num));
// console.log(oddNum(num));

// function evenNum2(arr) {
//   const result = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// function oddNum2(arr) {
//   const result = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(evenNum2(num));
// console.log(oddNum2(num));

// function evenNum(arr) {
//   return arr.reduce((acc, val) => {
//     if (val % 2 === 0) acc.push(val);
//     return acc;
//   }, []);
// }

// ===== QST 4 =====
// function maxElem(arr) {
//   return Math.max(...arr);
// }
// function minElem(arr) {
//   return Math.min(...arr);
// }

// console.log(maxElem(num));
// console.log(minElem(num));

// ===== QST 5 =====
// function isPrimeNum(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// let primeNums = num.filter((val) => isPrimeNum(val) === true);
// console.log(primeNums);
// num.forEach(function(val) {
//   return console.log(isPrimeNum(val));;
// })

// function prime(x) {
//   if (x <= 1) {
//     return "Enter a valid number";
//   }
//   for (i = 2; i <= Math.sqrt(x); i++) {
//     if (x % 2 === 0) {
//       return "No, this is not a prime number";
//     }
//   }
//   return "Yes, this is a prime number.";
// }
// console.log(prime(7));

// ===== QST 6 =====
// function sumOfDigits(n) {
//   return n
//     .toString()
//     .split("")
//     .map(Number)
//     .reduce((total, value) => total + value, 0);
// }
// console.log(sumOfDigits(12345));
// ["1", "2", "3"].map(x => Number(x))

// ===== QST 7 =====
// const person = {
//   "Lionel Messi": 36,
//   "Cristiano Ronaldo": 39,
//   "Kylian Mbappe": 25,
//   "Neymar Jr": 32,
//   "Luka Modric": 38,
//   "Toni Kroos": 34,
//   "Federico Valverde": 26,
// };
// function sortPerson(obj) {
//   let result = [];
//   let arr = Object.entries(obj);
//   arr.forEach(function(val){
//     if(val[1]>30) {result.push(val[0])}
//   })
//   return result;
// }
// function sortPerson(obj) {
//   return Object.entries(obj)
//     .filter(([name, age]) => age > 30)
//     .map(([name]) => name);
// }

// console.log(sortPerson(person));
// function sortPerson(obj) {
//   return Object.entries(obj)
//     .filter(([name, age]) => age > 30)
//     .map(([name, age]) => name);
// }
// console.log(sortPerson(person));

// ===== QST 8 =====

// let fruits = [
//   "apple",
//   "banana",
//   "cherry",
//   "mango",
//   "orange",
//   "grape",
//   "pineapple",
//   "kiwi",
//   "watermelon",
//   "papaya",
// ];

// function getLargestStr(arr) {
//   return arr.reduce(
//     (total, val) => val.length > total.length  ? val : total
//   );
// }
// console.log(getLargestStr(fruits));
// function getLargestStr(arr) {
//   return arr.reduce((total, value) =>
//     total.length < value.length ? value : total
//   );
// }
// console.log(getLargestStr(fruits));

// ===== QST 9 =====
// const num1 = [1, 2, 5, 7, 9];
// const num2 = [3, 4, 5, 7, 9, 8];
// function newArr(arr1, arr2) {
//   const result = [];
//   arr1.forEach(function (val) {
//     if (arr2.includes(val)) {
//       result.push(val);
//     }
//   });
//   return result;
// }
// function newArr(arr1, arr2) {
//   return arr1.filter((val) => arr2.includes(val));
// }
// console.log(newArr(num1, num2));

// ===== QST 10 =====

// const arr = [[1, [2, 3, 4], 5, 6, 7, [8, [9, 10, [11, 12,[15]]]]], 13, 14];
// console.log(flatArr(arr));

// function flatArr(arr){
// return arr.flat(Infinity)
// }

// ===== QST 11 =====
// let string = "i love javascript. this is a great programming language.";
// function toCapitalize(str) {
//   let result = str.split(" ").map((val) => {
//     if(val.length===0){return val}
//     return val[0].toUpperCase() + val.slice(1)
//   });
//   return result.join(" ");
// }
// console.log(toCapitalize(string));

// ===== QST 12 =====
// ===== QST 13 =====
// ===== QST 14 =====
// ===== QST 15 =====
// ===== QST 16 =====
// ===== QST 17 =====
// ===== QST 18 =====
// ===== QST 19 =====
// ===== QST 20 =====
// let color = "black";

// switch (color) {
//   case "red":
//     console.log("Color is red");
//     break;
//   case "blue":
//     console.log("Color is blue");
//     break;
//   case "green":
//     console.log("Color is green");
//     break;
//   default:
//     console.log("Color not recognized");
// }

// let age = 18;

// switch (true) {
//   case (age < 18):
//     console.log("age less than 18");
//     break;
//   case (age === 18):
//     console.log("age is 18");
//     break;
//   case (age > 18):
//     console.log("age is greater than 18");
// }
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// let i = 1;
// while (i <= 5) {
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
//   i++;
// }
// function loop(x) {
//   for (let i = 0; i < x; i++) {
//     if (i === 5) {
//       break;
//     }
//     console.log(i);
//   }
// }
// loop(10);

// function closureFn(param) {
//   param = param + " 1st";
//   function innerFn(a) {
//     console.log(a);
//   }
//   innerFn(param);
// }
// closureFn("hello");

// let x = 0;
// function num() {
//   function increapment(n) {
//     x = n++;
//   }
//   increapment(x);
//   return console.log(x);
// }
// num();
// num();

// function outer() {
//   return function inner() {
//     return "Hello from inner!";
//   };
// }
// const innerFunc = outer();
// console.log(innerFunc());

// function fn(x) {
//   if (!x) {
//     return "input not provided";
//   }
//   return "input provided";
// }
// console.log(fn());

// let x = "hello";
// function showX() {
//   return x + " world!";
// }
// console.log(showX());

// console.log(name(6));
// function name(x){
//   return x;
// }
console.log("hello");