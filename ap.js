// ============================
//    JavaScript Assignment 47
// ============================


// ================= Question 1 =================
// Math.abs()
// Answer
//  let num = -2321.34;
//  console.log(num, typeof num);
//  num = Math.abs(num);
//  console.log(num,typeof num);


// ================= Question 2 =================
// math.ceil()
// Answer
//  let num = 21.1223;
//  console.log(num);
//  num = Math.ceil(num);
//  console.log(num)


// ================= Question 3 =================
// math.floor()
// Answer
//  let num = 231.768;
//  console.log(num);
//  num = Math.floor(num);
//  console.log(num)


// ================= Question 4 =================
// math.max()
// Answer
//  let array = [6,2,88,889,2,22,-1,-8];
// //  let max = Math.max(...array);
// let min = Math.min(...array);
//  console.log(min);

// ================= Question 5 =================
// math.random()
// Answer
//  let random = Math.random() *3;
//  random = Math.floor(random);
//  random = random +1;
//  console.log(random);
// ================= Question 6 =================
// ternary operator
// Answer
//  let age = 20;
//  let condition = (age > 30)?('old'):('young');
//  console.log(condition)
// ================= Question 7 =================
// for loop
// Answer
//  let fruits = ['apple','banaa','mango'];
//  for(let i = 0; i <fruits.length; i++){console.log('i',i)
//     for(let j = 0; j < fruits.length;j++){console.log('j',j)}
//  }


// ================= Question 8 =================
// .replace()
// Answer
// let str = 'javascriptalongcourse';
// //    let rep = str.replace('a','z');
// let rep = str.replaceAll('a','*')
//    console.log(rep)
 
// ================= Question 9 =================
// push()
// Answer
//  let array = ['mango','apple'];
//  console.log(array);
//  let r = array.push('dates');
//  console.log(array);
//  console.log(r);
// ================= Question 10 =================
// ushift()
// Answer
//   let array = ['mango','apple'];
//   console.log(array);
//   let r = array.unshift('lemon');
//   console.log(array);
//   console.log(r);
// ================= Question 11 =================
// pop()
// Answer
//   let array = ['mango','apple'];
//   let r = array.pop();
// console.log(array);
// console.log(r);
// ================= Question 12 =================
// shift()
// Answer
//   let array = ['mango','apple'];
//   let r = array.shift();
//   console.log(array);
//   console.log(r);
// ================= Question 13 =================
// indexOf()
// Answer
//  let str = 'hankerchief';
//  let ind = str.indexOf('e');
//  console.log(ind);
//  let lst = str.lastIndexOf('e');
//  console.log(lst)
// ================= Question 14 =================
// .reverse()
// Answer
//  let str = 'java';
//  let spl = str.split('');
//  console.log(spl);
//  let rev = spl.reverse();
//  console.log(rev);;
//  let join = rev.join('');
//  console.log(join)

// ================= Question 15 =================
// splice()
// Answer
//  let fruits = ['mango','orange','bnana','dates'];
//  console.log(fruits);
//  let one = fruits.splice(1,1);
//  console.log(fruits);
//  console.log(one)

// replace 
// let fruits = ['mango','orange','bnana','dates'];
//  console.log(fruits);
//  let rep = fruits.splice(2,0,'carrot','raddish','guava');
//  console.log(rep);
//  console.log(fruits)

// ================= Question 16 =================
// slice()
// Answer
//  let fruits = ['mango','orange','bnana','dates'];
//  let newf = fruits.slice(0,3);
//  console.log(newf)


// ================= Question 17 =================
// ! and !! 
// Create a variable username.
// If username is empty, use ! to print "Please enter username"
// Otherwise, print "Welcome [username]"
// Answer
//  let username = '';
//  if(!!username){console.log('enter user name')}
//  else{console.log('welcome : ',username)}

// ================= Question 18 =================
// Create two variables:
/*
let username = "Aziz";
let password = "1234";
Instructions:
Check if both username and password are not empty using &&
If true → print "Login successful"
Otherwise → print "Login failed"
Expected Output Example:
Login succesful*/

// Answer
//  let username = 'Aziz';
//  let password = '321';
//  if(username && password !== ''){console.log('successful login')}
//  else{console.log('login unsuccessful')}

