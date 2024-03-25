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

//includes method: includes method search if the element includes in a array or not
let rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log(rainbowColors.includes("indigo")); //returns true 
console.log(rainbowColors.includes("black")); //returns false

//concatenation method :merge arrays
let primaryColors = ["red", "green", "blue"];
let secondaryColors = ["orange", "pink", "yellow"];
console.log(primaryColors.concat(secondaryColors));  //concat does'nt change the original array.

//reverse method: reverse the array
console.log(primaryColors.reverse());  //reverse array reverse the arraya and it changes original array. 

//slice method: slice the part of array and prints that part
console.log(primaryColors.slice(1,3));   //does not change original array
console.log(primaryColors.slice());  //returns the whole array
console.log(primaryColors.slice(1)); //starts  from given index and returns till last
console.log(primaryColors.slice(-2)); //array.length-2, so it returns last 2 elements of array.
console.log(primaryColors.slice(6)); //in case of passing invalid parameters, it will return empty array

//splice method: removes/replace/add elements in place.
//splice changes original array
//prints the part that is spliced instead of original array
//syntax:  array.splice(startingIndex, deleteCount, item0...itemN)
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

console.log(colors.splice(4)); //deleted arrays from 4th index till last in original array and prints them
console.log(colors.splice(0, 1)); //delete the elements from 0th index to 1st.
console.log(colors.splice(0, 1, "black", "grey")); //first delete the elements from 0th index to 1st and replace that place with black and grey
console.log(colors.splice(3, 0, "red", "blue"));  //when we want to add in between items we can insert starting index and then 0 to delete nothing and then items

let brands = ["apple", "oppo", "vivo", "nothing", "redmi","realme", "oneplus"];
console.log(brands);
console.log(brands.splice(5));
console.log(brands.splice(1,2));
console.log(brands);
console.log(brands.splice(1,3, "poco", "iqoo"));
console.log(brands);
console.log(brands.splice(0,0, "oneplus", "realme"));
console.log(brands.splice(1,1, "google", "nothing"));
console.log(brands.splice(2,0, "moto", "micromax"));   
console.log(brands);


//sort method : sorts an array with ascending order or descending order as alphabates.
//sort method can only use in case of string or character ,it won't work on the number datatype
let names = ["shri", "ruth", "dipti", "prabhakar", "shruti"];
console.log(names);
console.log(names.sort());

let char = ["s", "r", "k", "d", "w", "g"];
console.log(char);
console.log(char.sort());

let numbers = [99, 89, 67, 42, 100];  //sorting does'nt work properly on number datatype
console.log(numbers);
console.log(numbers.sort());

//method chaining:we can use method chaing in array as well
let lang = ["c", "c++", "html", "Javascript", "python", "java", "c#", "sql"];
console.log(lang.reverse().indexOf("Javascript"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array Reference: address in memory
//when we try to compare the the values of arrays...it compares address of an array not valuethat's why it returns false


let arr1 = [1, 2];
let arr2 = [1, 2];

console.log(arr1 == arr2);  //returns false, bcz address of both arrays are different
console.log(arr1[1] == arr2[1]);  //retuns true bcz, indexvalues are same 

let arr = ["a", "b", "c"];
let arrCopy = arr;    //now, when we made changes in a arrCopy ,the changes will apply on arr also and vice versa.if we dont want to channges in both then we can assign same elements manually. 
console.log(arrCopy == arr);   //true,bcz address of arrCopy becomes same now.





///////////////////////////////////////////////////////////////////////////////////
//Constant Arrays
//we can perform methods and can make in original array ,but we cannot change whole array 
const a = [1, 2, 3];
// a = [5, 3, 9];  //it will throw the error


//Nested Arrays /multidimentional arrays

let num = [[1, 2], [3, 4], [5, 6]];
console.log(num);
console.log(num.length);
console.log(num[0].length);

let tictactoe = [["x",null, "o"], [null, "x", null], ["o", null, "x"]];
tictactoe[0][1] = "o";