//Arithmetic Operators
// let a = 10; 
// let b = 5;
// console.log("Addition:", a+b)
// console.log("Subtraction:", a-b)
// console.log("Multiplication:", a*b)
// console.log("Division:", a/b)
// console.log("Modulus:", a%b)
// console.log("Exponentiation:", a**b)


//Comparison Operators
// let a = 10;
// let b = 5;
// console.log("Equal:", a == b);
// console.log("Not Equal:", a != b);
// console.log("Strict Equal:", a === b);
// console.log("Strict Not Equal:", a !== b);
// console.log("Greater Than:", a > b);
// console.log("Less Than:", a < b);
// console.log("Greater Than or Equal:", a >= b);
// console.log("Less Than or Equal:", a <= b);


//Logical Operators
// let a = 10;
// let b = 5;
// console.log("AND:", a>5 && b>2);
// console.log("OR:", a>5 || b>2);
// console.log("NOT:", !(a>5));

//Check Positive Number
// let num = 10;
// if(num > 0){
// console.log("Is Positive:", num > 0);
// }


//Even or Odd

// let num = 10;
// if(num % 2 === 0){
//     console.log("Even Number");
// } else {
//     console.log("Odd Number");
// }


//Voting Eligibility
// let age = 18;
// if(age >= 18){
//     console.log("Eligible to vote");
// } else {
//     console.log("Not eligible to vote");
// }


//Positive,Negative or Zero
// let num = 6;
// if(num > 0){
//     console.log("Positive Number");
// } else if(num < 0){
//     console.log("Negative Number");
// } else {
//     console.log("Zero");
// }


//Calculate Grade
// let marks = 85;
// if(marks >= 90){
//     console.log("Grade: A");
// } else if(marks >= 80){
//     console.log("Grade: B");
// } else if(marks >= 70){
//     console.log("Grade: C");
// } else {
//     console.log("Grade: D");
// }



//Largest of two numbers
// let a = 10;
// let b = 20;
// if(a > b){
//     console.log("a is largest");
// } else {
//     console.log("b is largest");
// }


//Leap Year
//  let year = 2020;
//  if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log(year + " is a leap year");}
//     else{
//         console.log(year + " is not a leap year");
//     }


//print numbers 1 to 10 
//  for(let i = 1; i <= 10; i++){
//     console.log(i);
//  }

//Multiplication Table
//  let num = 5;
//  for(let i = 1; i <= 10; i++){
//     console.log(num + " x " + i + " = " + (num * i));
//  }

//Sum of first N natural numbers
//  let n = 10;
//  let sum = 0;
//  for(let i = 1; i <= n; i++){
//     sum += i;
//  }
//  console.log("Sum of first " + n + " natural numbers is: " + sum);


//Even Numbers Between 1 to 50
//  for(let i = 2; i <= 50; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
//  }

//count numbers divisible by 3
//  let count = 0;
//  for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0){
//         count++;
//     }
//  }
//  console.log("Count of numbers divisible by 3: " + count);

//Largest of three numbers
//  let a = 10;
//  let b = 20;
//  let c = 30;
//     if(a > b && a > c){
//         console.log("a is largest");
//     } else if(b > a && b > c){
//         console.log("b is largest");
//     } else {
//         console.log("c is largest");
//     }


//Divisible by 5 and 11
//  let num = 55;
//  if(num % 5 === 0 && num % 11 === 0){
//     console.log(num + " is divisible by both 5 and 11");
//  } else {
//     console.log(num + " is not divisible by both 5 and 11");
//  }


//Factorial of a number
//  let num = 5;
//  let factorial = 1;
//     for(let i = 1; i <= num; i++){
//         factorial *= i;
//     }
//     console.log("Factorial of " + num + " is: " + factorial);

//Print numbers 50 to 1 in reverse order
//   for(let i = 50; i >= 1; i--){
//     console.log(i);
//  }


//Sum of odd numbers betbeen 1 and 100
 let sum = 0;
 for(let i = 1; i <= 100; i++){
    if(i % 2 !== 0){
        sum += i;
    }
 }
 console.log("Sum of odd numbers between 1 and 100 is: " + sum);
