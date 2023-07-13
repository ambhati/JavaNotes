// "use strict"
// //1. Using prompt ask user below questions and then print these values in console
// .What is your name
// let yourName = prompt("what is your name")
// console.log(yourName)
// // .What is your batch name
// let betchName = prompt("What is your batch name")
// console.log(betchName)
// //. What is your birth year
// let berthYear = Number(prompt("What is your birth year"))
// console.log(2023 - berthYear)
// //Now print name, batch name and age in the console. Let's say if birth year of the user is 1991 then output should be his/her current age 31 years

// //2. Print numbers like 3, 6, 9, 12, 15 till number is less than 100
// for (let i = 3; i <= 100;i++){
// if( i % 3 == 0 ){
//     console.log(i)
// }
// }
// //3. Difference between truthy and falsy values ?



// //5. Ask user a question "Do you want to study Nodejs"? 
// //If user click on OK button then print Yes else print No in the console
// let isStudy = confirm("Do you want to study Nodejs")
// if(isStudy){
//     console.log("Yes")
// }else{
//     console.log("No");
// }

// let i = 15
// if(i % 2 == 1 && i < 20){
//     alert("yes")
// }
// else{
//     alert("no")
// }

// let rating = 2
// if(rating == 5){
//     console.log("Excellent")
// }else if (rating == 4){
//     console.log("Good");
// }else if (rating == 3){
//     console.log("Average");
// }else if (rating == 2){
//     console.log("Poor");
// }else {
//     console.log("Very Poor");
// }

// for (let i = 1; i<=10; i++){
//     console.log(i);
// }

// for (let i = 2; i<=100; i= i+2){
//     console.log(i);
// }

// for (let i = 5; i <= 50; i = i + 5){
//     console.log(i);
// }

// for ( let i = 50; i>=5; i = i-5){
//     console.log(i);
// }

// for (let i = 1; i<=100; i++){
//   if(i%2==0){
//     console.log("even");
//   }
// }

// for (let i = 1; i<=100; i++){
//     if(i%7==0){
//       console.log(i + "hi");
//     }
//   }

// for (let i = 1; i<=100; i++){
//     if(i%5==0||i%8==0){
//       console.log(i);
//     }
//   }

// for (let i = 1; i<=5; i++){
//     for(let j = 1; j<=5; j++){
//         console.log("j");
//     }
// }

// for (let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 5; j++){
//         for(let k = 1; k <= 5; k++){
//             console.log("k");
//         }
//     }
// }

// Excercise 5
/*Create two variables and store some numbers in them. Now do below operations:
Addition
Multiplication
Substraction
Divide*/
// let a = 100;
// let b = 50;
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);





// const { number } = require("yargs");

// Question 2
// Using prompt ask user to enter name and then show the name in alert.
// let yourName = prompt("Enter Your Name")
// alert(yourName)

// Question 3
// Take two numbers if first number is less than second number than print your name, 
// age and mobile number else print your father name, age and mobile number.

// let a = 15;
// let b = 10;
// if(a < b ){
//     console.log("Anwar");
//     console.log("23");
//     console.log("909208262");
// }else{
//     console.log("ramjan mohammad");
//     console.log("48");
//     console.log("9672557064");
// }

//Question 4
// Take two numbers. Now using && and || operator check if both numbers are 
//divisible of 5 && 10 or not. Also check both numbers are even or not.
// let num1 = 40;
// let num2 = 20
// if(num1 % 5 == 0 && num1 % 10 == 0 && num2 % 5 == 0 && num2 % 10 == 0){
// console.log("True");
// }else{
//     console.log("false");
// }

// Question 5
// print Hello world using console.log, window.alert and document.write

// let printHello = "Hello";
// console.log(printHello);
// alert(printHello);
// document.write(printHello)

//Question 7
//Using confirm box ask questions "Do you want to play?". 
//if user click on Ok then print yes and if user click on Cancel then print No

// let askQue = confirm("Do you want to play")
// if(askQue){
//     console.log("Yes");
// }else{
//     console.log("No");
// }

// Question 8
// If total members in your family are more than 5 then print Big Family, 
// if members are between 3 to 5 then print small family else print very small family

