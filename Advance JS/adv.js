//following is the callback hell example
// function savtoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;

//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
   
// }
// savtoDb("this is my data", ()=>{
//     console.log(`status: "success"`);
//     savtoDb("this is my data",()=>{
//         console.log(`status: "success2"`);
//         savtoDb("this is my data",()=>{
//             console.log(`status: "success3"`);
//         }, ()=>{
//             console.log(`status: "fail3"`);
//         });
//     }, ()=>{
//         console.log(`status: "fail2"`);
//     });
// }, ()=>{
//     console.log(`status: "fail"`)
// });

//how can we simplify the above code using promises:
//Promises:  The promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value
//resolve:"success" & reject:"failure"
//promise states: pending, rejected, fulfilled

function savtoDb(data){
    return new Promise((resolve, rejected)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("success: data was saved");
        }else{
            rejected("failure: weak connection");
        }
    }) 
}

savtoDb("art with dipti");

