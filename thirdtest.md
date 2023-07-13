### Third Assignment
`1. Using prompt ask user below questions and then print these values in console`
.What is your name
let yourName = prompt("what is your name")
console.log(yourName)
.What is your batch name
let betchName = prompt("What is your batch name")
console.log(betchName)
. What is your birth year
let berthYear = Number(prompt("What is your birth year"))
console.log(2023 - berthYear)
Now print name, batch name and age in the console. Let's say if birth year of the user is 1991 then output should be his/her current age 31 years

`2. Print numbers like 3, 6, 9, 12, 15 till number is less than 100`
for (let i = 3; i <= 100;i++){
if( i % 3 == 0 ){
    console.log(i)
}
}
`3. Difference between truthy and falsy values ?`
ans. truthy values:- veh value jiska answar True aata he truthy value kahlati he.
     example:- falsy value ke alawa sabhi true value hoti he.  
    falsy values:- veh value jiska answar false aata he falsy value kahlati he.
     example:- false, NaN, 0, undifined, null, ""




`5. Ask user a question "Do you want to study Nodejs"? `
If user click on OK button then print Yes else print No in the console
let isStudy = confirm("Do you want to study Nodejs")
if(isStudy){
    console.log("Yes")
}else{
    console.log("No");
}

`6. Take one number. If number is odd and less than 20 then in alert box show Yes and else show No in alert box.`

let i = 15
if(i % 2 == 1 && i < 20){
    alert("yes")
}
else{
    alert("no")
}

`7. If rating is 5 then print Excellent. If rating is 4 then print Good. If rating is 3 then print Average. If rating is 2 then print Poor. If rating is 1 then print Very Poor else print Invalid rating`

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

`{1 to 10
2 4 6 8 10 ...... 100
5 10 15 20 .... 50
50 45 40 ..... 5
1 to 100 loop number odd hai to hi print krna hai 
1 to 100 loop number even hai to hi print krna hai 
1 to 100 loop number agar 7 ka multpile hai to print krna hai 
* print krna hai 25 bar. Nested loop use krna hai 2 layers
* 125 print krna hai 3 layers 
agar number 5 ka multpile ya 8 ka multiple ho tbi print krna hai 1 se 100 ke bich me 5 8 10 15 16 20...}`









