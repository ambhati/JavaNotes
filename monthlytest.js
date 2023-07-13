// Print below pattern
// 1
// 23
// 456
// 78910
// 1112131415
//  let str = '';
// let num = 1;
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     str += num + '';
//     num++;
//   }
//   str += '\n';
// }

// console.log(str);

// let num = 1
// for(let i = 1; i <= 5; i++){
//    let row = ""
//     for(let j = 1; j <= i; j++){
//       row += num
//       num++
//     }
//     console.log(row);
   
// }

// for (let i = 1; i <= 6; i++) {
//   let spaces = ' '.repeat(6 - i);
//   let stars = '$'.repeat(2 * i - 1);
//   console.log(spaces + stars);
// }




// Create a JavaScript program that prompts the user to enter their age. 
// If the age entered is less than 18, display an alert box with the message 
// "Sorry, you must be at least 18 years old to access this website." 
// If the age entered is between 18 and 30, display a confirm box with 
// the message "Are you sure you want to proceed?" If the user clicks 
// "Cancel" in the confirm box, display an alert box with the 
// message "Action canceled." If the user clicks "OK" in the confirm box,
//  display a prompt box asking for their name and display an alert box with 
//  the message "Welcome, [Name]!" (replace [Name] with the name entered).

// let age = +prompt("what is your age");
// if(age < 18){
//     alert("Sorry, you must be at least 18 years old to access this website")
// }
// else if(age > 18 && age < 30){
//     let process = confirm("Are you sure you want to proceed ?")
//     if(process){
//         let yourName = prompt("what is your name ?")
//         alert(`Welcome, ${yourName}!`)
//         console.log(yourName);
//     }else{
//         alert("Action canceled")
//     }
// }

// Create a JavaScript program that calculates the average of three numbers. 
// Prompt the user to enter three numbers and display the average using an 
// alert box.

// let num1 = +prompt("please enter first number");
// let num2 = +prompt("please enter second number");
// let num3 = +prompt("please enter third number")
// let average = (num1 + num2 + num3)/3;
// alert(`Average is ${average}`)

// Solve below expressions

// 5 + 2 * 3 - 4 / 2                9
// 10 % 3 + 4 * 2 / 5               2.6
// 15 % (7 + 3) - 4 * 2             -3
// (2 + 3) * (4 - 1) + 6 / 2        18
// 12 / 3 + 4 - 2 * 5               -2

// console.log(12 / 3 + 4 - 2 * 5  );


// Explain the difference between the == and ===
//  operators in JavaScript, and provide an example
//   where their behavior differs.

// == ye operator only value check krta he ki same he ye nhi
// === ye operator value ke sath sath data type bhi che karta he example

// console.log(5=="5");// == operator true
// console.log(5==="5");// === operator false


// let str = "anwar, mohammad, merta"
// console.log(str.slice(3,8));
// console.log(str.slice(- 3));
// console.log(str.substring(3,8));
// console.log(str.substring(-3));

// Write a JavaScript program that prompts the user to enter their age and
//  their country of residence. Based on the age and country, display a
//   message using if-else if-else statements and logical operators.
//    Consider the following conditions:

// If the age is less than 18, display "Sorry, you must be at least 18 years old."
// If the age is 18 or older and the country is "USA", display "Welcome! Enjoy your 
// stay in the USA."
// If the age is 18 or older and the country is "UK", display "Welcome! 
// Enjoy your stay in the UK."
// If the age is 18 or older and the country is neither "USA" nor "UK",
//  display "Welcome! Enjoy your stay."