// let member = 3
// if(member >= 5){
//     console.log("Big Family")
// }else if (member < 5 && member > 3 ){
//     console.log("Small Family");
// }else  {
//     console.log("very small family");
// }

// Question 9
// Using ++, -- print 1 to 10 and then 10 to 5

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }
// for(let i = 10; i>=5; i--){
//     console.log(i);
// }

// Excercise 4

//Question 1
//Take two numbers and take a value which should be the sum of the two numbers plus some other number. Now findout the 3rd number.
// let a = 70
// let b = 140
// let c ;
// c = b - a
// console.log(c);

// Question 2
// Ask the below questions:

// What is your English marks in 10th?
// What is your Science marks in 10th?
// What is your Math marks in 10th?
// What is your Hindi marks in 10th?
// What is your SST marks in 10th? Now calculate percentage by taking all the 5 subjects numbers.

// let per1 = prompt(" What is your English marks in 10th?")
// let per2 = prompt(" What is your Science marks in 10th?")
// let per3 = prompt(" What is your Math marks in 10th?")
// let per4 = prompt(" What is your Hindi marks in 10th?")
// let per5 = prompt(" What is your SST marks in 10th?")
// Input the marks obtained in each subject
// let engMarks = Number(prompt("What is your English marks in 10th?"))
// let scienceMarks = Number(prompt("What is your Science marks in 10th?"))
// let mathMarks = Number(prompt("What is your Math marks in 10th?"))
// let hindiMarks = Number(prompt("What is your Hindi marks in 10th?"))
// let sstMarks = Number(prompt("What is your SST marks in 10th?"))
// let socialscienceMarks = Number(prompt("What is your socialscience marks in 10th?"))

// // Calculate the total marks obtained
// let totalMark = engMarks + scienceMarks + mathMarks + hindiMarks + sstMarks + socialscienceMarks;
// let maximumMarks = 600;
// // let totalSub = 6
// // Calculate the percentage
// let percentage = (totalMark / maximumMarks  *100);

// // Display the percentage
// console.log("Your percentage is" + percentage + "%");


// Question 3
// In which century were your born? find out by asking birth year. 
// Use Math.floor function to remove decimal portion of the century.

// let birthYear = Number(prompt("In which century were your born?"))
// console.log(2023 - birthYear)

// let myName = "anwar mohammad"
// console.log(30 + myName)

// Question 5
// Create Reverse Game. Ask any question with 2 possible answers. If user selects first option then show second option in alert and vice versa.
// For example: Do you drink coffee or tea? and If user says coffee then show Tea in alert and if user says tea then show coffee.

// let game = prompt("Do you drink coffee or tea ?")
// if (game == "coffee"){
//     alert("tea")
// }else{
//     alert("coffee")
// }


// Question 6
// Test below conditions using &&, || and not logical operators.
//  Take any number check if number is even and also check if number is multiple of 4 or not. If both conditions are 
// true then check if number is less than 100 or number is 84 or not.

// let number = 84
// if((number % 2 == 0 && number % 4 == 0) && number < 100 || number == 84){
//     console.log("yes")
// }else{
//     console.log("no");
// }

// Question 7
// Take city temprature. If temp is less than 10 degree then print very cold. If city temp is less than 30 and greater than equal to 10 
// then print cold. If temp is between 30 to 40 then print Hot. Else print Very hot

// let temp = 50;
// if(temp < 10){
//     console.log("very cold");
// }else if(temp > 10 && temp <= 30){
//     console.log("cold");
// }else if(temp > 30 && temp <= 40){
//     console.log("Hot");
// }else{
//     console.log("very hot");
// }


// Question 8
// Using prompt ask user about his/her age. If user is greater than 18 
// then show user message "Do you want to open account?" If
// yes click on Okay button then ask your 4 below questions
// What is your name ?
// What is your aaadhar number ?
// What is your address?
// What is your mobile number? And print all these details in console.
// If click on cancel then show message "Sorry, please visit again."

// let age = Number(prompt("what is your age"))
// if(age > 18){
//     let openAccount = confirm("do you want to open account?")
//     if(openAccount){
//         let nameis = prompt("what is your name")
//         let aadharNumber = Number(prompt("what is your aadhar number"))
//         let address = prompt("what is you address")
//         let mobileNUmber = Number(prompt("what is your mobile number"))
//         console.log(nameis);
//         console.log(aadharNumber);
//         console.log(address);
//         console.log(mobileNUmber);
//     }
//     else{
//         console.log("sorry, please visit agian");
//     }
   
