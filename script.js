console.log("Hello, Bootcampers!");

// Variables
// Old way -> var keyword is not recommended
var name = "Kuya Jay";
console.log(name);

var num = 23;
console.log(num);

var isTrue = true;
console.log(isTrue);

// New way -> let and const
let newName = "Dev Jay";
console.log(newName);

newName = "Jay The Programmer";
console.log(newName);

newName = 235;
console.log(newName);

newName = true;
console.log(newName);

let newNum = 5;
console.log(newNum);

let isFake = false;
console.log(isFake);

// const -> constant
const lastName = "Mercado";
console.log(lastName);

// lastName = 'Brazil'; -> not allowed

// Data Types
// Two Kinds: Primitive and Reference
// Primitive -> single value
// String, Number, Boolean, Null, Undefined

// String
let string = "Hello, World!";
console.log(string);

let digitString = "23";
console.log(digitString);

let newString = "I'm Jay Mercado";
console.log(newString);

// Number
let integer = 23;
console.log(integer);

let float = 23.5;
console.log(float);

// Boolean
let isFalse = false;
console.log(isFalse);

let isTrue2 = true;
console.log(isTrue2);

// Null and Undefined both represent "no value"
// However, they are not the same
// Null is an assignment value. Meaning, you need to assign null to a variable.
// Undefined means a variable has been declared but has not yet been assigned a value.

// Null
let nullValue = null;
console.log(nullValue);

// Undefined
let undefinedValue = undefined;
console.log(undefinedValue);

let undefinedValue2;
console.log(undefinedValue2);

// Operators
// Arithmetic Operators
let num1 = 10;
let num2 = 3;

// Addition
console.log(num1 + num2);

// Subtraction
console.log(num1 - num2);

// Multiplication
console.log(num1 * num2);

// Division
console.log(num1 / num2);

// Modulus
console.log(num1 % num2);

let num3 = 1;
console.log("LINE 105", num3++);
console.log(num3);
console.log("LINE 107", ++num3);
console.log(num3);

// Assignment Operator
let num4 = 100;
let num5 = 50;
let num6 = 20;
num4 = num5 = num6;
console.log(num4, num5, num6);

// String Concatenation
let firstName = "Jay";
let lastName2 = "Mercado";
let fullName = firstName + " " + lastName2;
console.log(fullName);

// stringify is the ability to convert a number to a string
// Premise both values must only be digits
let num7 = "10";
let num8 = 5;

console.log(num7 + num8);
console.log(num7 - num8);
console.log(num7 * num8);
console.log(num7 / num8);

// Comparison Operators
let num9 = 10;
let num10 = 5;
console.log(num9 > num10);
console.log(num9 < num10);
console.log(num9 >= num10);
console.log(num9 <= num10);
console.log(num9 == num10);

let num11 = 11;
let num12 = '11';
console.log(num11 == num12);

// Strict Equality <- recommended
console.log(num11 === num12);

// Logical Operators
// AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);