// //Functions in JavaScript are blocks of code designed to perform a specific task. They can be defined once and reused multiple times.
// //Syntax of declaring function:
// //   function funcName(){
//     //do something
// //}
// //syntax of calling function:
// //funcName();console.log(${name}'s age is ${age});

// function hello() {
//     console.log("hello.. dipti here");
// }

// hello();   //call the function


// function printName(){
//     console.log("My Name is Dipti");
//     console.log("I'm a Web developer");
//     console.log("and Artist also");
// }
// printName();


// function print1to5() {
//     for(i=1; i<=5; i++){
//         console.log(i);
//     }
// }
// print1to5();


// function isAdultorNot() {
//     let age = 24;
//     if(age>=18){
//         console.log("candidate is adult");
//     }else{
//         console.log("candidate is not adult");
//     }
// }

// isAdultorNot();

// //creates a function that prints a poem
// function poem() {
//     console.log("Twinkle Twinkle little star");
//     console.log("How i wonder what you are");
// }

// poem();

// //create a function to roll a dice and always display the value of the dice
// function rollDice(){
//     let dice = Math.floor(Math.random()*6)+1;
//     console.log(dice);
// }

// rollDice();  

// ///////////////////////////////////////////////////////////////////////////
// //Functions with Arguments
// //syntax: function funcName(arg1,arg2...) { do something }
// //we write variables in the form of the arguments

// function printName(name){  //single argument
//     console.log(name);
// }

// printName("Dipti");
// printName("Sujal");
// printName("Akash");
// printName("Shraddha");

// function printInfo(name, age, city){  //multiple arguments
//     console.log(`${name}'s age is ${age} & she lives in ${city}`);
// }

// printInfo("Dipti", 21, "mumbai");
// printInfo("Shrddha", 25, "malad");
// printInfo(25);   //arg1 can be pass but other args cannot bcz passed values get stored orderwise

// function sum(a, b){
//     console.log(`sum of a and b = ${a+b}`);    
// }
// sum(12, 13);
// //printing avg
// function Calcavg(a, b, c){
//     let avg =(a+b+c)/3;
//     console.log(avg);    
// }
// Calcavg(1 , 8 , 3);

// //printing table
// function table(n){
//   for(let i=1; i<=10; i++){
//     console.log(`${i} => ${n*i}`);
//   }
// }
// table(8);

// //printing table with diff logic
// function Table(n){
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//       }
// }
// Table(2);

// //return Keyword =>used to return some value from the function
// //whatever you write after return , it will not exexute
// //return keyword returns single value only not multiple values ,but if we wantto return multiple values then the value should be stored in a array,object,etc.
// function add(a,b){
//     return a+b;
// }

// let addition = add(2,6); 


// console.log(add(add(1,2), 5)); //adding 3 sums

// function isAdult(age) {
//     if(age>=18){
//         return "adult";
//     }else{
//         return "not adult";
//     }
// }
// isAdult(15);

// function Sum(n){
//     let sum = 0;
//     for(i=1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(Sum(6));

// function bigStr(arr2){
//     let arr1 = ["orange", "pinapple","banana","apple"];
//     return arr1.concat(arr2);
// }

// console.log(bigStr([1,8,6,7,6,6]));

/////////////////////////////////////////////////////////////////////////////////////////////////
//Function Expressions
//we store  the function in variable//this functions are nameless

const SUM = function(a, b){
    return a+b;
}
console.log(SUM(1,3));

let Hello =function(){
    console.log("hello");
}
 
Hello();   //we call function by writing parenthesis next to the variable name

//High Order Functions
//A function that does one or both

//Takesone or multiple functions as arguments

let greet = function(){
    console.log("Hello");
}

function multipleGreet(func, n){   //High Order Function
     for(let i=1; i<=n; i++){
        func();
     }
}
multipleGreet(greet, 8);

//Returns a funtion

function oddOrEvenFactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request == "even"){
        return function(n) {
            console.log(n%2 == 0);
        }
    }else{
        console.log("wrong req");
    }
}
let request = "odd";
let func = oddOrEvenFactory(request);
func(2);