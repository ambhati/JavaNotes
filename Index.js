//Question 1
// Print 1 to 100







// for(let i = 1; i <= 100; i++){
//     console.log(i);
// }

// Question 2
// Print all Odd numbers from 1 to 100


// for(let i = 1; i <= 100 ; i++){
//     if(i % 2 != 0){
//         console.log(i);
//     }
  
// }

// Question 3
// Print all Even numbers from 1 to 100


// for(let i = 1; i <= 100 ; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
  
// }

// Question 4
// Print all numbers which are divisible of 5 in 1 to 100


// for(let i = 1; i <= 100 ; i++){
//     if(i % 5 == 0 ){
//         console.log(i);
//     }
  
// }

// Question 5
// Print all numbers which are divisible of 5 and 15 in 1 to 100


// for(let i = 1; i <= 100 ; i++){
//     if(i % 5 == 0 && i % 15 == 0){
//         console.log(i);
//     }
  
// }

// Question 6
// Print 2's table

// for(let i = 2; i <= 100 ;i++){
//     if(i % 2 == 0){
//    console.log(i);
// }
  
// }

// Question 7
// Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times

// let ask = Number(prompt("How many times do you want to print Hello World"))
// for(let i = 1; i <= ask; i++){
//     console.log(i + " Hellow World");
// }



// Question 8
// Calculate sum of all numbers from 1 to 100

// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     sum += i // sum = sum + i
    
// }console.log(sum);

// Question 9
// Calculate sum of all odd numbers from 1 to 100

// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     if(i % 2 != 0){
//         sum = sum + i 
//     }
// }console.log("The sum of all odd numbers:",sum);

// Question 10
// Calculate sum of all even numbers from 1 to 100

// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     if(i % 2 == 0){
//         sum += i
        
//     }
// }console.log("sum of all even numbers ", sum);


// Question 11
// Print 1,2,4,8,16,32,64.......upto 2048

// for(let i = 1; i <= 2048; i = i * 2){
//     console.log(i);
// }

// Question 12
// Print

// 1,2,3,4,5,6,7,8,9,10
// 11,12,13,14,15,16,17,18,19,20
// .
// .
// ......................99,100


// for(let i = 1; i <= 100; i++){
//     document.write(i + "&nbsp")
//    if(i % 10 == 0){
//     document.write("<br>")
//    }
// }


// Question 13
// Print 1 to 100, but with a specific condition. If a number is divisible by both 3 and 5, 
//it logs "fizzbuzz" to the console instead of the number itself.

// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0 ){
//         console.log(i+"fizzbuzz");
//     }
// }



// Question 14
// print 10 table like this


// 2*1=2
// 2*2=4
// 2*3=6
// 2*4=8
// 2*5=10
// .
// .
// .
// 2*10=20


// for(let i = 1; i <= 50; i++){
//     document.write(i * 2 + "<br>")
    
// }
// let x = 10;
// for (i = 1; i <= 10; i = i + 1) {
//   console.log(x + "*" + i + "=" + x * i);
// }

// Question 15
// Run a loop from 1 to 50

// From 1 to 10 print "A"
// From 11 to 20 print "B"
// From 21 to 30 print "C"
// From 31 to 40 print "D"
// From 41 to 50 print "E"


// for(let i = 1; i <= 50; i++){
//     if(i <= 10 && i >= 1){
//         document.write(i + " A")
//         document.write("<br>")
//     }
//     else if(i <= 20 && i > 10){
//         document.write(i + " B")
//         document.write("<br>")
//     }
//     else if (i<=30 && i>20){
//         document.write(i + "C")
//         document.write( "<br>")

//     }
//     else if(i<=40 && i > 30){
//         document.write(i + "D")
//         document.write("<br>")

//     }
//     else{
//         document.write(i + "E")
//         document.write("<br>")

//     }
// }
// Question 16
// Run a loop from 50 to 1

// From 50 to 41 print "A"
// From 40 to 31 print "B"
// From 30 to 21 print "C"
// From 20 to 11 print "D"
// From 10 to 1 print "E"

// for(let i = 50; i >= 1; i--){
//     if(i <= 10 && i >= 1){
//         document.write(i + " E")
//         document.write("<br>")
//     }
//     else if(i <= 20 && i > 10){
//         document.write(i + " D")
//         document.write("<br>")
//     }
//     else if (i<=30 && i>20){
//         document.write(i + "C")
//         document.write( "<br>")

