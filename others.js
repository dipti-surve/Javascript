//Template  Literals
let a = 1;
let b =5;
// console.log("the sum of a+b is:" (a+b));
console.log(`the sum of a+b is: ${a+b}`);   //this sentence have same meaning as above


//truthy and falsy
if(false){                                   //0, -0, On(BigInt value), null, undefined, NaN are the false values 
    console.log("it has a false value");
}else{
    console.log("it has a true value");
}

if(true){                                   //everything else than false values are true
    console.log("it has a true value");
}else{
    console.log("it has a false value");
}

//Alert
alert("Something is wrong!");  //Alert Displays alert message on the page.
//prompt
let firstName = prompt("please enter your firstname");//prompt displays a doialog box that asks user for some input.
let lastName = prompt("please enter your lastname");
console.log(`Welcome ${firstName} ${lastName} to the dipti's palette!`);
//
let firstname = prompt("please enter your firstname");//prompt displays a doialog box that asks user for some input.
let lastname = prompt("please enter your lastname");
let msg = `Welcome ${firstname} ${lastname} to the dipti's palette!`;
alert(msg);
///////////////////////
console.error("this is an error message"); //to print error message
console.warn("this is a warning message!");  //to print warning message

/////////////////////////////////////////////////////////////////////////////////////
//Dry Run : trying to solve the questions on paper

//////////////////////////////////////////////////////////////////////////////////////////////
//Scope in JS

//Global Scope
let sum = 54;               //this variable can be used aywhere

//Function scope 
function Calcavg(a, b, c){
    let avg =(a+b+c)/3;     //this variable can't use outside of the function
    console.log(avg);    
}
Calcavg(1 , 8 , 3);

//block scope
{
    let a =25;               //for ex. in if-else,loops (only apply on let and const)
}                      

//Lexical Scope  (nested)
//A variable defined outside a function can be accessible inside another function defined after the variavle declaration
//but inner function declared values are not accessible in outer function
function outerFunc() {
    let x=5;
    let y=6;
    function innerFunc(){      //inner function scope in function scope
        console.log(x);     //values declared in outer function are accessible inside the inner function 
    }
    innerFunc();
}

