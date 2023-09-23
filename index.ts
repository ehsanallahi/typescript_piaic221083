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
//==================== Task 16 ==================== 
console.log("==================== Task 16 ==================== ");


// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15.
//  Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list. • 
//  Print a new set of invitation messages, one for each person in your list.

for (const guest of listOfGuests){
  console.log(` Dear ${guest} , please come to my dinner party!`);

}
console.log("Great news! We've found a bigger dinner table!");

listOfGuests.unshift("Usman");

listOfGuests.splice(Math.floor(listOfGuests.length/2),0,"Talha");

listOfGuests.push("Hanan");

for ( const guest of listOfGuests){
  console.log(  `Dear ${guest} , please come to my dinner party!`);

}


//==================== Task 17 ==================== 
console.log("==================== Task 17 ==================== ");
// Shrinking Guest List: You just found out that your new dinner table won’t
//  arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16.
//  Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them 
//  know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.

for (const guest of listOfGuests ) {
  console.log(`Dear ${listOfGuests}Sorry, the new dinner table won't arrive in time, and we can only invite two people for dinner."`)
}
 
while (listOfGuests.length>2){
  const removedGuest =listOfGuests.pop();
  if (removedGuest){
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
    
  }
}
for (const remainingGuests of listOfGuests){
  console.log(`Dear ${remainingGuests} , you are still invited for the Dinner! `);
  
}

// removing last 2 guests
listOfGuests.pop();
listOfGuests.pop();


//==================== Task 18 ==================== 
console.log("==================== Task 18 ==================== ");


// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order.
//  Print the list to show that its order has changed.
 // Array of places to visit (not in alphabetical order)
let placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Venice", "Sydney"];

// Print the array in its original order
console.log("Original Order:", placesToVisit);

// Print the array in alphabetical order without modifying it
console.log("Alphabetical Order:", [...placesToVisit].sort());

// Show that the original order is still intact
console.log("Original Order (unchanged):", placesToVisit);

