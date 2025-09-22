// Array Methods

//-------------------------------------------------------------------------------------------------------

// forEach

// let arr =[1,2,3,4,5];
// arr.forEach((el) =>{
//     console.log(el);
// });
// arr.forEach(function(el){
//     console.log(el);
// });
// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print);

let students =[{           //for objects
    name:"Harshika",
    marks:98
},{
    name:"Harsh",
    marks:95.8
},{
    name:"Kartik",
    marks:97
}];
// arr.forEach((student) =>{
//     console.log(student.marks);
// })

//-------------------------------------------------------------------------------------------------------

//Map  
//elements are mapped and a new array is formed.
// let num = [1,2,3,4];
// let double = num.map(function(el){
//     return el**2;
// });

let gpa = students.map((el) =>{
    return el.marks/10;
});

//-------------------------------------------------------------------------------------------------------

//Filter
//if the callback gives true in the output the element is added in our array.

// let nums =[2,4,1,5,6,7,8,9];
// let even = nums.filter((num) =>(
//     num%2 == 0
// ));

//-------------------------------------------------------------------------------------------------------

//Every
//Returns true if every element of array gives true for some function.Else returns false.

// let nums =[2,4];
// let arr = nums.every((el) => (el%2 == 0)); // true

//-------------------------------------------------------------------------------------------------------

// Reduce -> Reduces the array to a single value.
// arr.reduce(reducer function with 2 variables for(accumulator , element));

[1,2,3,4].reduce((res,el) => (res+el));

//Finding maximum in an array

// let nums =[2,3,4,5,3,4,7,8,1,2];
// let result = nums.reduce((max,el) =>{
//     if(el >max){
//         return el;
//     } else{
//         return max;
//     }
// });
// console.log(result);

//-------------------------------------------------------------------------------------------------------
// let n = [10,20,30,40,50].every((el) => (el%10 == 0));

let num = [1,3,4,2,5,6,7,8,3];
let result = num.reduce((min,el) =>{
    if(el > min){
        return min;
    } else{
        return el;
    }
});
console.log(result);