//     }
//     else if(i<=40 && i > 30){
//         document.write(i + "B")
//         document.write("<br>")

//     }
//     else{
//         document.write(i + "A")
//         document.write("<br>")

//     }
// }
// Question 17
// Print below series 5 25 125.. till number is less than equal to 10000

// for(let i = 5; i <= 10000; i *= 5){
//     console.log(i );
// }

// Question 18
// Print below series 3,6,9,12... till number is less than equal to 500

// for(let i = 3; i <= 500; i+= 3){
//     console.log(i);
// }

// Question 19
// print below series


// 120
// 221
// 322
// 423
// 524
// 625
// 726
// 827
// 928
// 1029

// for(let i = 120; i <= 1029; i += 101){
//     console.log(i);
// }

// Question 20
// print below series 100 95 90 85 80 ... till 0

// for(let i = 100; i >= 0; i -= 5){
//     console.log(i);
// }

// Question 21
//Number 70 is divisible by which numbers till 70? Find out and print those numbers

// let num = 70;
// for(let i = 7; i <= num; i++){
//     if(i % 7 === 0){
//         console.log(i);
//     }
// }


// while loop Exercise
// Question 22
// Write a while loop that logs the numbers 1 to 10 in the console.
// let i = 1
// while (i<=10){
//     console.log(i);
//     i++
// }

// Question 23
// Calculate sum of all numbers from 1 to 10

// let sum = 0;
// let i = 1;
// while(i<=10){
//     sum += i
//     i++
// }console.log(sum);

// Question 24
// Counting down from 10 to 1

// let sum = 0;
// let i = 10;
// while(i>=1){
//     sum += i
//     i--
// }console.log(sum);

// Question 25
// Print 2's table

// let i = 2;
// while(i<=100){
//     console.log(i);
//     i += 2
// }

// let x = 3;
// let i = 1;
// while(i<=10){
//     console.log(i * x);
//     i++
// }


// Question 26
// Calculate sum of all odd numbers from 1 to 100

// let i = 1;
// while(i<=100){
//     console.log(i);
//     i++
   
// }

// do while loop
// Question 27
// Write a do...while loop that logs the numbers 1 to 5 in the console

// Question 28
// Counting down from 10 to 1

// Question 29
// Calculate sum of all numbers from 1 to 10

// Question 30
// Print 2's table


// 1
// 11
// 111
// 1111
// 11111

// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= i; j++){
//        document.write("1");
//     }document.write("<br>")
// }

// ---

// ---

// ---

// for(let i = 1; i <= 3; i++){
//     for(let j = 1; j <= 3; j++){
//         document.write("- ")
//     }document.write("<br>")
// }

// ***
// ***
// ***
// ***

// for(let i = 1; i <= 4; i++){
//     for(let j = 1; j <= 3; j++){
//         document.write("* ")
//     }document.write("<br>")
// }

// 12345
// 1234
// 123
// 12
// 1

// for(let i = 5; i >= 1; i--){
//     for(let j = 1; j <= i; j++){
//         document.write(j)
//     }document.write("<br>")
// }

// 54321
// 5432
// 543
// 54
// 5

// for(let i = 1; i <= 5; i++){
//     for(let j = 5; j>= i; j--){
//         document.write(j)
//     }document.write("<br> ")
// }


// $$
// $$

// $$
// $$

// $$
// $$



// for(let i = 1; i <= 2; i++){
//     for(let j = 1; j <= 2; j++){
//         document.write("$")
        
       
//     } document.write("<br>")
//     for(let j = 1; j <= 2; j++){
//         document.write("$")
       
//     } document.write("<br>")
//     for(let j = 1; j <= 2; j++){
//         document.write("$")
       
//     } document.write("<br>")
// }


// 10987654321
// 987654321
// 87654321
// 7654321
// 654321
// 54321
// 4321
// 321
// 21
// 1
// for(let i = 10; i >= 1; i--){
//     for(let j = i; j>= 1; j--){
//         document.write(j)
//     }document.write("<br>")
// }


// for(let i = 1; i <= 5; i++){
//     for(let j = 4; j>=i; j-- ){
//         document.write("..")
//     }
//     for(let k = 1; k <= i; k++){
//         document.write("*")
//     }document.write("<br>")
// }document.write("<br>")


