//Strings are immutable, when we use string methods that method just act like a new string  by performing action on main string , but the main string never change.

//TRIM METHOD
//trims the extra spaces 
 let password = prompt("Enter your password");
 let newPass = password.trim();
console.log(password);

//UPPERCASE & LOWERCASE METHOD
let name = "Tony stark";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
     
//INDEXOF METHOD 
//returns the the 1st idex of the passed argument
let str = "ilovecoding";        
console.log(str.indexOf("love"));   //1 bcz, love strats from l that is index 1.
console.log(str.indexOf("j"));      //-1 bcz, j is not found in string so it shows false value
console.log(str.indexOf("o"));      //2 bcz, index of o is 2


//SLICE METHOD
//returns a part of the original string as a new string.  (slice method performs same work as substring method do. but slice is direct method where as substring can be confusing)
let st = "iloveCoding";

console.log(st.slice(1,5));   //if we want to slice "love" from the string so indexOf "l" is 1 and indexOf last letter "e" is 4 so i'll write 5 as my end index.(i write 5 bcz ,end index is non inclusive).
console.log(st.slice(3));     //when we pass starting index  only, the method will assume string.length as a ending index.
console.log(st.slice(-3));   //when we pass negative number , then it will work as a [string.length-3].

//REPLACE METHOD.
// Searches a value in the string & returns a new string with the value replaced.
let newStr = "iloveCoding";
console.log(newStr);
console.log(newStr.replace("love", "do"));
let Newstr = "codingcodingcoding";
console.log(Newstr.replace("coding", "love"));     //replace method replaces the first occurance only

//repeat method
//returns a string with a number of copies of string
let fruit = "mango";
console.log(fruit.repeat(6))   //mango string will repeat 6 times

//METHOD CHAINING: we can use multiple methods in one line just by passing "." between all.
let string = "     hello     ";
console.log(string.toUpperCase().trim());     