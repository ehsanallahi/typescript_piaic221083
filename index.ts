//==================== Task 01 ==================== 
console.log("Task1");
console.log("Node.js, TypeScript and VS Code installed in Laptop");



//==================== Task 02 ==================== 

// Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, 
// would you like to learn some Python today?”
console.log("Task2");

let personName:string ="Eric";

console.log(`Hello ${personName}, would you like to learn some Python today?`);



//==================== Task 03 ==================== 


// Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("Task3");

let personsName:string ="Ehsan Allahi";

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

let famous_person:string ="Albert Einstein ";
let message:string ="A person who never made a mistake never tried anything new.";

console.log(`${famous_person} once said, ${message}`);


//==================== Task 06 ==================== 

console.log("Task 06");

// Stripping Names: Store a person’s name, 
// and include some whitespace characters at the beginning and end of the name.
//  Make sure you use each character combination, "\t" and "\n", at least once.
//   Print the name once, so the whitespace around the name is displayed.
//    Then print the name after striping the white spaces.

console.log("Name with White Space:");
// Name with white spaces
let nameOfPerson:string =" \t\n Ehsan Allahi \t\n";
console.log(nameOfPerson);
// Name after striping
console.log( "\n Name after Striping :");
console.log(nameOfPerson.trim());










//==================== Task 07 ==================== 

console.log("Task 07");














//==================== Task 08 ==================== 


console.log("Task 08");



















//==================== Task 09 ==================== 


console.log("Task 09");












//==================== Task 10 ==================== 

console.log("Task 10");













//==================== Task 11 ==================== 

console.log("Task 11");

















//==================== Task 12 ==================== 


console.log("Task 12");
















//==================== Task 13 ==================== 

console.log("Task 13");