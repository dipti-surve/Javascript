// //Template  Literals
// let a = 1;
// let b =5;
// // console.log("the sum of a+b is:" (a+b));
// console.log(`the sum of a+b is: ${a+b}`);   //this sentence have same meaning as above


// //truthy and falsy
// if(false){                                   //0, -0, On(BigInt value), null, undefined, NaN are the false values 
//     console.log("it has a false value");
// }else{
//     console.log("it has a true value");
// }

// if(true){                                   //everything else than false values are true
//     console.log("it has a true value");
// }else{
//     console.log("it has a false value");
// }

// //Alert
// alert("Something is wrong!");  //Alert Displays alert message on the page.
// //prompt
// let firstName = prompt("please enter your firstname");//prompt displays a doialog box that asks user for some input.
// let lastName = prompt("please enter your lastname");
// console.log(`Welcome ${firstName} ${lastName} to the dipti's palette!`);
// //
// let firstname = prompt("please enter your firstname");//prompt displays a doialog box that asks user for some input.
// let lastname = prompt("please enter your lastname");
// let msg = `Welcome ${firstname} ${lastname} to the dipti's palette!`;
// alert(msg);
// ///////////////////////
// console.error("this is an error message"); //to print error message
// console.warn("this is a warning message!");  //to print warning message

// /////////////////////////////////////////////////////////////////////////////////////
// //Dry Run : trying to solve the questions on paper

// //////////////////////////////////////////////////////////////////////////////////////////////
// //Scope in JS

// //Global Scope
// let sum = 54;               //this variable can be used aywhere

// //Function scope 
// function Calcavg(a, b, c){
//     let avg =(a+b+c)/3;     //this variable can't use outside of the function
//     console.log(avg);    
// }
// Calcavg(1 , 8 , 3);

// //block scope
// {
//     let a =25;               //for ex. in if-else,loops (only apply on let and const)
// }                      

// //Lexical Scope  (nested)
// //A variable defined outside a function can be accessible inside another function defined after the variavle declaration
// //but inner function declared values are not accessible in outer function
// function outerFunc() {
//     let x=5;
//     let y=6;
//     function innerFunc(){      //inner function scope in function scope
//         console.log(x);     //values declared in outer function are accessible inside the inner function 
//     }
//     innerFunc();
// }


//this Keyword
//"this" Keyword refers to an object that is executing the current piece of code
const student ={
    name: "dipti",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    }
}


//try catch statement
//The try statement allows you to define a block of code to be tested for errors while it is being executed
//The catch statement allows you to define a blockof code to be executed,if an erroe occurs in the try block
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
// let a =5;       //if a is defined already then it will execute and try catch won't work
try {
     console.log(a);
}
catch(e){
    console.log("caught an error");
    console.log(e);   //we can print error in this way
}

console.log("hello");
console.log("hello");
console.log("hello");

try {
    console.log(b);
}
catch(err){
   console.log("caught an error");
   console.log(err);   //we can print error in this way
}




//Destructuring: storing values of array into multiple variables
let names = ["tony", "steave", "peter", "xyz", "abc", "pyq"];
let[winner, runnerup, secondRunnerup , ...others] = names;
console.log(winner, runnerup, secondRunnerup, ...others);

//Destructing with objects
const students ={
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi","english", "math", "science"],
    username: "karan@123",
    password: "abcd"
}   

 let { username, password, city = "mumbai" } = students;  //setting default value of the city but it will have 2nd priority
 console.log(username, password, city);
///
let { username: user, password: secret } = students;    //searching username and password in student object and then storing value of username and password in another variable called "user" and "secret"
console.log(user, secret);