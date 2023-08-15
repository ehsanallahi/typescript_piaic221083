"use strict";
//==================== Task 01 ==================== 
console.log("Task1");
console.log("Node.js, TypeScript and VS Code installed in Laptop");
//==================== Task 02 ==================== 
// Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, 
// would you like to learn some Python today?”
console.log("Task2");
let personName = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);
//==================== Task 03 ==================== 
// Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("Task3");
let personsName = "Ehsan Allahi";
//lowercase
console.log("lowercase");
console.log(`Hello ${personsName.toLowerCase()}, would you like to learn some Python today?`);
//uppercase
console.log("uppercase");
console.log(`Hello ${personsName.toUpperCase()}, would you like to learn some Python today?`);
// titlecase
console.log("totlecase");
const titleCase = personsName
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log(`Hello ${titleCase}, would you like to learn some Python today?`);
//==================== Task 04 ==================== 
// Famous Quote: Find a quote from a famous person you admire.
//  Print the quote and the name of its author. Your output should look something like the following,
//   including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Task 4");
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);
//==================== Task 05 ==================== 
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message.
//  Print your message.
console.log("Task 05");
let famous_person = "Albert Einstein ";
let message = "A person who never made a mistake never tried anything new.";
console.log(`${famous_person} once said, ${message}`);