// let age = +prompt("Enter your age");
// let country = prompt("Enter your country")
// let message = ""
// if(age < 18){
//     message = "Sorry, you must be at least 18 years old"
// }
// else if(age >= 18 && country === "USA"){
//     message = "Welcome! Enjoy your stay in USA"
// }
// else if(age >= 18 && country === "UK"){
//     message = "Welcome! Enjoy your stay in UK"
// }
// else if(age >= 18 && country === "INDIA"){
//     message = "Welcome! Enjoy your stay in INDIA"
// }
// else if(age >= 18 && (country !== "USA" && country !== "UK" && country !== "INDIA")){
//     console.log("Welcome! Enjoy your stay.")
// }
// alert(message)


// Question: Write a JavaScript program that prompts the user to enter a sentence. 
// The program should perform the following operations:
// Use the toLowerCase function to convert the sentence to lowercase.
// Use the replace function to replace all spaces with dashes ("-") in the 
// modified sentence.
// Use the slice function to extract a substring from the 2nd to the 6th character
//  (inclusive) of the modified and replaced sentence.
// Use the startsWith function to check if the extracted substring 
// starts with the letter "a".
// Display the result of the check using an alert box.



// let str = prompt("Please enter a sentence")
// console.log(str);
// let changestr = str.toLowerCase();
// console.log(changestr);
// let spacereplace = changestr.replace(" ", "-")
// console.log(spacereplace);
// let replaced = spacereplace.slice(1,7)
// console.log(replaced);
// let extractedstr = replaced.startsWith("a")
// console.log(extractedstr);
// if(extractedstr){
//     alert("The extract substring starts with 'a'")
// }
// else{
//     alert("The extract substring not start with 'a'")
// }



// Question: Write a JavaScript function called calculateArea that takes the length
//  and width of a rectangle as parameters and returns the area of the rectangle.
//   The formula for calculating the area is length * width.


// function calculateArea(length,width){
//     return length * width
// }
// let area = calculateArea(20,10)
// console.log(`the area of the rectangle ${area}`);



// Write a JavaScript function which calculate sum of 4 numbers. 
// If sum of 4 numbers is greater than 100 then return 1 else return 2

// function calculateSum(a, b, c, d) {
//   let sum = a + b + c + d;

//   if (sum > 100) {
//     return 1;
//   } else {
//     return 2;
//   }
// }

// let result = calculateSum(2, 10, 20, 35);
// console.log( result);


// $##$##$
// $##$##
// $##$
// $##
// $

// for(let i = 5; i >= 1; i--){
//     for(let j = 1; j <= i; j++){
//         if(j % 2 == 0){
//             document.write("##")
//         }else{
//             document.write("$")
//         }
//     }document.write("<br>")
// }


// let age = +prompt("what is your age")
// if(age > 18 && age < 50){
//     let rescofee = confirm("kya aap coffee pina chahenge?")
//     if(rescofee){
//       let typecofee = prompt("aap kis prkar ki coffee pina chahenge?")
//         alert(`Hello sir/mam, ye rahi aapki coffee ${typecofee}`)
//     }
// }else if(age < 18){
//     let tea = confirm("kya aap chai pina chahenge?")
//     if(tea){
//         let restea = prompt("aap kis prkar ki chai pina chahenge?")
//         alert(`Hello sir/mam, ye rahi aapki chai ${restea}`)
//     }
// }else{
//     alert("Sorry, please visit try again")
// }

// Take any number and take other number as 39. Now check their difference by 
// subtracting each other. If both numbers difference is greater than 40 then 
// print double their absolute difference else print triple their absolute
//  difference.


// let num1 = +prompt("enter any number")
// let num2 = 39
// let difference = num1 - num2
// if(difference > 40){
//     document.write(difference * 2)
// }else{
//     document.write(difference * 3)
// }

// Write a JavaScript program to check from two given integers, whether one is 
// greater than 18 and another one is less than 10.

// If yes then print sum of both the numbers Else print multiplication of both 
// numbers


// let a1 = +prompt("please enter first number")
// let a2 = +prompt("please enter second number")
// if(a1 > 18 && a2 < 10){
//     document.write(a1 + a2)
// }else{
//     document.write(a1 * a2)
// }
