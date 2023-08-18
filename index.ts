//==================== Task 01 ==================== 
console.log("==================== Task 01 ==================== ");
console.log("Node.js, TypeScript and VS Code installed in Laptop");



//==================== Task 02 ==================== 

// Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, 
// would you like to learn some Python today?”
console.log("==================== Task 02 ==================== ");

let personName:string ="Eric";

console.log(`Hello ${personName}, would you like to learn some Python today?`);



//==================== Task 03 ==================== 


// Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("==================== Task 03 ==================== ");

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
console.log("==================== Task 04 ==================== ");
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);




//==================== Task 05 ==================== 

// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message.
//  Print your message.

console.log("==================== Task 05 ====================");

let famous_person:string ="Albert Einstein ";
let message:string ="A person who never made a mistake never tried anything new.";

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
let nameOfPerson:string =" \t\n Ehsan Allahi \t\n";
console.log(nameOfPerson);
// Name after striping
console.log( "\n Name after Striping :");
console.log(nameOfPerson.trim());

//==================== Task 07 ==================== 

console.log("==================== Task 07 ==================== ");

// Number Eight: Write addition, subtraction, multiplication, 
// and division operations that each result in the number 8.
//  Be sure to enclose your operations in print statements to see the results.


// Adding 
console.log("addition");

console.log(5+3);


// subtraction
console.log("subtraction");
console.log( 10-2);

//multiplication
console.log("multiplication");
console.log(4*2);

// division
console.log("division");
console.log(24/3);

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

let favNumber:number = 17;

let msg:string =" My favorite Number is:";

console.log(`${msg}  ${favNumber}`);

//==================== Task 10 ==================== 

console.log("Task 10");

// Adding Comments: Choose two of the programs you’ve written,
//  and add at least one comment to each.
//   If you don’t have anything specific to write because your programs are too simple at this point,
//  just add your name and the current date at the top of each program file.
//   Then write one sentence describing what the program does.


// this is storing my Name into myName variable and diplaying 
let myName:string ="Ehsan Allahi";

console.log(myName);

// Addition of 3 numbers

const sum =(number1:number,number2:number ,number3:number)=>{
  return number1+number2+number3;
};

console.log(sum(3,5,2));
export{};


//==================== Task 11 ==================== 

console.log("==================== Task 11 ==================== ");
// Names: Store the names of a few of your friends in a array called names.
//  Print each person’s name by accessing each element in the list, one at a time.

let myFriends=['Usman','Ravees','Rashid','Ali']

for(const name of myFriends){
  console.log(name);
  
}
//==================== Task 12 ==================== 


console.log("Task 12");
// Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.
for(const name of myFriends ){
  console.log(`Hello, ${name}! Hope you're doing well.`);
  
}
//==================== Task 13 ==================== 

console.log("==================== Task 13 ==================== ");
// Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let motorcycles:string[]=['Honda 70cc','Honda 125cc','Suzuki 110 cc','Road Price 100cc']
for (const motorcycle of motorcycles)
console.log(`I would like to own a ${motorcycle} motorcycle`);

//==================== Task 14 ==================== 
console.log("==================== Task 14 ==================== ");
// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner.

let guests:string[]= ['Ali','Hamza','Usman']

for(const guest of guests )
{
  console.log(`Hello ${guest} your invite for dinner at my place tonight.`);
  
}

//==================== Task 15 ==================== 
console.log("==================== Task 15 ==================== ");

// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let listOfGuests:string[]=['Ali','Hamza','Bilal'];
for(const newGuest of listOfGuests ){
  console.log(`Hello ${newGuest} your invite for dinner at my place tonight.`);
  
}