//  Create a function and pass one number in arugment. Agar number odd hai to ek 
//  function return kro jo Odd print krta ho. Agar number even ho to ek function 
//  return kro jo Even Print krta ho 

// function value(num1){
//     if(num1 % 2 === 0){
//         return function (){
//             console.log("even");
//         }
//     }else{
//         return function (){
//             console.log("odd");
//         }
//     }
// }
// console.log(value(5));


// Create a function and pass a string. Agar string hello hai to ek function 
// return kro jo Hello print krta ho otherwise else me dusra function return kro
//  jo Hello World print krta ho 

// function string(str){
//     if(str === "hello"){
//         return function (){
//             console.log("Hello");
//         }
//     }else{
//         return function(){
//             console.log("Hello World");
//         }
//     }
// }

// let finalstr = string("hello")
// finalstr()

// Create a function and pass one number and one callback function. Callback function 
// me 1st time ek function pass krna hai jo diye gye number ki table print krta hu 
// ascending order me like 5 10 15 20
// next time ek dusra function pass kro jo table print krta ho descending order me 
// like 50 45 40

// function table(num1, cb){
//     console.log(num1);
//     cb()
// }

// function ascendingTable(){
//     for(let i = 5; i <= )
// }

// let count = 0;
// const intervalId = setInterval(() => {
//   console.log("Hello World");
//   count++;
//   if (count === 5) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// setTimeout(function () {
//   let a = 10;
//   let b = 20;
//   console.log(a + b);
// }, 2000);
// setInterval(function () {
//   console.log("Hello");
// }, 1000);


// let i = 1;
// setInterval(function () {
//   console.log(i);
//   ++i;
// }, 1000);


// let hour = 0;
// let minute = 0;
// let seconds = 0;
// let format = 12;
// setInterval(function () {
//   ++seconds;
//   if (seconds === 20) {
//     ++minute;
//     seconds = 1;
//   }
//   console.log(`${hour}:${minute}:${seconds}`);
// }, 1000);


// let id = setInterval(function () {
//   console.log("Hello");
// }, 1000);
// let id2 = setInterval(function () {
//   console.log("Hello World");
// }, 1000);
// setTimeout(function () {
//      clearInterval(id);
// }, 5000);

// let counter = 0;



// // Call the printHelloWorld function every second
// let  intervalId = setInterval(function printHelloWorld() {
//   console.log("Hello World");
//   counter++;

//   if (counter === 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// // Stop the interval after 10 seconds
// setTimeout(function() {
//   clearInterval(intervalId);
// }, 10000);


// let id = setInterval(function(){
//     console.log("hello world");
// },1000)
// setTimeout(function(){
//     clearInterval(id)
// },5000)

// Ek function bnana hai usme 1 number and 2 callback functions pass krne hia 
// function test(num, cb1, cb2) {}
// Agar number odd hai to cb1 function call krna hia otherwise cb2 call krna hai 

// function test(num1, cb1, cb2){
//     if(num1 % 2 !== 0 ){
//         cb1()
//     }
//     else {
//         cb2()
//     }
// }
// test(22,oddcallback,evencallback)

// function oddcallback(){
//     console.log("number is odd");
// }
// function evencallback(){
//     console.log("number is even");
// }


// Ek function bnana hai jise 3 arguments pass krne hain 
// function test(num1, num2, num3) {}

// Agar all 3 arguments undefined ni hai to ek function return krna hai jo max of 
// 3 numbers btayega 

// Otherwise ek function return krega jo only Hello World print krega

// function test(num1,num2,num3){
//     console.log(num1,num2,num3);
//     if(num1 !== undefined && num2 !== undefined && num3 !== undefined){
//         return function hello(a,b,c){
//             if(a >b && a > c){
//                 return a
//             }
//             else if(b > a && b > c){
//                 return b
//             }
//             else if(c > a && c > b){
//                 return c
//             }else {
//                 return "Both are equal"
//             }
//         }
//     }else {
//         return function (){
//             console.log("Hello");
//         }
//     }
// }
// console.log(test(1,2,3));

function calculateAge(birthyear) {
//   const currentYear = new Date().getFullYear();
  let age = 2023 - birthyear;
  return age;
}

// Example usage:
// const yearOfBirth = 1990;
let age = calculateAge(1981);
console.log("Age:", age);
