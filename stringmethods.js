//trim method
// let password = prompt("Enter your password");
// let newPass = password.trim();
// console.log(password);

//uppercase and lowercase
let name = "Tony stark";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

//indexOf 
let str = "ilovecoding";        
console.log(str.indexOf("love"));   //1 bcz, love strats from l that is index 1.
console.log(str.indexOf("j"));      //-1 bcz, j is not found in string so it shows false value
console.log(str.indexOf("o"));      //2 bcz, index of o is 2

//method chaining
let string = "     hello     ";
console.log(string.toUpperCase().trim());

//slice method 
//returns a part of the original string as a new string.
let st = "iloveCoding";

console.log(st.slice(1,5));   //if we want to slice "love" from the string so indexOf "l" is 1 and indexOf last letter "e" is 4 so i'll write 5 as my end index.(i write 5 bcz ,end index is non inclusive).
console.log(st.slice(3));     //when we pass starting index  only, the method will assume string.length as a ending index.
console.log(st.slice(-3));   //when we pass negative number , then it will work as a [string.length-3].