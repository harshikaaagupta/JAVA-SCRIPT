let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
if((num1 > num2) && (num1 > num3)){
    console.log(`{num1} is the largest.`);
} else if((num2 > num1) && (num2 > num3)){
    console.log(`${num2} is the largest number.`);
}else{
    console.log(`${num3} is the largest number.`);
}