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
// className
// Answer


// ================= Question 31 =================

// Answer
 


// ================= Question 32 =================

// Answer
 


// ================= Question 33 =================

// Answer
 


// ================= Question 34 =================

// Answer
 


// ================= Question 35 =================

// Answer
 


// ================= Question 36 =================

// Answer
 


// ================= Question 37 =================

// Answer
 


// ================= Question 38 =================

// Answer
 


// ================= Question 39 =================

// Answer
 


// ================= Question 40 =================

// Answer
 


// ================= Question 41 =================

// Answer
 


// ================= Question 42 =================

// Answer
 


// ================= Question 43 =================

// Answer
 


// ================= Question 44 =================

// Answer
 


// ================= Question 45 =================

// Answer
 


// ================= Question 46 =================

// Answer
 


// ================= Question 47 =================

// Answer
 


// ================= Question 48 =================

// Answer
 


// ================= Question 49 =================

// Answer
 


// ================= Question 50 =================

// Answer
