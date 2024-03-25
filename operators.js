let a = 10;
let b = 2;


// //Arithemetic Operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);


// unary operators
console.log(++a);  //pre-increment
console.log(a++);  //post-increment
console.log(--a);  //pre-decrement
console.log(a--);  //post-decrement

//Assignment Operators
a+=b;
console.log(a);
b*=a;
console.log(b);

//comparison Operators
let age = 18;
console.log(age > 18); //greater than
console.log(age >= 18); //greater than equals to
console.log(age < 18);  //smaller than
console.log(age <= 18); //smaller than equals to

let n = 5;
let str = "5";
console.log(n==str); //equals to (Compares value not type)... answer will be true
console.log(n===str); //equals to (Compares both type and value)... answer will be false
console.log(n!=str); //not equals to ...answer will be false

//logical Operators
let numb = 12;
if ((numb%3 == 0) && ((numb+1 === 15 ) || (numb-1 === 11))){
    console.log("safe");
}else{
    console.log("unsafe");
}

