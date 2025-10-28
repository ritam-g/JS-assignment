// 🧠 JavaScript Assignment - 27 Oct 2025
// Author: Ritam Maty
// This script demonstrates variables, console methods, string operations, and data types in JS.

// Variables and Keywords (var, let, const)
let a = "ritam";
let b = "maty";
let c = "from Bengal";

a = "swarnim";
b = "swarup";
c = "from Odisha";
console.log(a + " " + b + " " + c);

// var scope example
{
    var x = "hello";
}
console.log(x);

// const examples
const pi = 3.14;
const pin = 502236;
const rollno = 21;
console.log(pi + " " + pin + " " + rollno);

// Console messages
console.info("This is info message");
console.warn("This is warning message");

// Prompt and alert
let name = prompt("Enter your name:");
alert("Hello " + name);

// Age and type checking
let age = prompt("Enter your age:");
age = parseInt(age);
console.log("After adding 5 with your age: " + (age + 5));
console.log(typeof age);

// Working with strings
let data = "I love Sheryians";
console.log(data.slice(0, 6));
console.log("This is split for breaking the string:", data.split(''));
data = data.replace("love", "study at");
console.log("After replacing the string:", data);

// Template string and includes()
let text = "    hello world    ";
console.log(`This is my first programming in JS so ${text.trim()}`);

let msg = "love";
let check = msg.includes("love");
console.log(check);

let s1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.";
let s2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.";
let statement = s1 + " " + s2;
console.log(statement);

// Multiple statements in one line
console.log("Hello 1"); console.log("Hello 2"); console.log("Hello 3");

// Expression and statement
let val = (1 + 1) * 10;
console.log(val);

// Primitive vs Reference Types
let numA = 10;
let numB = numA;
numB = 30;
console.log(numA, numB); // 10, 30

let obj1 = {
    name: "Ritam",
    age: 21
};
let obj2 = obj1;
obj2.age = 22;
console.log(obj1); // { name: "Ritam", age: 22 }
