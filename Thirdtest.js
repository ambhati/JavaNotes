"use strict"
//1. Using prompt ask user below questions and then print these values in console
.What is your name
let yourName = prompt("what is your name")
console.log(yourName)
// .What is your batch name
let betchName = prompt("What is your batch name")
console.log(betchName)
//. What is your birth year
let berthYear = Number(prompt("What is your birth year"))
console.log(2023 - berthYear)
//Now print name, batch name and age in the console. Let's say if birth year of the user is 1991 then output should be his/her current age 31 years

//2. Print numbers like 3, 6, 9, 12, 15 till number is less than 100
for (let i = 3; i <= 100;i++){
if( i % 3 == 0 ){
    console.log(i)
}
}
//3. Difference between truthy and falsy values ?



//5. Ask user a question "Do you want to study Nodejs"? 
//If user click on OK button then print Yes else print No in the console
let isStudy = confirm("Do you want to study Nodejs")
if(isStudy){
    console.log("Yes")
}else{
    console.log("No");
}

let i = 15
if(i % 2 == 1 && i < 20){
    alert("yes")
}
else{
    alert("no")
}

let rating = 2
if(rating == 5){
    console.log("Excellent")
}else if (rating == 4){
    console.log("Good");
}else if (rating == 3){
    console.log("Average");
}else if (rating == 2){
    console.log("Poor");
}else {
    console.log("Very Poor");
}

for (let i = 1; i<=10; i++){
    console.log(i);
}

for (let i = 2; i<=100; i= i+2){
    console.log(i);
}

for (let i = 5; i <= 50; i = i + 5){
    console.log(i);
}

for ( let i = 50; i>=5; i = i-5){
    console.log(i);
}

for (let i = 1; i<=100; i++){
  if(i%2==0){
    console.log("even");
  }
}

for (let i = 1; i<=100; i++){
    if(i%7==0){
      console.log(i + "hi");
    }
  }

for (let i = 1; i<=100; i++){
    if(i%5==0||i%8==0){
      console.log(i);
    }
  }

for (let i = 1; i<=5; i++){
    for(let j = 1; j<=5; j++){
        console.log("j");
    }
}

for (let i = 1; i <= 5; i++){
    for(let j = 1; j <= 5; j++){
        for(let k = 1; k <= 5; k++){
            console.log("k");
        }
    }
}