// ================= Question 19 =================
/*
Create a variable:

let userCity = "";
Instructions:
Use || to assign a default city "Unknown" if userCity is empty
Print: "User city is [city]"
Expected Output Example:

User city is Unknown
*/
// Answer
//  let userCity = ''|| 'karachi';
//  if(userCity){console.log('user city is ', userCity)}
//  else{console.log('user city is unknown')}
// ================= Question 20 =================
// nested if statement
// Answer
// let name = prompt('enter your name');
// if(name === 'Aziz'){let password = prompt('enter your password');
//     if(password === '987'){let education = prompt('enter your education ');
//         if(education === 'inter'){let age = prompt('enter your age');
//             if(age > 20){console.log('you have selected')}
//             else{console.log('you donot fulfill job requirement because your age is less')}
           
//         }
//         else{console.log('you have not required education')}
//     }
//     else{console.log('incorrect password')}
// }
// else{console.log('user name is incorrect')}


// ================= Question 21 =================
// date()
// Answer
// let current = new Date();
// console.log(current,typeof current);
// let year = current.getFullYear();
// console.log(year);
// let month = current.getMonth();
// console.log(month+1);
// let dat = current.getDate();
// console.log(dat);
// let mint = current.getMinutes();
// console.log(mint);
// let seconds = current.getSeconds();
// console.log(seconds);
// let milli = current.getMilliseconds();
// console.log(milli);
// let time = current.getTime();
// console.log(time);
// let timst = current.toTimeString();
// console.log(timst);
// let locl = current.toLocaleTimeString();
// console.log(locl);
// let dt = current.toLocaleDateString();
// console.log(dt);
// let nn = new Date('september 9 1992');
// console.log(nn) 


// ================= Question 22 =================
/*
Create a program that prints the current date and time using new Date().
Expected Output Example:
Current Date & Time: Mon Aug 04 2025 03:20:00 GMT+0500 (PKT)
*/
// Answer
//  let current = new Date();
//  console.log(current);

// ================= Question 23 =================
/*
Create a Date object
Print:
Year → getFullYear()
Month (0-11) → getMonth()
Day of Month (1-31) → getDate()
Expected Output Example:
Year: 2025
Month: 7   (August, because months start from 0)
Day: 4
*/
// Answer
//  let current = new  Date();
//  let date = current.getDate();
//  console.log(date);
//  let month = current.getMonth();
//  console.log(month + 1);
//  let year = current.getFullYear();
//  console.log(year)
// ================= Question 24 =================
/*
Show Current Day Name
Create a Date object
Use getDay() to get day index (0-6)
Print day name like "Monday"
Hint: Use an array of day names.

*/
// Answer
//  let current = new Date();
//  let day = current.getDay();
//  let dayName = ['sun','mon','tues','wed','thurs','frid','satu'];
//  let result = dayName[day];
//  console.log(result)

// ================= Question 25 =================
/*
Birthday Checker
Create a variable with your birthday date
Print th day of the week you were born on
Example Output:
I was born on: Wednesday
*/
// Answer
//  let current = new Date();
//  let birthday = new Date('September 9 1992');
//  console.log(birthday);
//  let day = birthday.getDay();
//  console.log(day);
//  let dayName = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
//  let required = dayName[day];
//  console.log(required);
//  console.log(` I was born on ${required}` )


// ================= Question 26 =================
/*
Calculate Days Between Two Dates
Take today’s date
Take a future date (like 31 Dec 2025)
Print how many days are left
Expected Output Example:
Days left: 150
*/
// Answer
//  let current = new Date();
//  let requiredDate = new Date('December 31 2025');
//  let currentMilliseconds = current.getTime();
//  console.log(currentMilliseconds);
//  let requiredMillisecods = requiredDate.getTime();
//  console.log(requiredMillisecods);
//  let result = requiredMillisecods - currentMilliseconds;
//  console.log(result);
//  let days = result/(1000*60*60*24);
//  days = Math.floor(days)
//  console.log(days)
// ================= Question 27 =================
// setDate()
// Answer
// let current  = new Date();
// // current.setDate(8);
// // current.setFullYear(2029);
// // current.setMonth(8);
// current.setMinutes(55);
// console.log(current)