// for(let i = 1; i <= 5; i++){
//     for(let j = 4; j>=i; j-- ){
//         document.write("..")
//     }
//     for(let k = 1; k <= i; k++){
//         document.write("* ")
//     }document.write("<br>")
// }document.write("<br>")


// for(let i = 1; i <= 5; i++){
//     for(let j = 4; j>=i; j-- ){
//         document.write("..")
//     }
//     for(let k = 1; k <= i; k++){
//         document.write(i)
//     }document.write("<br>")
// }document.write("<br>")


// for(let i = 1; i <= 5; i++){
//     for(let j = 4; j>=i; j-- ){
//         document.write("..")
//     }
//     for(let k = 1; k <= i; k++){
//         document.write(k)
//     }document.write("<br>")
// }document.write("<br>")


// for(let i = 1; i <= 5; i++){
//     for(let j = 4; j>=i; j-- ){
//         document.write("..")
//     }
//     for(let k = 1; k <= i; k++){
//         document.write(i + " ")
//     }document.write("<br>")
// }document.write("<br>")

// for(let i = 1; i <= 5; i++){
//     for(let j = 4; j>=i; j-- ){
//         document.write("..")
//     }
//     for(let k = 1; k <= i; k++){
//         document.write(k + " ")
//     }document.write("<br>")
// }document.write("<br>")


// for(let i = 5; i >= 1; i--){
//     for(let j = 4; j>= i; j--){
//         document.write("..")
//     }
//     for(let k = 1; k <= i; k++){
//         document.write("*")
//     }document.write("<br>")
// }document.write("<br>")



// for(let i = 5; i >= 1; i--){
//     for(let j = 4; j>= i; j--){
//         document.write("..")
//     }
//     for(let k = 1; k <= i; k++){
//         document.write("* ")
//     }document.write("<br>")
// }document.write("<br>")



// for(let i = 5; i >= 1; i--){
//     for(let j = 4; j>= i; j--){
//         document.write("..")
//     }
//     for(let k = 1; k <= i; k++){
//         document.write(i + " ")
//     }document.write("<br>")
// }document.write("<br>")



// for(let i = 5; i >= 1; i--){
//     for(let j = 4; j>= i; j--){
//         document.write("..")
//     }
//     for(let k = i; k >= 1; k--){
//         document.write(k)
//     }document.write("<br>")
// }document.write("<br>")


// let n = 4;
// let z = 1;
// for(let i = 1; i <= 4; i++){
//     for (let j = 3; j >= i; j--){
//         document.write("..")
//     }
//     for(let k = 1; k <= z; k++){
//         document.write(k)
        
//      }z += 2
//      document.write("<br>")
// }document.write("<br>")

// var str = "Hello World"; 
// console.log(str.indexOf())


// let ab = "hello";
// function check() {
//     let a = 10;
//     console.log(ab);
// }
// check()

// Function Declaration
// function sum (a,b){
//     return a + b;
// }
// let ans = sum(10,20)
// console.log(ans);

// let str = "anwar mohammad" //litarial string
// let str1 = new String("mohammad anwar") //object string
// let str2 = new String("wecode academy") //object string
// console.log(typeof str);

// let str4 = str
// let str5 = "hello anwar"
// console.log(str4,str5);
// console.log(str4, str4.length);



// let myName = "anwar mohammad";
// let myAge = 23;
// let address = "jaipur"
// let mNumber = 999999999
// console.log("my name is"+" "
//  +myName + "my address is " + address + " "
//   + myAge +" "+ "my age is " + " " + "my mobile number is" +
//  " " + mNumber);

//  console.log( 
//     `my name is ${myName} and my age is ${2023-1999} 
//     and my address is ${address} and my mobile number is ${mNumber}`
//  );


//  console.log(20+10);
//  console.log(20+10+"10");
//  console.log(10+20+"20"+10);


//  let a = 10
//  let b = 20
//  let c = a+b
//  let d = 10
//  let e = 20
// let f = e+d
// console.log(c,f);


// function add(num1, num2){
//     console.log(num1+num2);
// }
// add(20,30)
// add(10,10)


// function printHelloWorld(){
//     console.log("hello world");
// }
// printHelloWorld(10,20)
// printHelloWorld()


// function oddEven(a){
//     if(a%2===0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// }
// oddEven(20)
// oddEven(15)

// function table(x){
//     for(let i = 1; i<=10; i++){
//         console.log(i*x);
//     }
// }
// table (10)

// function eat(a){
//     console.log("eating");
// }

