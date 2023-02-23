// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
console.log(' \n Question 1: \n ');

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// 1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array
// •	Do not use numbers to reference the last element, find it programmatically,
// •	ages[7] – ages[0] is not allowed!
console.log(' \n Question 1a: \n ');

// let lastValue = ages[ages.length-1]; //this method does work, however due to it being used multiple times it makes more sense to me to use this as a function instead.
// console.log(lastValue - ages[0]);

function lastArraySubtract(array) {
    let lastArrayValue = ages[ages.length - 1];
    let result = lastArrayValue - ages[0];
    return result; //this returns the result so it can be called outside of the function
}
console.log(lastArraySubtract(ages));

// 1b.Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
console.log(' \n Question 1b: \n ');

ages.push(29); //array.push used to add new value to the end of the array
console.log(lastArraySubtract(ages)); //using the function from the previous question to esure that it's dynamic to the array

// 1c.Use a loop to iterate through the array and calculate the average age.
console.log(' \n Question 1c: \n ');

let arraySum = 0;
for (let i = 0; i < ages.length; i++) {
    arraySum += ages[i];
}
console.log(arraySum / ages.length); 


// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
console.log(' \n Question 2: \n ');

let names= ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

// 2a.Use a loop to iterate through the array and calculate the average number of letters per name.
console.log(' \n Question 2a: \n ');

let nameLength = 0;
for(let i =0; i < names.length; i++){
    nameLength += names[i].length;
}
let average = nameLength / names.length;
console.log(average);

// 2b.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
console.log(' \n Question 2b: \n ');

let nameString = "";
for (let i=0; i<names.length; i++){
    nameString += ' ' + names[i];
}
console.log(nameString);

// 3.	How do you access the last element of any array ?
console.log(' \n Question 3: \n ');

console.log("This can be completed by using arrayname[arrayname.length - 1]") // we add the -1 due to arrays being on a 0 based index, without the -1 we would get undefined

// 4.	How do you access the first element of any array ?
console.log(' \n Question 4: \n ');

console.log("By using arrayname[0];"); 

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    // For example:
    // let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
    // let nameLengths = [5, 3, 4]; 			//create this new array
console.log(' \n Question 5: \n ');

console.log(names); // I chose to print the names array above for testing and to show that the lengths do match the name lengths. This is not required for this to run though.
let nameLengths = [];
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
console.log(' \n Question 6: \n ');

let sum = 0;
for (let i = 0; i < names.length; i++){
    sum += nameLengths[i];
}
console.log(sum);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e.if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
console.log(' \n Question 7: \n ');

function wordConcant(word, n) {
    let output = "";
    for (i = 0; i < n; i++){
        output += word;
    }
    return output;
}
console.log(wordConcant('Hello', 8));

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.The full name should be the first and the last name separated by a space.
console.log(' \n Question 8: \n ');

function fullName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName; // this is creating a new variable called fullName which will add the two arguments in the desired format
    return fullName; 
}
console.log(fullName('John', 'Smith'));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log(' \n Question 9: \n ');

let numberArray = [20, 10, 5, 8, 6];
console.log(numberArray); // I am console logging the array created for the sake of the assignment to show what the numbers are in the array in the console log above the output of the function
function sumTrue(array) {
    let sum = 0;
    for (let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i];
    }
    if (sum < 100) {
        return true;
    } else {
        return false;
    }
}
console.log(sumTrue(numberArray));

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log(' \n Question 10: \n ');

function arrayAverage(arrayOfNumbers) {
    let arraySum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        arraySum += arrayOfNumbers[i];
    }
    let output = arraySum / arrayOfNumbers.length;
    return output;
}
console.log(arrayAverage(numberArray));

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log(' \n Question 11: \n ');

function largerAverage(array1, array2) {
       if (arrayAverage(array1) > arrayAverage(array2)) { //in this line I am using the arrayAverage function created earlier in this assignment in an if statement to determine if array1 is larger than array 2
           return true;
    } else {
           return false;
    }
}
console.log(largerAverage(numberArray, nameLengths));


// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log(' \n Question 12: \n ');

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    } else {
        return "Do not buy a drink"; // while this wasn't required in the question I went ahead and added it so that way we can see a false value of sorts.
    }
}
console.log(willBuyDrink(true, 15));

// 13.	Create a function of your own that solves a problem.In comments, write what the function does and why you created it.
console.log(' \n Question 13: \n ');

//I have chosen to make a tip calculator, this function will take two paramaters. The cost of the Bill, and the Tip Percentage to be left.
//I've chosen to create this function because this is a common thing that alot of people struggle with, myself included. 

function tipCalculator(bill, tipPercent) {
    let tipAmount = ((bill * tipPercent) / 100); //this line here will determine the amount of the tip based on the percentage input by the user
    let tip = Math.round(100 * tipAmount) / 100; //this line will round the cents of the tip amount to the nearest hundredth
    let totalAmount = bill + tip; // this line will add the tip to the bill amount calculating the total amount to be paid by the user
    return 'The tip will be $' + tip + '. Making your total amount $' + totalAmount + '.'; 
}
console.log(tipCalculator(76.25, 15));