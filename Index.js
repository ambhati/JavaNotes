// let i = 10
// let str = "anwar"
// let bool = true
// let Myage = "100"
// // number to string
// console.log(i,String(i)) //number to string
// console.log(i, new String(i)) //number to string
// console.log(i, i.toString(i)) //number to string

//const { log } = require("console")

//const { log } = require("console")

// //string to number
// console.log(str, Number(str))
// console.log(Myage, Number(Myage))
// console.log(Myage, Number(Myage))

// // boolean to number
// console.log(false, String(false))
// console.log(true, String(true))
// console.log(false, Number(false))
// console.log(true, Number(true))
// console.log("anwar", Boolean("anwar"))
// console.log(Boolean (undefined))
// console.log(Boolean(NaN))
// console.log(Boolean(false))
// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean(null))
// console.log(Boolean("anwar"))

// //autometiv type conversion
// console.log("20"-10)
// console.log(10-false)
// console.log(5+true)

// let mark = 28(
    
let mark =Number(prompt("what gain your number "))
if(mark > 75){
   console.log("Distinction")
}else if (mark >= 60 && mark <=75 ){
    console.log("First Division")
}else if (mark >= 50 && mark <= 60){
    console.log("Second Division")
}else if (mark >=40 && mark <=50 ){
    console.log("Third Division")
}else if (mark >=33 && mark <=40){
    console.log("Pass")
}else if (mark < 33){
    console.log("Fail")
}else{
    console.log("enter your valid number");
}


let age = Number(prompt("What is your current age"))
if (age > 55 && age <=90){
    console.log("Old Age")
}else if (age >= 25 && age <=55){
    console.log("Adulthood")
}else if ( age >=18 && age <= 25){
    console.log(" Adolescence")
}else if (age >= 5 && age <= 12){
    console.log("Childhood")
}else if (age <= 5){
    console.log("Infancy")
}else {
    console.log("enter your valid age");
}

// ternery opreter   ? 
// if else if els

// condition ? if : else
let mno = 22
mno %2 == 0 ? console.log("even") : console.log("odd"); 
let mod = 22
20%2==0? console.log("Even"): console.log("Odd")
67%2===0? console.log("Even"): console.log("Odd")