// function run(){
//     console.log("running");
// }
// function walk(){
//     console.log("walking");
// }
// function sleep(){
//     console.log("sleeping");
// }

// sleep()
// run()
// walk()
// eat()


// function fullName(firstName,lastName){
//     console.log(firstName +" "+ lastName);
// }
// fullName("anwar","mohammad")


// function oneplusAvg(per1,per2){
//     return Math.round( 2+(per1 + per2)/2)
//     }
// console.log(oneplusAvg(9,10));

//         const sum = (a,b) => {
// return a+b
// } 
// console.log(sum(2,3));



// let sum = 0
// for(let i = 1; i <= 100; i++){
//         sum = sum + i
// }console.log(sum);


// let sum = 0;
// let astNumber = Number(prompt("Enter the number"))
// for(let i = 1; i <= astNumber; i++){
//         sum += i
// }document.write(sum)


// let str = prompt("what is your name")
// let large = str.toUpperCase();
// document.write(large)

// let str = " my name is anwar mohammad bhati from mokalpur  "
// // let value = str.length
// // let str2 = str.substring(3,14)
// // let str2 = str.substr(3,15)
// // let substr = str.indexOf("anwar")
// // let trimmed = str.trim()
// // let small = str.toUpperCase()
// let check = str.includes("Bhati")

// console.log(check);

// for( let num = 1; num <= 10; num++){
//     let multiple = num*2

//   console.log( `2*${num}=${multiple}`);
//   }



// for(let num = 1; num <= 5; num++){
//   blank = "";
//   for(let i = num; i <= 5; i++){
// blank += "*"
//   }
//   console.log(blank);
// }
// for(let num = 1; num <= 5; num++){
//   blank = "";
//   for(let i = 1; i <= num; i++){
// blank += "*"
//   }
//   console.log(blank);
// }


// function add (){                        //bina peramitter pass kiye arguments ka sum nikalna
//         if(arguments.length===0){
//                 console.log("no arguments passed !");
//         }else {
//                 let sum = 0;
//                 for(let i = 1; i < arguments.length; i++){
//                         sum = sum + arguments[i]
//                 }console.log(sum);
//         }
// }
// add()

// function multable(num1,num2){                
// for (i = 1; i <= 10; i++){
// console.log((num1 * num2));
//  }
// }
// multable(5,20)
// multable(10)
// multable(9)


// function oddEven(num){
//        if(num%2==0){
//        return "even"
//        }else{
//        return "odd"
//        }

// }
// oddEven(30)
// function oddEven(num1, num2){
//         if(num1 % 2 == 0){
//                 return "odd"
//         }else if (num2 % 2 != 0){
//                 return "even"
//         } else{
//                 return "equal"
//         }
// }
// console.log((oddEven(10,21))); 

// function oddEven(num1,){
//    for(i = 1; i <= num1; i++){
//    console.log("helloworld");
//    }
// }
// oddEven(20)



// Write a function named greet that takes a name as a
//  parameter and returns a greeting message. For example, 
//  if the input is "John," the function should return "Hello, John!".
// function greet(name){
//    return ` Hello ${name}`
// }
// console.log(greet("wecode academy"));


// Write a function 
// named multiply that takes two numbers as 
// parameters and returns their product.

// function multiply(num1,num2){
//     return num1 * num2
// }
// console.log(multiply(10,10));



// Write a function named isEven that takes a number
//  as a parameter and returns true if the number is even,
//   and false otherwise.


// function isEven(num1){
//     return num1 % 2 === 0
// }
// console.log(isEven(11 ));


// function isEven(number){
//     if(number % 2 === 0){
//         return true
//     }else {
//         return false
//     }
// }
// console.log(isEven(13));


// function isOdd(number){
//     return number % 2 != 0
// }
// console.log(isOdd(11));


// find max two number
// function maxNumber(num1,num2){
//     return Math.max(num1,num2)
// }
// console.log(maxNumber(10,12));

// function sum(math,eng,hindi){
//     let a = math + eng + hindi
//     return a;
// }

// function percntage(tt){
//     let per = tt/300 * 100
//     console.log(per);
// }
// let total = sum(60,60,60)
// percntage(total)


// function maxText(max1,max2){
//     if(max1 > max2){
//         return `${max1} is grather than in max2`
//     }
//     else{
//         return `${max2} is grather than in max1`
//     }
// }
// console.log(maxText(5,9));


