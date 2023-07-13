// let str = "Wecode";
// let str1 = new String("Wecode");
// console.log(typeof str, typeof str1);
// console.log(typeof str, typeof str1.valueOf());
// let a = true;
// let b = new Boolean(true);
// console.log(typeof a, typeof b);
// console.log(typeof a, typeof b.valueOf());

// console.log("Wecode Academy".lastIndexOf("Academy"));
// console.log("Wecode Academy".indexOf("Academy"));

// console.log("Wecode Academy Academy".lastIndexOf("Academy"));
// console.log("Wecode Academy Academy".indexOf("Academy"));

// console.log("Wecode Academy Academy World Academy".lastIndexOf("Academy"));
// console.log("Wecode Academy Academy Academy".indexOf("Academy"));

// console.log("95818".padStart(10, "*"));
// //5  10  10-5 = 5 ***
// console.log("95818".padStart(8, "*"));
// //5  8  8-5 = 3 *
// console.log("95818".padStart(6, "*"));
// //5  6  6-5 = 1 *
// console.log("95818".padStart(5, "*"));
// //5  5  5-5 = 0
// console.log("95818".padStart(3, "*"));
// //5  5  5-5 = 0
// /////////////////////////////////////////
// console.log("95818".padEnd(10, "*"));
// //5  10  10-5 = 5 ***
// console.log("95818".padEnd(8, "*"));
// //5  8  8-5 = 3 *
// console.log("95818".padEnd(6, "*"));
// //5  6  6-5 = 1 *
// console.log("95818".padEnd(5, "*"));
// //5  5  5-5 = 0
// console.log("95818".padEnd(3, "*"));
// //5  5  5-5 = 0

// slice;

// console.log("Wecode Academy Jaipur 302012".substring(2));
// console.log("Wecode Academy Jaipur 302012".substr(2));
// //Both line 3 and 4 will give same output

// console.log("Wecode Academy".substring(2, 4));
// //start from 2 and take upto 4-1 3rd index - co
// console.log("Wecode Academy".substr(2, 4));
// //6 line 2 se start and take 4 characters - code

// console.log("Wecode Academy".substring(2, 6));
// console.log("Wecode Academy".substr(2, 6));

// console.log("Wecode Academy".substr(2));
// //Deprecate - Exists but not recommended for use
// console.log("Wecode Academy".substr(7));
// console.log("Wecode Academy Jaipur 302012".substr(2));

// console.log("Wecode Academy".substr(2, 4));
// console.log("Wecode Academy".substr(7, 3));
// console.log("Wecode Academy Jaipur 302012".substr(15, 6));

// console.log("Wecode Academy".substr(0, 2));

// console.log("Wecode Academy Jaipur 302012".slice(2));
// console.log("Wecode Academy".slice(2, 4));
// console.log("Wecode Academy".slice(2, 6));

// let user = prompt("what is the institute name?")
// console.log(user)
// let i = user.indexOf("war")
// console.log(i)
// // if(user.startsWith("academy") && (user.indexOf("academy" %2 == 1))){
// //     console.log("yes")
// // }
// // else if(user.startsWith("academy") && (user.indexOf("academy"%2 == 0))){
// //     console.log("yes even")
// // }
// // else if(user.endsWith("academy") && (user.indexOf("academy"%2 == 1))){
// //     console.log("no")
// // }
// // else if(user.endsWith("academy") && (user.indexOf("academy"%2 == 0))) {
// //     console.log("no even")
// // } 
// // else{
// //     console.log("ERROR")
// // }

// function max(num1,num2){
//     if(num1 > num2){
//         return num1
//     }else {
//         return num2
//     }
// }
// console.log(max(5,19));

// let maxNumber = function(num1,num2){
//     if(num1 > num2){
//         return num1
//     }else {
//         return num2
//     }
// }
// console.log(max(5,19));

// let max3 = (num1,num2) => {
//       if(num1 > num2){
//         return num1
//     }else {
//         return num2
//     }
// }
// console.log(max3(5,19));


// function sum(num1, num2){
//     return num1 + num2
// }
// console.log(sum(2,2));

// function oddEven(num1){
//     if(num1 % 2 === 0){
//         return `This number is even ${num1}`
//     }else{
//         return  `This number is odd `
//     }
// }
// console.log(oddEven(3));

// function table(num1){
//    for(let i = 1; i <= 10; i++){
//     console.log(num1 * i);
//    }
// }
// table(5)

// let table2 = (num1) => {
//      for(let i = 1; i <= 10; i++){
//     console.log(num1 * i);
//    }
// }
// table2(6)


// let table3 = function(num1){
//   for(let i = 1; i <= 10; i++){
//     console.log(num1 * i);
//    }   
// }
// table3(7)

// function test (cb){
//     cb(2)
// }
// test(function (num1){
//     if(num1 % 2 === 0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// })

// function sum(a,b,fn){            call back function
//     console.log(a+b);
//     fn(10)
// }
// function sayhellow(num1){
//     for(let i = 1; i <= num1; i++){
//         console.log(i*10);
//     }
// }

// sum(3,4,sayhellow)

// function calculate (cb){
   
//     cb(10,5)
// }
// calculate(sum)
// calculate(multiple)
// calculate(devide)
// calculate(subtract)

// function sum (a,b){
//     console.log(a+b);
// }
// function multiple(a,b){
//     console.log(a*b);
// }
// function devide(a,b){
//     console.log(a/b);
// }
// function subtract(a,b){
//     console.log(a-b);
// }

// function test(){
//     return function sum(a,b){
//         console.log(a+b);
//     }

// }
// let ans = test()
// console.log(ans);
// ans(2,3)

function operators(operator) {
  if (operator === 'addition') {
    return function(a, b) {
      return a + b;
    };
  } else if (operator === 'multiplication') {
    return function(a, b) {
      return a * b;
    };
  } else {
   return "no operator"
  }
}


let addition = operators('addition');
console.log(addition(2, 3)); 

let multiplication = operators('multiplication');
console.log(multiplication(2, 3));  
