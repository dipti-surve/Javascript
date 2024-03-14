//Create a number variable num with some value.Now, print “good” if the number is divisible by 10 and print “bad” if it is not.
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

//
let month = "quarter3";
switch(month){
    case "quarter1" :
        console.log("january, february, march, april");
        break;
    case "quarter2" :
        console.log("may, june, july, august");
        break;
    case "quarter3" :
        console.log("september, october, november, december");
        break;
    default : 
    console.log("invalid quarter");
}

//A string is a golden string if it start swith the character ‘A’ or ‘a’ and has a total length greater than 5.For a given string print if it is golden or not.
let string = "apple";
if((string[0]==="a" || "A") && (string.length > 5)){
    console.log("golden string");
}else{
    console.log("normal string");
}

let largestnum = "999";


let numb1 = 45;
let numb2 = 55;
if((numb1.length) == (numb2.length)){
    console.log(`The last digit of the number is same`);
}else{
    console.log("no number is same");
}