// ================= Question 28 =================
// .style
// Answer
//  let getheading = document.getElementById('heading');
//  console.log(getheading);
//  getheading.style.color = 'red';
//  getheading.style.textDecoration = 'underline'
 
// ================= Question 29 =================
// classList
// Answer
 
//  function adding(){let getElement = document.getElementById('heading');
//     getElement.classList.add('good')
//  }
// function removing(){let getElement = document.getElementById('heading');
//     getElement.classList.remove('good')
//  }
// function toggling(){let getElement = document.getElementById('heading');
//     getElement.classList.toggle('good')
//  }

// ================= Question 30 =================
// higher order function
// Answer
// function createCalculator(operation){return function(x,y){return operation (x,y)}}

// function subtract(a,b){return a - b;}
// function addition(a,b){return a + b;}

// let subtractCalculator = createCalculator(subtract);
// let addCalculator = createCalculator(addition);
// console.log(addCalculator(4,6))
// console.log(subtractCalculator(200,20))
// ================= Question 31 =================
// higher order function
// Answer
// function higher(operation){return function(x,y){return operation(x,y)}} 
// function subtract(a,b){return a-b;}
// function add(a,b){return a+b;}

// let addHigher = higher(add);
// let subtractHigher = higher(subtract);
// console.log(addHigher(3,4));
// console.log(subtractHigher(3,1))

// ================= Question 32 =================
// higer order function
// Answer
//  function higherOrder(operation){return function(x,y){return operation(x,y)}}

//  function squaring(n){return n*2}
//  function addition(a,b){return a+b;}
// let squre = higherOrder(squaring);
// let add = higherOrder(addition);
// console.log(add(8,2))
// console.log(squre(8))

// ================= Question 33 =================
// Filter Even Numbers
// Array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Task: Use filter() to create a new array containing only even numbers.
// Task 2: Filter Words Longer Than 5 Letters
// Answer
//  let array =  [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  let evenNumbers = array.filter((item)=>{return item % 2 === 0})
//  console.log(evenNumbers)

// ================= Question 34 =================
/*
 Filter Words Longer Than 5 Letters
Array: ["apple", "banana", "grape", "kiwi", "pineapple"]
Task: Use filter() to return all words with more than 5 letters.

*/
// Answer
//   let array = ["apple", "banana", "grape", "kiwi", "pineapple"];
//   let result = array.filter((element)=>{return element.length > 5;})
//   console.log(result)


// ================= Question 35 =================
/* 
Filter Positive Numbers
Array: [-2, 5, -8, 10, 0, -3, 7]
Task: Use filter() to get only positive numbers.
*/
// Answer
//  const array = [-2, 5, -8, 10, 0, -3, 7];
//  const positive = array.filter((element)=>{return element >0});
//  console.log(positive);


// ================= Question 36 =================
/*
Filter Students With 80+ Marks
Array of objects:

js
Copy
Edit
let students = [
  { name: "Ali", marks: 75 },
  { name: "Sara", marks: 85 },
  { name: "John", marks: 92 },
  { name: "Zain", marks: 60 }
];
Task: Use filter() to get students who scored 80 or more.

*/
// Answer
//  let students = [
//   { name: "Ali", marks: 75 },
//   { name: "Sara", marks: 85 },
//   { name: "John", marks: 92 },
//   { name: "Zain", marks: 60 }
// ];
// const requirement = students.filter(function(element){return element.marks >= 80;})
// console.log(requirement)

// ================= Question 37 =================
/*
Filter Words Starting With "A"
Array: ["Apple", "Banana", "Avocado", "Orange", "Apricot"]
Task: Use filter() to return only words starting with "A" or "a".
*/
// Answer
//  let array = ["Apple", "Banana", "Avocado","anem", "Orange", "Apricot"];
//  let required = array.filter(function(item){return item.startsWith('A') || item.startsWith('a')})
// console.log(required)

// ================= Question 38 =================
/*
let people = [
  { name: "Ali", age: 17 },
  { name: "Sara", age: 22 },
  { name: "John", age: 15 },
  { name: "Zain", age: 30 }
];
Task: Use filter() to get all people who are 18 or older.
*/
// Answer
//  let people = [
//   { name: "Ali", age: 17 },
//   { name: "Sara", age: 22 },
//   { name: "John", age: 15 },
//   { name: "Zain", age: 30 }
// ];
// let adult = people.filter((item)=>{return item.age >=18});
// console.log(adult)

