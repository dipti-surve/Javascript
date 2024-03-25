//LOOPS: Used to iterate a piece of code
// Syntax:   for(initialization; Condition; updation){
                     //do something
//              }     

for(let i=1; i<=20; i++){
    console.log(i);
}

for(let i=10; i>=1; i--){
    console.log(i)
}
//printing odd numbers
for(let i=1; i<=15; i=i+2){
    console.log(i);
}
//printing even numbers
for(let i=2; i<=20; i=i+2){
    console.log(i);
}

// // let n = prompt("write your number");

//nested loops
for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`)
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

// infinite loops: we should not use infinite loops, it occupies all memory of browser.it is harmful.
// for(let i=1; i>=0; i++){

// }
// for (let i=1;i<-5; i--){

// }for(let i=1; ; i++){

// }
/////////////////////////////////////////////////////////////
// while loop
// syntax: initialization
//        while(condition){
//         console.log();
//         updation
// }
// let i=1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

let guess = prompt("guess fav movie")
let favMovie = "avatar";
while(guess != favMovie){
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    guess = prompt("Wrong guess try again");
}
if(guess == favMovie){
    console.log("Congrats!")
}

////////////////////////////////////////////////////////////////////////////
//break keyword
let i = 1;
while(i<=5){
    if(i==3){
        break;
    }
    console.log(i);
    i++;
}

// Loops With Arrays
let fruit = ["orange","apple","banana","litchi","mango"];

for(i=0; i<fruit.length; i++){
    console.log(i, fruit[i]);
}

let hero = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder women", "flash"]
];
for(let i=0; i<hero.length; i++){
    console.log(i, hero[i], hero.length);
    for(let j=0; j<hero[i].length; j++){
        console.log(`j=${j}, ${hero[i][j]}`);
    }
}

let student = [ ["aman", 95], ["shradha", 94.4], ["karan", 100]];

for(let i=0; i<student.length; i++){
    console.log(i, student[i]);
    for(let j=0; j<student[i].length; j++){
        console.log( j, student[i][j]);
    }
}



//for of loop
let fruits = ["mango", "banana", "apple", "orange", "litchi"];
for(fruit of fruits){     //fruit is the on the spot variable we created 
    console.log(fruit);
}

for(char of "ArtWithDipti"){
    console.log(char);
}

let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder women", "flash"]
];

for(list of heroes){
    // console.log(avengers);
    for(hero of list){
        console.log(hero);
    }
}
