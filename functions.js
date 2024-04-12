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



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Default Parameters
//giving a default value to the arguments
// function func(a, b=2) {
//     //do  something
// }
//we can make a single  parameter as default value (a = 4), or second parameter as a default value(a, b = 6), but we cannot passs default value on first parameter in case of two parameters 
function sum(a, b = 3){    //in case e pass only one value then it will ve a value of a , and by default 3 will be a default value of b. 
    return a+b;
}
console.log(sum(5));  //if we pass 2 parameters for  a and b  then b = 3 will not work , but if we pass single value then it will work as a default value of b


////////////////////////////////////////////////////////////////////////////////////
//Spread : Expands an iterable into multiple values
// function func(...arr){
//     //do something
// }

let arr =[1,5,9,3,7,1,6,7,4,3,6,6,0];
console.log(Math.min(...arr));   //it will go through the each value of an array
///
console.log(..."ArtWithDipti");

//spreadwith Array literals
let chars = [..."helloworld"];
console.log(chars);   //string characters will individually devide in characters
///
let Arr = [1,2,3,6,5,4,8];
let newArr = [...Arr];    //copy of Arr
console.log(newArr);
///
let odd =[1,3,5,7,9];
let even =[2,4,6,8,10];
let mix = [...even, ...odd];

//spread with object literals
let data = {
    email: "diptisurve@gmail.com",
    password: "password09"
}
let dataCopy = {...data, id:123, country:"India"};  //we can add additional details
console.log(dataCopy);

//spreading array in object

let integers = [1,8,5,7,6,9,4,5];
let obj = {...integers};     //it will get index no as a key nd array elements as a value in key value pair
console.log(obj);

let obj1 ={..."helloworld"};
console.log(obj1); 


//////////////////////////////////////////////////////////////////
//Rest:Allows a function to take an indefinite numer of arguments and bundke them=n in array

function min(msg, ...args){     //adding additional msg
    console.log(msg);
    return args.reduce((min, el)=>{
        if(min<el){
            return min;
        }else{
            return el;
        }
    })
}
console.log(min("hello",8,9,5,2,7,6,3));
//inbuilt arguments array
// function min(){
// console.log(arguments);     //collection of data , we cant use methods on argumments
// }
// min();