// }else{
//     console.log("Sorry, you are not of the eligible age to open an account.");
// }

// Question 10
// Who is most intelligent in your family? Ask 10th percentage of
//  each family member and check who got the highest marks.
//  If total family members are more than 4 then you can use Math.max() function

// let member1 = Number(prompt("What is your percentage?"));
// let member2 = Number(prompt("What is your percentage?"));
// let member3 = Number(prompt("What is your percentage?"));
// let member4 = Number(prompt("What is your percentage?"));
// let member5 = Number(prompt("What is your percentage?"));
// let member6 = Number(prompt("What is your percentage?"));
// let result = Math.max(member1 , member2, member3, member4, member5, member6);
// console.log(result);


// Excercise

// Question 1
// Create a variable marks and assign any number. 
// If marks are greater than 60 then print Pass else print Fail.

// let marks = 70;
// if(marks > 60){
//     console.log("Pass");
// }else{
//     console.log("Fail");
// }


// Question 2
// Take two numbers and check if both numbers are odd or not. 
//If yes then print Odd otherwise print Even

// let num1 = 40;
// let num2 = 55;
// if(num1 % 2 == 1 && num2 % 2 == 1){
//     console.log("odd");
// }else{
//     console.log("even");
// }

// Question 3
// Take 4 variables a, b, c, d and assign their values in 
// the way mentioned below and check output: a = b b = c c = d d = a

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;
// a = b
// b = c
// c = d
// d = a
// console.log(a,b,c,d);


// Question 4
// Print 2's table using ** operator. Use any logic but it should print 2's table.

// console.log(2**1);
// console.log(2**2);
// console.log(2**2+2);
// console.log(2**3);
// console.log(2**3+2);
// console.log(2**3+4);
// console.log(2**4-2);
// console.log(2**4);
// console.log(2**4+2);
// console.log(2**4+4);


// Question 5
// Check output of following and validate your answers

// 2+5*10-20**2                         (-348)
// 20/5*10+10                            (50)
// 10 && 20 + 10 * 10                  (120) 
// 30 > 20 && 10 + 4 < 15                (true)  right
// 30 > 20 && 10 + 4 < 15 || 10         (true)
// 30 < 20 || 10 + 5 < 15 || 10           (10 )
// 30 < 20 || 10 + 5 < 15 && 10           (  false )


// Question 6
// Take a number and check if number is odd or not. If number is Odd then print Yes else print No

// let num = 9;
// if(num % 2 == 1){
//     console.log("odd");
// }
// else{
//     console.log(num);
// }


// Question 7
// Take a number and check if number is divisible 
// by 10 && 5. If yes then print Yes else print no

// let num = 33;
// if(num % 10 == 0 && num % 5 == 0){
//     console.log("yes");
// }else{
//     console.log("no");
// }


// Question 8
// Take a number and check if number * 20 makes it 100 or not. If yes the print Yes else print No

// let num = 2;
// if(num * 20 == 100){
//     console.log("yes");
// }else{
//     console.log("no");
// }


// Question 9
// Calculate your 10th percentage and print Pass or 
// Fail if marks are more than 70 then print Pass else print Fail

// let obtainedMarks = 300;
// let totalMarks = 600;
// let percentage = (obtainedMarks/totalMarks)*100;
// if(percentage > 85 ){
//     console.log("merrit");
// }else if(percentage > 60 && percentage < 85){
//     console.log("First division pass");
// }else if(percentage > 40 && percentage < 60){
//     console.log("Second devision pass");
// }else{
//     console.log("Pass");
// }


// Question 10
// Take your age and check if your age is greater than 21 then print Adult else print Minor

// let age = Number(prompt("Enter you age"))
// if(age >= 21){
//     console.log("Adult");
// }else{
//     console.log("Minor");
// }


// Write a program that checks whether a given year is a leap year or not. 
// If the year is divisible by 4 and not divisible by 100,
//  or it is divisible by 400, then it is a leap year. Print the appropriate message.
// let year = 2016;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(year + " is a leap year.");
// } else {
//   console.log(year + " is not a leap year.");
// }

