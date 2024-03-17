//Array(Data structure) is the linear collection of data.
//we can store different type of data in one array in javascript.
// ways of creating arrays
let marks = [99, 58, 76, 36, 82];
let students = ["shri", "ruth", "dipti", "prabhakar", "shruti"];
let info = ["shri", 25, 6.9 ]; //mixed array
let newArr = [];  //empty array

console.log(info[0]);  //printing 0th index of array.
console.log(info[0][2]); //printing 2nd index of 0th index element of array. 
console.log(info[0].length); //printing length of 0th index of array.
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Arrays are mutable .we can change the values in arrays
let fruits =["mango", "apple", "banana", "litchi"];
console.log(fruits);
fruits[2] = "papaya";
console.log(fruits); //it will show changed array
//we can //declare the value of index that does'nt exist in array yet.
fruits[8] = "peer";
console.log(fruits); 
console.log(fruits.length); //after declaring,the length will be extend till the declared value, and in between array element will be empty.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ARRAY METHODS
let cars = ["Audi", "BMW", "Maruti", "xuv"];

//Push method: add to end.
cars.push("Toyota");
console.log(cars);

//pop method: delete from end and returns it
console.log(cars.pop());
console.log(cars);

//unshift: add to start
cars.unshift("bugati");
console.log(cars);

//delete from start and returns it
console.log(cars.shift());
console.log(cars);

//indexOf method: returns index of something
let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf("blue"));   //it will print index of blue that is 2.
console.log(primary.indexOf("green"));  //green does not exist so it will print falsy value that is -1.
console.log(primary.indexOf("Yellow")); //Y is capital so it will print falsy value that is -1 as Javascript is case sensitive language.

//includes method: search for value

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//practice question 1
let months = ["january", "july", "march", "august"];
console.log(months);
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(months);

//practice question 2
let followers = ["sandhya", "megha", "shruti", "sanika"];
let blocked = followers.shift();
console.log(followers);
console.log(blocked);

