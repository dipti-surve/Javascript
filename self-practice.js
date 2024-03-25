// //Write a function reverseString that takes a string as input and returns the reverse of that string.

// let number = 30;
// if ((number%3===0) && (number%5===0)){
//     console.log("FizzBuzz");
// }else if(number%3 === 0){
//     console.log("Fizz");
// }else if(number%5 === 0){
//     console.log("Buzz");
// }else {
//     console.error(`${number} is not multiple by 3 or 5`)
// }


// let msg ="    help!";
// console.log(msg.trim().toUpperCase());

// let name = "ApnaCollege";
// console.log(name.slice(4).replace("l","t"));  //we can write replace method twice in a method chahining to replace the both "l" at once

// let  number = -8;
// if (number > 0){
//     console.log(`${number} is a positive number`);
// }else if (number < 0){
//     console.log(`${number} is a negative number`);
// }else{
//     console.log(`${number} = zero`);
// }

// let length = prompt("Enter the length of the rectangle");
// let width = prompt("Enter the width of the rectangle");
// let area = length*width;
// console.log(`Area of rectangle is ${area}`);


// let year = 2024;
// if (year%4 === 0){
//     console.log(`${year} is a leap year`);
// }else{
//     console.log(`${year} is not a leap year`);
// }

// let age = prompt("Enter your age");
// if(age>60){
//     console.log("You're senior Citizen");
// }else{
//     console.log("You're not a senior citizen");
// }

// let a = prompt("enter a number");
// let operation = prompt("enter the operator");
// let b = prompt("enter a number");
// let exp ;
// if (operation === (a+b)){
//     console.log();
// }
// console.log(a.ma)


// array
// practice question 1
// let months = ["january", "july", "march", "august"];
// console.log(months);
// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");
// console.log(months);

// //practice question 2
// let followers = ["sandhya", "megha", "shruti", "sanika"];
// let blocked = followers.shift();
// console.log(followers);
// console.log(blocked);

// practice question 3
// let Months = ["january", "july", "march", "august"];
// console.log(Months);
// console.log(Months.splice(0,2, "july", "june"));
// console.log(Months);

// practice question 4
// let lang = ["c", "c++", "html", "Javascript", "python", "java", "c#", "sql"];
// console.log(lang.reverse().indexOf("Javascript"));


// let week = ["mon","tues","thurs","fri","sat","sun"];
// week.pop();
// week.pop();
// console.log(week);

// week.shift();
// week.shift();
// console.log(week);


// let str = "";
// if(str == 0){
//     console.log("string is blank");
// }else{
//     console.log("string is not blank");
// }

// let string = "rtjejcvJHGVbbtyCGVHVf";
// let char = prompt("enter index");
// if(char == string[char].toLowerCase()){
//     console.log("string is lower");
// }else{
//     console.log("string is not lower");
// }

// let char = "    helloworld      "
// console.log(char.trim());

// let flower = ["lily", "sunflower", "rose"];
// let checkFlower = prompt("enter flower");
// if (checkFlower === (flower[0] || flower[1] || flower[2])){
//         console.log(`${checkFlower} exist in flower`);
// }else{
//     console.log(`${checkFlower} does not exist in flower`);
// }
// let arr = [1,8,6,6,1,7,2,8,3,7,1,8,1,8,2,5];
// console.log(arr);
// let num = prompt("enter the number you want to delete from the list");
// num = parseInt(num);
// for(i=0; i<arr.length; i++){
//     if(arr[i]==num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// let number=10;
// let count=0;
// let copy=number;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);hey
// }console.log(count);

let str = "       hello everyone, Dipti here!     ";

[ { "name": "Body Weight", "effective_date_time": 1710744126000, "value": "65", "uom": "kg", "status": "NORMAL", "minimum": 45, "maximum": 90 },
 { "name": "Body Height", "effective_date_time": 1710744126000, "value": "175", "uom": "cm", "status": "NORMAL", "minimum": 4, "maximum": 6 },
  { "name": "BMI", "effective_date_time": 1710744126000, "value": "21.22", "uom": "kg/m^2", "status": "NORMAL", "minimum": 0, "maximum": 0 } ]