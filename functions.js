//Functions in JavaScript are blocks of code designed to perform a specific task. They can be defined once and reused multiple times.
//Syntax of declaring function:
//   function funcName(){
    //do something
//}
//syntax of calling function:
//funcName();console.log(${name}'s age is ${age});

function hello() {
    console.log("hello.. dipti here");
}

hello();   //call the function


function printName(){
    console.log("My Name is Dipti");
    console.log("I'm a Web developer");
    console.log("and Artist also");
}
printName();


function print1to5() {
    for(i=1; i<=5; i++){
        console.log(i);
    }
}
print1to5();


function isAdultorNot() {
    let age = 24;
    if(age>=18){
        console.log("candidate is adult");
    }else{
        console.log("candidate is not adult");
    }
}

isAdultorNot();

//creates a function that prints a poem
function poem() {
    console.log("Twinkle Twinkle little star");
    console.log("How i wonder what you are");
}

poem();

//create a function to roll a dice and always display the value of the dice
function rollDice(){
    let dice = Math.floor(Math.random()*6)+1;
    console.log(dice);
}

rollDice();  

///////////////////////////////////////////////////////////////////////////
//Functions with Arguments
//syntax: function funcName(arg1,arg2...) { do something }
//we write variables in the form of the arguments

function printName(name){  //single argument
    console.log(name);
}

printName("Dipti");
printName("Sujal");
printName("Akash");
printName("Shraddha");

function printInfo(name, age, city){  //multiple arguments
    console.log(`${name}'s age is ${age} & she lives in ${city}`);
}

printInfo("Dipti", 21, "mumbai");
printInfo("Shrddha", 25, "malad");
printInfo(25);   //arg1 can be pass but other args cannot bcz passed values get stored orderwise

function sum(a, b){
    console.log(`sum of a and b = ${a+b}`);    
}
sum(12, 13);

function Calcavg(a, b, c){
    let avg =(a+b+c)/3;
    console.log(avg);    
}
Calcavg(1 , 8 , 3);

function table(n){
  for(let i=1; i<=10; i++){
    console.log(`${i} => ${n*i}`);
  }
}
table(8);

