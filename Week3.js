// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
console.log(' \n Question 1: \n ');

const ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// 1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array
// •	Do not use numbers to reference the last element, find it programmatically,
// •	ages[7] – ages[0] is not allowed!
console.log(' \n Question 1a: \n ');

let lastValue = ages[ages.length-1];
console.log(lastValue - ages[0]);


// 1b.Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
console.log(' \n Question 1b: \n ');

ages.push(29);
lastValue = ages[ages.length-1]; //Shouldn't lastValue freaking be dynamic written this way? Why won't it work unless I run this again?
console.log(lastValue - ages[0]);

// 1c.Use a loop to iterate through the array and calculate the average age.
console.log(' \n Question 1c: \n ');

let arraySum = 0;
for (let i = 0; i < ages.length; i++) {
    arraySum += ages[i];
}
console.log(arraySum / ages.length); 


// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
console.log(' \n Question 2: \n ');

const names= ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
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
console.log(' \n Question2b: \n ');

let nameString = "";
for (let i=0; i<names.length; i++){
    nameString += ' ' + names[i];
}
console.log(nameString);

// 3.	How do you access the last element of any array ?
console.log(' \n Question 3: \n ');

console.log("This can be completed by using arrayname[arrayname.length - 1]")

// 4.	How do you access the first element of any array ?
console.log(' \n Question 4: \n ');

console.log("By using arrayname[0];");

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    // For example:
    // let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
    // let nameLengths = [5, 3, 4]; 			//create this new array
console.log(' \n Question 5: \n ');

const nameLengths = [];



// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
console.log(' \n Question 7: \n ');



// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e.if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
console.log(' \n Question 7: \n ');



// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.The full name should be the first and the last name separated by a space.
console.log(' \n Question 8: \n ');



// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log(' \n Question 9: \n ');



// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log(' \n Question 10: \n ');



// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log(' \n Question 11: \n ');



// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log(' \n Question 12: \n ');



// 13.	Create a function of your own that solves a problem.In comments, write what the function does and why you created it.
console.log(' \n Question 13: \n ');