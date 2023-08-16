"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//==================== Task 01 ==================== 
console.log("==================== Task 01 ==================== ");
console.log("Node.js, TypeScript and VS Code installed in Laptop");
//==================== Task 02 ==================== 
// Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, 
// would you like to learn some Python today?”
console.log("==================== Task 02 ==================== ");
let personName = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);
//==================== Task 03 ==================== 
// Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("==================== Task 03 ==================== ");
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
console.log("==================== Task 04 ==================== ");
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);
//==================== Task 05 ==================== 
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message.
//  Print your message.
console.log("==================== Task 05 ====================");
let famous_person = "Albert Einstein ";
let message = "A person who never made a mistake never tried anything new.";
console.log(`${famous_person} once said, ${message}`);
//==================== Task 06 ==================== 
console.log("==================== Task 06 ====================");
// Stripping Names: Store a person’s name, 
// and include some whitespace characters at the beginning and end of the name.
//  Make sure you use each character combination, "\t" and "\n", at least once.
//   Print the name once, so the whitespace around the name is displayed.
//    Then print the name after striping the white spaces.
console.log("Name with White Space:");
// Name with white spaces
let nameOfPerson = " \t\n Ehsan Allahi \t\n";
console.log(nameOfPerson);
// Name after striping
console.log("\n Name after Striping :");
console.log(nameOfPerson.trim());
//==================== Task 07 ==================== 
console.log("==================== Task 07 ==================== ");
// Number Eight: Write addition, subtraction, multiplication, 
// and division operations that each result in the number 8.
//  Be sure to enclose your operations in print statements to see the results.
// Adding 
console.log("addition");
console.log(5 + 3);
// subtraction
console.log("subtraction");
console.log(10 - 2);
//multiplication
console.log("multiplication");
console.log(4 * 2);
// division
console.log("division");
console.log(24 / 3);
//==================== Task 08 ==================== 
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("Task 08");
console.log("--------------------------------------");
console.log("5+3");
console.log("--------------------------------------");
console.log("10-2");
console.log("--------------------------------------");
console.log("4*2");
console.log("--------------------------------------");
console.log("24/3");
console.log("--------------------------------------");
//==================== Task 09 ==================== 
console.log("Task 09");
// Favorite Number: Store your favorite number in a variable.
//  Then, using that variable, create a message that reveals your favorite number.
//   Print that message.
let favNumber = 17;
let msg = " My favorite Number is:";
console.log(`${msg}  ${favNumber}`);
//==================== Task 10 ==================== 
console.log("Task 10");
// Adding Comments: Choose two of the programs you’ve written,
//  and add at least one comment to each.
//   If you don’t have anything specific to write because your programs are too simple at this point,
//  just add your name and the current date at the top of each program file.
//   Then write one sentence describing what the program does.
// this is storing my Name into myName variable and diplaying 
let myName = "Ehsan Allahi";
console.log(myName);
// Addition of 3 numbers
const sum = (number1, number2, number3) => {
    return number1 + number2 + number3;
};
console.log(sum(3, 5, 2));
//==================== Task 11 ==================== 
console.log("Task 11");
//==================== Task 12 ==================== 
console.log("Task 12");
//==================== Task 13 ==================== 
console.log("Task 13");
