//Arrow functions
const sum = (a,b) => {
    console.log(a+b);
};
const cube = n => {  //parenthesis "()" are optional while using single argument in arrow function
    return n*n*n;
};
const pow = (a, b) =>{
    return a**b;
};
const hello = () => {
    console.log("hello world")
};

//implicit return in Arrow function
//in case of only "return the value", we can short this code more
const mul = (a,b) => (a*b);
                
const cubes = n => (n**3);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Set Timeout //inbuilt function
//setTimeout(function, timeout);//time(ms)
// console.log("hi there!")
// setTimeout( () => {
//     console.log("Art with Dipti");
// }, 4000) ;

// console.log("welome to");  //even if we delare setTimeout first ,the code will not stop which is declared after the settimeout functions

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Set Interval
// //setInterval(function, timeout)
// console.log("hello there!");

// let id = setInterval( () => {
//     console.log("Art with Dipti");
// }, 2000) ;

// setTimeout( () => {
//     clearInterval(id);
//     }, 8000) ;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//this with Arrow functions
//this keyword behave differently with arrowfunctions
//in function, scope -> this -> calling object
//in arrow function, lexical scope , parent -> call (arrow function ke liye wahi scope hoga jo parent ka scope hai)
let marks =56;
const student = {
    name: "aman",
    marks: 85,
    prop: this,
    getName: function(){       //for geName(), "this" is an student object
        console.log(this);     
        return this.name;
    },
    getMarks: () => {
        console.log(this);    //for geMarks(), "this" is an window object that is a parent object og the student object
      return this.marks;
    },
    getInfo: function() {
        setTimeout( () => {
                console.log(this); //student
            }, 4000) ;
    },
    getInfo1: function() {
        setTimeout( function() {
                console.log(this);   //window
            }, 4000) ;
    }
}





let sqr = (n) => (n**2);
console.log(sqr(5));


let id = setInterval(() =>{
console.log("Hello World")
}, 2000);

setTimeout(()=>{
    clearInterval(id);
}, 10000);





const arrayAverage = (arr) => {
    let total = 0;
      for(let number of arr){
        total += number;
      }
      
      return total/arr.length;
}

let arr = [10,10,10];
console.log(arrayAverage(arr));




let isEven = (n) =>{
    if(n%2==0){
        console.log(`${n} is an even number`);
    }else{
        console.log(`${n} is an odd number`)
    }
}

console.log(isEven(2));