// let num1 = 15;
// let num2 = 15;
// let num3 = 15;
// let largest;

// if (num1 >= num2 && num1 >= num3) {
//   largest = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//   largest = num2;
// } else {
//   largest = num3;
// }

// console.log("The largest number is: " + largest);

// let number = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log(number + " x " + i + " = " + (number * i));
// }





// for(let i = 1; i <= 5; i++){                
//     for(let j = 1; j <= 5; j++){
//         document.write("*")
//     }
//   document.write("<br>")
// }
// document.write("<br>")


// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 5; j++){
//         document.write(i)
//     }
//     document.write("<br>")
// }
// document.write("<br>")



// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 5; j++){
//         document.write(j)
//     }
//     document.write("<br>")
// }document.write("<br>")





// for(let i = 5; i >=1; i--){
//     for(let j = 5; j >= 1; j--){
//         document.write(i)
//     }
//     document.write("<br>")
// }document.write("<br>")


// for(let i = 1; i <=5; i++){
//     for(let j = 5; j >=1; j--){
//         document.write(j)
//     }
//     document.write("<br>")
// }document.write("<br>")



// for(let i = "A"; i <= "E"; i++){
//     for(let j = "A"; j <= "E"; j++){
//         document.write(i)
//     }
//     document.write("<br>")
// }


// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }document.write("<br>")



// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= i; j++){
//         document.write(i)
//     }
//     document.write("<br>")
// }document.write("<br>")


// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= i; j++){
//         document.write(j)
//     }document.write("<br>")
// }document.write("<br>")



// for (let i = 0; i < 5; i++) {
//     let row = '';
//     for (let j = 0; j <= 5; j++) {
//       row += String.fromCharCode(65 + i);
//     }
//     console.log(row);
//   }
  
// console.log(String.fromCharCode([]))



// for(let i = 5; i >= 1; i--){
//     for(let j = 1; j <= i; j++){
//         document.write("*")
//     }document.write("<br>")
// }document.write("<br>")




// for(let i = 1; i <= 5; i++){
//     for(let j = 5; j >= i; j--){
//         document.write(i)
//     }document.write("<br>")
// }document.write("<br>")




// for(let i = 1; i <= 5; i++){
//     for(let j = 5; j >= i; j--){
//         document.write(j + " ")
//     }document.write("<br>")
// }document.write("<br>")



// for(let i = 5; i >= 1; i--){
//     for(let j = 1; j <= i; j++){
//         document.write(i + " ")
//     }document.write("<br>")
// }document.write("<br>")


// for(let i = 5; i >= 1; i--){
//     for(let j = 1; j <= i; j++){
//         document.write(j + " ")
//     }document.write("<br>")
// }document.write("<br>")



// for(let i = 1; i <= 5; i++)
//     {
//     for(let j = 4; j >= i; j--){
//         document.write("&nbsp " ) 
//     }
// for(let k = 1; k <= i; k++){
//     document.write("*")
// }
//  document.write("<br>")

   
// }


// for(let i = 1; i <= 5; i++)
//     {
//     for(let j = 4; j >= i; j--){
//         document.write("&nbsp " ) 
//     }
// for(let k = 1; k <= i; k++){
//     document.write("* ")
// }
//  document.write("<br>")

   
// }



// for(let i = 1; i <= 5; i++)
//     {
//     for(let j = 4; j >= i; j--){
//         document.write("&nbsp " ) 
//     }
// for(let k = 1; k <= i; k++){
//     document.write(k +" ")
// }
//  document.write("<br>")

   
// }



// for(let i = 5; i >= 1; i--)
//     {
//     for(let j = 4; j >= i; j--){
//         document.write("&nbsp " ) 
//     }
// for(let k = 1; k <= i; k++){
//     document.write("*")
// }
//  document.write("<br>")

   
// }



// for(let i = 5; i >= 1; i--)
//     {
//     for(let j = 4; j >= i; j--){
//         document.write("&nbsp " ) 
//     }
// for(let k = 1; k <= i; k++){
//     document.write("* ")
// }
//  document.write("<br>")

   
// }









