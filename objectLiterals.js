//object literals
const item = {
    price: 100.99,
    discount: 50,
    colors: ["red", "pink"]
};


const thread = {
    username:"@dipti_surve",
    content:"hello this is my latest post",
    likes: 25,
    reposts: 3,
    tags: ["@apnacollege", "@delta"]
};

//two ways to access object literals
//obj["key"] or obj.key
console.log(thread["likes"]);
console.log(thread.username);
console.log(thread.tags[0]);

let prop = "reposts";
console.log(thread[prop]);

//////////////////////////////////////////////////////////////////////
//Get Values 
//JS automatically converts objects keys to string. Even if we made the number as a key, the number will be converted to the string.
//but . operator does'nt do this where as [] operator does this
const obj = {
    1: "a",   //1 get converted to string, so it does'nt get index but,it converts 1 into the string and then matches the values
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
}
////////////////////////////////////////////////////////////////////////
//Add/Update/Delete Value
const student = {
    name: "dipti",
    age: 23,
    marks: 81.20,
    city: "mumbai"
};
console.log(student);

student.city = "Mahad";   //update the value of city
console.log(student.city);

student.gender = "female"; //Added a new value
console.log(student);

student.marks = "A";  //update value of marks from number to string
console.log(student);

student.marks = [58, 96, 57, 68];  //update the value of the marks from stringto array
console.log(student);

delete student.age; //deleted the key pair of object literals
console.log(student);

////////////////////////////////////////////////////////////////////////
//object of Object (Nesting of Object)
const classInfo  = {
    Sujal: {
        grade: "A",
        city: "Mahad"
    },
    Shraddha: {
        grade: "O",
        city: "Malad"
    },
    Akash: {
        grade: "A+",
        city: "Panvel"
    },
    Dipti: {
        grade: "O",
        city: "Kandivali"
    }

};
console.log(classInfo);
console.log(classInfo.Sujal.grade);

classInfo.Sujal.city = "mumbai"; //we can perform Add/Update/Get/Delete operations on nesting objects also
console.log(classInfo.Sujal);

/////////////////////////////////////////////////////////////////////////////////////////////
//Array of Objects

const classInformation = [
    {
        name:"Sujal",
        age:18,
        marks:78,
        city:"Goregaon"
    },
    {
        name:"Shraddha",
        age:25,
        marks:72,
        city:"Malad"
    },
    {
        name:"Akash",
        age:23,
        marks:71,
        city:"Panvel"
    },
    {
        name:"Dipti",
        age:21,
        marks:81,
        city:"Kandivali"
    }
];

console.log(classInformation[2]);

classInformation[2].marks = 80;  
console.log(classInformation[2]);

classInformation[2].marks = 80;      //update value
classInformation[2].gender = "male";  //added value
console.log(classInformation[2]);