// ================= Question 39 =================
/*
 Find a number in an array
// Array of numbers
const numbers = [10, 25, 33, 47, 58, 60];

// TODO: Use find() to get the first number greater than 40
*/
// Answer
//  const numbers = [10, 25, 33, 47, 58, 60];
//  let required = numbers.find((item)=>{return item > 40})
//  console.log(required)

// ================= Question 40 =================
/* 
// Array of fruits
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// TODO: Use find() to get the first fruit that starts with the letter 'm'
*/
// Answer
//  const fruits = ["apple", "banana", "grapes", "mango", "orange"];
//  let required = fruits.find((item)=>{return item.startsWith('m')});
//  console.log(required)

// ================= Question 41 =================
/*
const users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 25 },
  { name: "Ahmed", age: 22 },
];

// TODO: Use find() to get the user whose age is 25
*/
// Answer
 const users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 25 },
  { name: "Ahmed", age: 22 },
];
let required = users.find(function(item){return item.age === 25});
console.log(required)


// ================= Question 42 =================
/*
 Find a negative number
// Array with positive and negative numbers
const numbers = [4, -2, 7, 10, -5, 3];

// TODO: Use find() to get the first negative number
*/
// Answer
//  const numbers = [4, -2, 7, 10, -5, 3];
//  let need = numbers.find(function(item){return item < 0});
//  console.log(need);


// ================= Question 43 =================
/*
Find a string with length greater than 5
js
Copy
Edit
// Array of country names
const countries = ["Pakistan", "India", "USA", "Nepal", "Bangladesh"];

// TODO: Use find() to get the first country name with length greater than 5
*/
// Answer
//  const countries = ["Pakistan", "India", "USA", "Nepal", "Bangladesh"];
//  let need = countries.find(function(item){return item.length > 5});
//  console.log(need)

// ================= Question 44 =================
/*
/ Array of colors
const colors = ["red", "green", "blue", "yellow"];

// TODO: Use forEach() to print each color in the console
*/
// Answer
//  const colors = ["red", "green", "blue", "yellow"];
// colors.forEach(function(element){console.log(element)});

// ================= Question 45 =================
/*
// Array of animals
const animals = ["cat", "dog", "elephant", "lion"];

// TODO: Use forEach() to print each animal with its index
// Example Output: 0: cat, 1: dog ...
*/
// Answer
//  const animals = ["cat", "dog", "elephant", "lion"];
//  animals.forEach(function(index,animal){console.log(index + ': ' + animal)})

// ================= Question 46 =================
/*
const numbers = [10, 20, 30, 40];

// TODO: Use forEach() to calculate the sum of all numbers
*/
// Answer
// const numbers = [10, 20, 30, 40];
// let sum = 0;
// numbers.forEach(function(num){sum = sum + num;
// })
 
// console.log(sum)

// ================= Question 47 =================
/*
 Convert all names to uppercase

// Array of names
const names = ["ali", "ahmed", "sara", "raza"];

// TODO: Use forEach() to print all names in uppercase
*/
// Answer
//  const names = ["ali", "ahmed", "sara", "raza"];
//  names.forEach(function(element){console.log(element.toUpperCase())})


// ================= Question 48 =================
/*
Create an array of fruits. Ask the user to enter a fruit name (using prompt) and 
check if the fruit exists in the array using includes().
Example Output:

Enter fruit name: mango
Yes! mango is available.

*/
// ============= Ans ===========
// let fruit  = ['apple','banana','mango','grapes'];
// let check = prompt('enter fruit name').toLowerCase();
// if(fruit.includes(check)){console.log(`Yes ${check} is available in fruit list`)}
// else{console.log(`${check} is not availabe in list`)}

// ================= Question 49 =================
/*
Check if a word is in a sentence
Create a string sentence and check if a certain word exists in that sentence using includes().
Example:

let sentence = "JavaScript is very interesting";
console.log(sentence.includes("JavaScript")); // true
*/
// Answer
//  let sentence = 'JavaScript is very interesting';
//  console.log(sentence.includes('JavaScript'))
// 2 
// let name = 'Aziz';
// console.log(name.toLowerCase().includes('I'));

