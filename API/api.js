// let url ="https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     console.log(res);
//    res.json().then((data) =>{
//     console.log((data));
//    } )
// })
// .catch((err) => {
//     console.log("ERROR - ", err);
// })

let url ="https://catfact.ninja/fact";

fetch(url)
.then((res) => {
    console.log(res);
   return  res.json();
})
.then((data)=> {
    console.log(data.fact);
    return fetch(url);
})
.then((res) => {
    console.log(res);
   return  res.json();
})
.then((data2)=>{
    console.log((data2))
})
.catch((err) => {
    console.log("ERROR - ", err);
});

console.log("hello world")