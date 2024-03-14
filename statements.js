//conditional statements
//if statement
let number = 17;
if (number >= 18){
    console.log("You can vote");
}

let firstName = "Dipti";
if(firstName == "Dipti"){
    console.log(`Welcome ${firstName}` );
}

//practice question of traffic light
let color = "green";
if(color == "red"){
    console.log("STOP");
}
if(color == "yellow"){
    console.log("GO SLOW");
}
if(color == "green"){
    console.log("GO");
}

//////////////////////////////////////////////////////////////////
//else-if statement
let  age = 16;
if(age > 18){
    console.log("You can vote");
}else if(age >= 18){
    console.log("you are 18 so you can vote");
}else if(age < 18){
    console.log("Sorry you cannot vote!");
}

//mark sheet using else if
let marks = 90;
if(marks >= 80){
    console.log("Your grade is A");
}else if(marks < 80 && marks >= 60){
    console.log("Your grade is B")
}else if(marks < 60 && marks >= 30){
    console.log("Your grade is C")
}else{
    console.log("You are Fail")
}

////////////////////////////////////////////////////////////////////
//if-else statement
let matter = "solid";
if (matter == "solid"){
    console.log("this is solid");
}else{
    console.log("The matter is unknown")
}

////////////////////////////////////////////////////////////////////
//practice question
let size = "M";
if(size == "XL"){
    console.log("Price of a Popcorn is Rs.250");
}else if(size == "L"){
    console.log("Price of a Popcorn is Rs.200");
}else if(size == "M"){
    console.log("Price of a Popcorn is Rs.100");
}else{
    console.log("Price of a Popcorn is Rs.50");
}
///////////////////////////////////////////////////////////////
//Nested if else statent
let mark = 50;
if (mark >= 33){
    console.log("pass");
    if(mark >= 60){
        console.log("You have achieve grade A");
    }else{
        console.log("You achieve grade B");
    }
}else{
    console.log("You are fail");
}
///////////////////////////////////////////////////////////
//practice questions
let thisString = "abhishek";
if((thisString.length > 3 ) && (thisString[0] === "a"))  {
    console.log(`${thisString} is a good string`);
}else{
    console.log(`${thisString} is a bad string`)
}

let numb = 12;
if ((numb%3 == 0) && ((numb+1 === 15 ) || (numb-1 === 11))){
    console.log("safe");
}else{
    console.log("unsafe");
}


//Switch case statement
let colour = "blue";
switch(colour){
    case "red" :
        console.log("Stop!");
        break;
    case "yellow" :
        console.log("Slow down!");
        break;
    case "green" :
        console.log("Go!");
        break;
    default :
    console.log("broken light");
}

let day = "sunday";
switch(day){
    case "monday" :
        console.log("its a Week Day");
        break;
    case "tuesday" :
        console.log("This is a week day");
        break;
    case "wednesday" :
        console.log("Its a week day");
        break;
    case "thursday" :
        console.log("its a week day");
        break;
    case "friday" :
        console.log("it's a week day");
        break;
    case "saturday" :
        console.log("it's a weekend");
        break;
    case "sunday" :
        console.log("it's a weekend");
        break;
} 

let Day = 1;
switch(Day){
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
    case 7 :
        console.log("Sunday");
        break;
    default :
    console.log("its not a day");
}
