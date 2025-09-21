//this keyword : refers to an object that is executing current piece of code
// const student={
//     name:"harshika",
//     age: 19,
//     eng:89,
//     math:90,
//     chem:95,
//     getAvg(){
//         let avg =(this.eng+this.math+this.chem)/3;
//         console.log(avg);
//     }
// }

// -----------------------------------------------------------------------------------------------------------------------------

//try & catch
//the try statement allows you to define a block of code to be tsted for errors while it is being executed.
//the catch statement allows you to define a block of code to be executed,if an error occurs in the try block.

// console.log("hello");
// console.log("hello");
// try{
//     console.log(a);
// } catch(e){
//     console.log("caught an error, a is not defined");
//     console.log(e);
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");

// -----------------------------------------------------------------------------------------------------------------------------

//Miscellaneous Topics

//Arrow Functions
const sum = (a,b) =>{
    console.log(a+b);
}

const cube =(n) =>{
    console.log(n**3);
}

//implicit return - to only return a value
const mul = (a,b)=>(
    a*b
);

//Set Timeout - setTimeout(function,timeout) (inbuilt function , and is a window object)

// console.log("hi there!");
// setTimeout( () => {
//     console.log("Apna College");
// }, 4000);
// console.log("Welcome to");

//Set Interval - setInterval(function,timeout)

// let id = setInterval(() =>{
//     console.log("Apna College")
// },2000);

// console.log(id);
// clearInterval(id);

// this with Arrow Functions

// const student={
//     name:"aman",
//     marks:95,
//     prop:this, //global scope
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
    // getMarks:() =>{
    //     console.log(this); //parent's scope
    //     return this.marks;
    // }
    // getInfo1: function(){
    //     setTimeout(() =>{
    //         console.log(this); //student
    //     }, 2000);
    // },
    // getInfo2: function(){
    //     setTimeout(function ()  {
    //         console.log(this); //window
    //     },2000);
    // }

// };

// -----------------------------------------------------------------------------------------------------------------------------

//Practice Questions
const square = (n) =>{
    return n*n;
}
console.log(square(8));

const sq = (n) =>(
    n**2
)
console.log(sq(9));


let id = setInterval(() =>{
    console.log("Hello World");
},2000);
setTimeout(() =>{
    clearInterval(id);
},10000);