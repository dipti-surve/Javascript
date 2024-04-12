//The JavaScript Math object allows you to perform mathematical tasks on numbers.
//Unlike other objects, the Math object has no constructor.
//The Math object is static.
//All methods and properties can be used without creating a Math object first.
console.log(Math);
//Math Methods
//The syntax for Math any methods is : Math.method(number)

console.log(Math.abs(-12.5));  //gives absolute number

console.log(Math.pow(2, 5)); //gives power of the number  //same as a**b operator

console.log(Math.floor(12.9999999))  //gives round of value //nearest smallest integer value
console.log(Math.floor(-5.999)) //gives round of to the number which is less than the written number as -6 is less than -5

console.log(Math.ceil(7.121212)) ////gives round of value //nearest largest integer value
console.log(Math.ceil(-7.121212))//gives round of to the number which is greater than the written number as -7 is greater than -8

console.log(Math.random());   //gives any random mumber between 0 to 1, but 1 is exclusive

//////////////////////////////////////////////////////////
//printing Random integers from 1 to 10
let step1 = Math.random();
step2 = step1 * 10;
step3 =Math.floor(step2)
console.log(step3);

num = Math.floor(Math.random() * 10) + 1;  //all steps in one line
console.log(num);  

//printing Random integers from 1 to 100
let number = Math.floor(Math.random() * 100) + 1;
console.log(number);

//printing Random integers from 1 to 5
numb = Math.floor(Math.random() * 5)+1;
console.log(numb);

//printing Random integers from 21 to 25
let no = Math.floor(Math.random()*5) +20;
console.log(no);

//printing Random integers from 61 to 63
let n = Math.floor(Math.random()*3) +61;
console.log(n);

//guessing game

const max = prompt("Enter the Maximum number");
let randomNum = Math.floor(Math.random()*max);
const guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("You quit!");
        break;
    }
    if(guess == randomNum){
        console.log("Congratulations, You Win!");
        break;
    }else{
        const guess = prompt("You are wrong!guess again");
    }
}

//Create a program that generates a random number representing a dice roll.
let dice = Math.floor(Math.random()*6)+1;
console.log(dice);