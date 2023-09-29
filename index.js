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
console.log("==================== Task 11 ==================== ");
// Names: Store the names of a few of your friends in a array called names.
//  Print each person’s name by accessing each element in the list, one at a time.
let myFriends = ['Usman', 'Ravees', 'Rashid', 'Ali'];
for (const name of myFriends) {
    console.log(name);
}
//==================== Task 12 ==================== 
console.log("Task 12");
// Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.
for (const name of myFriends) {
    console.log(`Hello, ${name}! Hope you're doing well.`);
}
//==================== Task 13 ==================== 
console.log("==================== Task 13 ==================== ");
// Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let motorcycles = ['Honda 70cc', 'Honda 125cc', 'Suzuki 110 cc', 'Road Price 100cc'];
for (const motorcycle of motorcycles)
    console.log(`I would like to own a ${motorcycle} motorcycle`);
//==================== Task 14 ==================== 
console.log("==================== Task 14 ==================== ");
// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner.
let guests = ['Ali', 'Hamza', 'Usman'];
for (const guest of guests) {
    console.log(`Hello ${guest} your invite for dinner at my place tonight.`);
}
//==================== Task 15 ==================== 
console.log("==================== Task 15 ==================== ");
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let listOfGuests = ['Ali', 'Hamza', 'Bilal'];
for (const newGuest of listOfGuests) {
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
for (const guest of listOfGuests) {
    console.log(` Dear ${guest} , please come to my dinner party!`);
}
console.log("Great news! We've found a bigger dinner table!");
listOfGuests.unshift("Usman");
listOfGuests.splice(Math.floor(listOfGuests.length / 2), 0, "Talha");
listOfGuests.push("Hanan");
for (const guest of listOfGuests) {
    console.log(`Dear ${guest} , please come to my dinner party!`);
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
for (const guest of listOfGuests) {
    console.log(`Dear ${listOfGuests}Sorry, the new dinner table won't arrive in time, and we can only invite two people for dinner."`);
}
while (listOfGuests.length > 2) {
    const removedGuest = listOfGuests.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
    }
}
for (const remainingGuests of listOfGuests) {
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
let placesToVisit = ["Paris", "Tokyo", "New York", "Venice", "Sydney"];
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
let famousLanguages = ["Englis", "Urdu", "Punjabi", "Sindhi", "Balti", "Arabic"];
console.log("List Famous Languages:");
for (const languages of famousLanguages) {
    console.log(languages);
}
//==================== Task 21 ==================== 
console.log("==================== Task 21 ==================== ");
// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.
let countries = [
    {
        name: "United States",
        capital: "Washington, D.C.",
        language: "English",
    },
    {
        name: "Pakistan",
        capital: "Islamabad",
        language: "Urdu"
    },
    {
        name: "India",
        capital: "New Delhi",
        language: "Hindi"
    },
    {
        name: "KSA",
        capital: "Riadh",
        language: "Arabic"
    },
];
console.log("Information about countries");
for (const country of countries) {
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
let mountainPeaks = [
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
}
catch (error) {
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
let fruits = ["apple", "banana", "cherry", "orange"];
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
// Alien Colors #1: Imagine an alien was just shot down in a game.
//  Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// step 1
const alien_color = "green";
if (alien_color === "green") {
    console.log(" Congratulations! You just earned 5 points. ");
}
// step 2 
const aliens_color = "yelle";
if (aliens_color === "green") {
    console.log("Congratulations! You just earned 5 points.");
}
//==================== Task 26 ==================== 
console.log("==================== Task 26 ==================== ");
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// step 1
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien");
}
else {
    console.log("You earned 10 points");
}
if (alien_color == "yellow") {
    console.log("You just earned 5 points for shooting the alien");
}
else {
    console.log("You earned 10 points");
}
//==================== Task 27 ==================== 
console.log("==================== Task 27 ==================== ");
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// for green
const green_alien = " green";
if (green_alien == " green") {
    console.log("earned 5 points");
}
else if (green_alien == " yellow") {
    console.log("earned 10 points");
}
else if (green_alien == "red") {
    console.log("earned 15 points");
}
// for yellow
const yellow_alien = " yellow";
if (yellow_alien == " green") {
    console.log("earned 5 points");
}
else if (yellow_alien == " yellow") {
    console.log("earned 10 points");
}
else if (yellow_alien == "red") {
    console.log("earned 15 points");
}
// for red
const alien_colors = "red";
if (alien_colors == " green") {
    console.log("earned 5 points");
}
else if (alien_colors == " yellow") {
    console.log("earned 10 points");
}
else if (alien_colors == "red") {
    console.log("earned 15 points");
}
//==================== Task 28 ==================== 
console.log("==================== Taskb28 ==================== ");
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
const age = 33;
if (age < 2) {
    console.log("the person is a baby");
}
else if (age == 2 || age < 4) {
    console.log("the person is a toddler");
}
else if (age == 4 || age < 13) {
    console.log("the person is a Kid");
}
else if (age == 13 || age < 20) {
    console.log("the person is a teenager");
}
else if (age == 20 || age < 65) {
    console.log("the person is a adlut");
}
else if (age >= 65) {
    console.log("the person is a elder");
}
//==================== Task 29 ==================== 
console.log("==================== Task 29 ==================== ");
// Favorite Fruit: Make a array of your favorite fruits,
// and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
//  If the fruit is in your array, the if block should print a statement, such as You really like bananas!
const favorite_fruits = ['apple', 'banana', 'strawberry'];
if (favorite_fruits.includes('apple')) {
    console.log("I have a thing for apples!");
}
if (favorite_fruits.includes('banana')) {
    console.log("I really like bananas!");
}
if (favorite_fruits.includes('strawberry')) {
    console.log("Strawberries are my favorite!");
}
if (favorite_fruits.includes('orange')) {
    console.log("Oranges are also on my list!");
}
else {
    console.log("I don\'t seem to like oranges.");
}
if (favorite_fruits.includes('kiwi')) {
    console.log("Kiwi is another one of my favorites!");
}
else {
    console.log("Kiwi is not in my list of favorite fruits");
}
//==================== Task 30 ==================== 
console.log("==================== Task 30 ==================== ");
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a website.
//  Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
const username = ['admin', 'ehsan', 'bilal', 'hamza', 'eric'];
for (const usernames of username) {
    if (usernames === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello  ${usernames}, thank you for logging in again`);
    }
}
//==================== Task 31 ==================== 
console.log("==================== Task 31 ==================== ");
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
const usernames = ['admin', 'Eric', 'Alice', 'Bob', 'John'];
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
else {
    for (const username of usernames) {
        if (username === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
usernames.length = 0;
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
//==================== Task 32 ==================== 
console.log("==================== Task 32 ==================== ");
// Checking Usernames: Do the following to create a program that simulates how websites
//  ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users.
//  Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used.
//  If it has, print a message that the person will need to enter a new username. If a username has not been used,
//   print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
const current_users = [' Ali', 'Ahmad', 'Wahaj', 'Taha', 'Wasif'];
const new_users = ['Hamza', 'Ehsan', 'Usama', 'Taha', 'Talha'];
for (const new_username of new_users) {
    const lowercase_new_username = new_username.toLowerCase();
    const isUsernameTaken = current_users.some(username => username.toLowerCase() === lowercase_new_username);
    if (isUsernameTaken) {
        console.log(`Sorry, the username "${new_username}" is already taken. Please choose a different one.`);
    }
    else {
        console.log(`Congratulations, the username "${new_username}" is available.`);
    }
}
//==================== Task 33 ==================== 
console.log("==================== Task 33 ==================== ");
// Ordinal Numbers: Ordinal numbers indicate their position in a array,
//  such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
    let ordinalEnding;
    if (number === 1) {
        ordinalEnding = 'st';
    }
    else if (number === 2) {
        ordinalEnding = 'nd';
    }
    else if (number === 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    console.log(`${number} ${ordinalEnding}`);
}
//==================== Task 34 ==================== 
console.log("==================== Task 34 ==================== ");
// Pizzas: Think of at least three kinds of your favorite pizza.
//  Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and 
// then an additional sentence, such as I really love pizza!
const favoritePizza = [' Malai Boti', ' Kebab Crust', 'Deep Dish'];
for (const pizza of favoritePizza) {
    console.log(` I like ${pizza} Pizza.`);
}
console.log(" I really love Pizza!");
//==================== Task 35 ==================== 
console.log("==================== Task 35 ==================== ");
// Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//  • Modify your program to print a statement about each animal, such as A dog would make a great pet.
//   • Add a line at the end of your program stating what these animals have in common.
//  You could print a sentence such as Any of these animals would make a great pet!
const animals = ['Dog', 'Cat', 'Rabbit'];
for (const animal of animals) {
    console.log(`A ${animal} would be a great pet`);
}
console.log(" Any of these animals would make a great pet!");
//==================== Task 36 ==================== 
console.log("==================== Task 36 ==================== ");
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`You have ordered a ${size} shirt with the following message: "${message}`);
}
make_shirt('21', 'I want to print my Name on the Shirt as Ehsan Allahi');
//==================== Task 37 ==================== 
console.log("==================== Task 37 ==================== ");
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirts(size = 'Large', message = 'I love TypeScript') {
    console.log(`You have ordered a ${size} shirt with the following message: "${message}".`);
}
make_shirts(); // This will use the default values: size = 'Large', message = 'I love TypeScript'
make_shirts('Medium'); // This will use the default message: message = 'I love TypeScript'
// Create a small shirt with a custom message.
make_shirts('Small', 'TypeScript Rocks!');
//==================== Task 38 ==================== 
console.log("==================== Task 38 ==================== ");
// Cities: Write a function called describe_city() that accepts the name of a city and its country.
//  The function should print a simple sentence, such as Karachi is in Pakistan. 
//  Give the parameter for the country a default value. 
//  Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city = "Karachi", country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city();
describe_city('Delhi', 'India');
describe_city('London', 'UK');
//==================== Task 39 ==================== 
console.log("==================== Task 39 ==================== ");
// City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:
function city_country(city, country) {
    return `${city}, ${country}`;
}
const location1 = city_country('Lahore', 'Pakistan');
const location2 = city_country('Paris', 'France');
const location3 = city_country('New York', 'USA');
console.log(location1);
console.log(location2);
console.log(location3);
//==================== Task 40 ==================== 
console.log("==================== Task 40 ==================== ");
// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title,
//   and it should return a Object containing these two pieces of information.
//    Use the function to make three dictionaries representing different albums. 
//    Print each return value to show that Objects are storing the album information correctly.
//     Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//      If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('Artist1', 'Album Title 1');
const album2 = make_album('Artist2', 'Album Title 2', 12);
const album3 = make_album('Artist3', 'Album Title 3');
console.log(album1);
console.log(album2);
console.log(album3);
//==================== Task 41 ==================== 
console.log("==================== Task 41 ==================== ");
// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
show_magicians(magicianNames);
//==================== Task 42 ==================== 
console.log("==================== Task 42 ==================== ");
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
function show_magician(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
const magicianName = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
const greatMagicianNames = make_great(magicianNames);
show_magicians(greatMagicianNames);
//==================== Task 43 ==================== 
console.log("==================== Task 43 ==================== ");
// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() 
// with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function shows_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_greats(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
const magiciansNames = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
const greatMagiciansNames = make_great(magicianNames);
show_magicians(greatMagicianNames);
//==================== Task 44 ==================== 
console.log("==================== Task 44 ==================== ");
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
function makeSandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
}
makeSandwich('Lettuce', 'Tomato', 'Turkey', 'Cheese');
makeSandwich('Peanut Butter', 'Jelly');
makeSandwich('Ham', 'Swiss Cheese', 'Mustard');
//==================== Task 45 ==================== 
console.log("==================== Task 45 ==================== ");
// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, modelName, ...args) {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (const arg of args) {
        for (const key in arg) {
            car[key] = arg[key];
        }
    }
    return car;
}
const carInfo = createCar('Toyota', 'Camry', { color: 'Silver', year: 2022, features: ['Sunroof', 'Navigation'] });
console.log(carInfo);
