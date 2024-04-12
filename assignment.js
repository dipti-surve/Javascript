// //Create a number variable num with some value.Now, print “good” if the number is divisible by 10 and print “bad” if it is not.
// let num = 80;
// if(num%10 == 0){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// //Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert(by substituting their name & age): name is age years old.
// let name = prompt("what's your name?");
// let age = prompt("What's your age?");
// let msg = `${name} is ${age} years old.`;
// alert(msg);

// //
// let month = "quarter3";
// switch(month){
//     case "quarter1" :
//         console.log("january, february, march, april");
//         break;
//     case "quarter2" :
//         console.log("may, june, july, august");
//         break;
//     case "quarter3" :
//         console.log("september, october, november, december");
//         break;
//     default : 
//     console.log("invalid quarter");
// }

// //A string is a golden string if it start swith the character ‘A’ or ‘a’ and has a total length greater than 5.For a given string print if it is golden or not.
// let string = "apple";
// if((string[0]==="a" || "A") && (string.length > 5)){
//     console.log("golden string");
// }else{
//     console.log("normal string");
// }

// let largestnum = "999";


// let numb1 = 45;
// let numb2 = 55;
// if((numb1.length) == (numb2.length)){
//     console.log(`The last digit of the number is same`);
// }else{
//     console.log("no number is same");
// }



// //Create a program that generates a random number representing a dice roll.
// let dice = Math.floor(Math.random()*6)+1;
// console.log(dice);

// //Create an object representing a car that stores the following properties for the car: name, model, color. Print the car’s name.

// const car = {
//     name: "bugati",
//     model: "chiron",
//     color: "black"
// }
// console.log(car.name);

// //Create an object Person with their name, age, and city.
// //Edit their city's original value to change it to "New York".
// //Add a new property country and set it to the United States.

// const person = {
//     name:"mahendra",
//     age:47,
//     city:"mahad"
// }
// console.log(person);
// person.city = "New York";
// person.country = "United State";
// console.log(person);

// function arr(arr1, n){
//       for(let i=0; i<arr1.length; i++){
//         if(arr1[i] > n){
//             console.log(arr1[i]);
//         }
//       }
// }

// arr([1,5,7,2,10,18], 2);


// str = "ilovecoding"
// function unqChar(str, SI, EI){
//       console.log(str.slice(SI, EI));
// }

// unqChar(str, 1,11);


// let country = ["Australia","Germany","United States of America"];
// function getLongestCountry(country){
//     let ansIndex = 0;
//     for(let i=0; i<country.length; i++){
//         let ansLen = country[ansIndex].length;
//         let currLen = country[i].length;
//         if(currLen > ansLen){
//             ansIndex = i;
//         }
//     }
//     return country[ansIndex];
// }

// getLongestCountry(country);




// function getNoOfVowels(str){
//    for(let i=0; i<=str.length; i++ ){
//     if(str.charAt(i) == "a" ||str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u"){
//         console.log(this.str[i]);
//     }

//    }
//    return str[i];
// }
// const str= "apnacollege";



// function random(S,E){
//     let diff = E - S;
//     let num = Math.floor(Math.random()*diff) +S;
//     return num;
// }
// console.log(random(5,10));

let arr = [1,5,8,6,7,4,3,4];
let square = arr.map((num)=>num*num);
console.log(square);

let sum = arr.reduce((sum, el)=>{
    return sum+el;
})
console.log(sum);

let avg = sum/arr.length ;
console.log(avg);


////
let Arr = [1,5,3,6,3,2];
let newArr = Arr.map((el)=>{
    return el+5;
});
console.log(newArr);

////
let names = ["tony", "ruru", "piyush", "aakriti"];
let newNames = names.forEach((el)=>{
    console.log(el.toUpperCase());
});

////
let array = [8,5,6,9,1,2]
function doubleAndReturnArgs(array, n){
    let newArray = [...array];
    return newArray;
}
console.log(doubleAndReturnArgs(array));

///
let obj1 ={
    name:"Shraddha",
    age:25,
    marks:72
    
};
let obj2 ={
    grade: "O",
    city:"Malad"
};