// Print the array in reverse alphabetical order without modifying it
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// Show that the original order is still intact
console.log("Original Order (unchanged):", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show the changed order
console.log("Reversed Order:", placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();

// Print the array to show it's back to its original order
console.log("Original Order (restored):", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();

// Print the array to show the order has been changed
console.log("Alphabetical Order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));

// Print the array to show the order has been changed to reverse alphabetical
console.log("Reverse Alphabetical Order:", placesToVisit);

//==================== Task 19 ==================== 
console.log("==================== Task 19 ==================== ");


// Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//  print a message indicating the number of people you are inviting to dinner.

let numberOfGuestInvited = listOfGuests.length;
console.log(`Number of Guests invited to Dinner , ${numberOfGuestInvited}`);

//==================== Task 20 ==================== 
console.log("==================== Task 20 ==================== ");
// Think of something you could store in a array.
//  For example, you could make a list of mountains, rivers, countries, cities, languages,
//   or anything else you’d like. Write a program that creates a list containing these items.

let famousLanguages :string[] = ["Englis","Urdu","Punjabi","Sindhi","Balti","Arabic"];

console.log("List Famous Languages:");

for ( const languages of famousLanguages){
  console.log(languages);
  
}
//==================== Task 21 ==================== 
console.log("==================== Task 21 ==================== ");
// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

let countries :{name:string ; capital:string; language:string;}[]=[
  {
    name:"United States",
    capital:"Washington, D.C.",
    language:"English",
  },
  {
    name:"Pakistan",
    capital:"Islamabad",
    language:"Urdu"
  },
  {
    name:"India",
    capital:"New Delhi",
    language:"Hindi"
  },
  {
    name:"KSA",
    capital:"Riadh",
    language:"Arabic"
  },
]

console.log("Information about countries");

for (const country of countries){
  console.log(`Country : ${country.name}`);
  console.log(`Capital: ${country.capital}`);
  console.log(`Language: ${country.language}`);
  console.log("----------------");
  
  
  
}


//==================== Task 22 ==================== 
console.log("==================== Task 22 ==================== ");

// Intentional Error: If you haven’t received an array index error in one of your programs yet, 
// try to make one happen. Change an index in one of your programs to produce an index error. 
// Make sure you correct the error before closing the program.




// Array of famous mountain peaks
let mountainPeaks: string[] = [
  "Mount Everest",
  "K2",
  "Kangchenjunga",
  "Makalu",
  "Lhotse",
  "Annapurna",
  "Dhaulagiri",
  "Nanga Parbat",
  "Manaslu",
  "Cho Oyu"
];

// Try to access an out-of-range index (intentional error)
const index = 15; // This is an invalid index since there are only 10 elements in the array
try {
  console.log(`Mountain at index ${index}: ${mountainPeaks[index]}`);
} catch (error) {
  console.error(`Error: ${error}`);
}

// Print the list of mountain peaks (corrected)
console.log("List of Famous Mountain Peaks:");
for (const peak of mountainPeaks) {
  console.log(peak);
}



//==================== Task 23 ==================== 
console.log("==================== Task 23 ==================== ");
// Conditional Tests: Write a series of conditional tests.
//  Print a statement describing each test and your prediction for the results of each test.
//   Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.//
// Test 1: Equality check

// Test 1: Equality check
let num1 = 10;
let num2 = 10;

console.log("Is num1 == num2? I predict True.");
console.log(num1 == num2);

// Test 2: Inequality check
let xx = 5;
let yy = 3;

console.log("Is xx != yy? I predict True.");
console.log(xx != yy);

// Test 3: Greater than
let aa = 7;
let bb = 5;

console.log("Is aa > bb? I predict True.");
console.log(aa > bb);

// Test 4: Less than or equal to
let pp = 20;
let qq = 20;

console.log("Is pp <= qq? I predict True.");
console.log(pp <= qq);

// Test 5: Logical AND
let sunny = true;
let warm = true;

console.log("Is it sunny && warm? I predict True.");
console.log(sunny && warm);

// Test 6: Equality check
let number1 = 10;
let number2 = 20;

console.log("Is number1 == number2? I predict False.");
console.log(number1 == number2);

// Test 7: Inequality check
let val1 = 5;
let val2 = 5;

console.log("Is val1 != val2? I predict False.");
console.log(val1 != val2);

// Test 8: Greater than
let m = 7;
let n = 15;

console.log("Is m > n? I predict False.");
console.log(m > n);

// Test 9: Less than or equal to
let age1 = 20;
let age2 = 20;

console.log("Is age1 <= age2? I predict False.");
console.log(age1 <= age2);

// Test 10: Logical AND
let Sunny = true;
let Warm = false;

console.log("Is it Sunny && Warm? I predict True.");
console.log(Sunny && Warm);


//==================== Task 24 ==================== 
console.log("==================== Task 24 ==================== ");

// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
//--------------------
// • Tests for equality and inequality with strings

let string1 = "apple";
let string2 = "banana";

console.log("Is string1 == string2 ? I preict False");
console.log(string1 == string2);

let string3 = "apple";
let string4 = "apple";

console.log("Is string3 equal to string4? I predict True.");
console.log(string3 == string4);
// • Tests using the lower case function

let text = "Hello , World!";
let lowerText = text.toLowerCase();

console.log("Is 'Hello , World!' is equal to 'hello , world!' ,I predict True");
console.log(lowerText == " hello , world!");

// Numerical tests

let numA = 10;
let numB = 5;

console.log("Is numA greater than numB? I predict True.");
console.log(numA > numB);

console.log("Is numA less than numB? I predict False.");
console.log(numA < numB);

console.log("Is numA greater than or equal to numB? I predict True.");
console.log(numA >= numB);

console.log("Is numA less than or equal to numB? I predict False.");
console.log(numA <= numB);

// Tests using "and" and "or" operators
let sunnyWeather = true;
let weekend = false;

console.log("Is it sunny weather AND the weekend? I predict False.");
console.log(sunnyWeather && weekend);

console.log("Is it sunny weather OR the weekend? I predict True.");
console.log(sunnyWeather || weekend);

// Test whether an item is in an array

let fruits = ["apple", "banana","cherry", "orange"];

console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes("banana"));

console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes("grape"));

// Test whether an item is not in an array
let colors = ["red", "green", "blue", "yellow"];

console.log("Is 'purple' not in the colors array? I predict True.");
console.log(!colors.includes("purple"));

console.log("Is 'blue' not in the colors array? I predict False.");
console.log(!colors.includes("blue"));

//==================== Task 25 ==================== 
console.log("==================== Task 25 ==================== ");




















//==================== Task 26 ==================== 
console.log("==================== Task 26 ==================== ");





















//==================== Task 27 ==================== 
console.log("==================== Task 27 ==================== ");






















//==================== Task 28 ==================== 
console.log("==================== Taskb28 ==================== ");




















//==================== Task 29 ==================== 
console.log("==================== Task 29 ==================== ");
























//==================== Task 30 ==================== 
console.log("==================== Task 30 ==================== ");
























//==================== Task 31 ==================== 
console.log("==================== Task 31 ==================== ");

















//==================== Task 32 ==================== 
console.log("==================== Task 32 ==================== ");























//==================== Task 33 ==================== 
console.log("==================== Task 33 ==================== ");

























//==================== Task 34 ==================== 
console.log("==================== Task 34 ==================== ");

























//==================== Task 35 ==================== 
console.log("==================== Task 35 ==================== ");























//==================== Task 36 ==================== 
console.log("==================== Task 36 ==================== ");



























//==================== Task 37 ==================== 
console.log("==================== Task 37 ==================== ");



























//==================== Task 38 ==================== 
console.log("==================== Task 38 ==================== ");

























//==================== Task 39 ==================== 
console.log("==================== Task 39 ==================== ");




























//==================== Task 40 ==================== 
console.log("==================== Task 40 ==================== ");

























//==================== Task 41 ==================== 
console.log("==================== Task 41 ==================== ");
























//==================== Task 42 ==================== 
console.log("==================== Task 42 ==================== ");




























//==================== Task 43 ==================== 
console.log("==================== Task 43 ==================== ");


















//==================== Task 44 ==================== 
console.log("==================== Task 44 ==================== ");





















//==================== Task 45 ==================== 
console.log("==================== Task 45 ==================== ");





