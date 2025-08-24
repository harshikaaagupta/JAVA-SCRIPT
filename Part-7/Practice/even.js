let n = prompt("Enter the number:");
let isEven = (n) =>{
    if(n % 2 ==0){
        return "Even";
    }else{
        return "Odd";
    }
};
console.log(isEven(n));