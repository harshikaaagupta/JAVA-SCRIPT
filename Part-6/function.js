function isPoem(){
    console.log("Twinkle twinkle little stars.");
}

function rollDice(){
    let num = Math.floor(Math.random()*6)+1;
    console.log(num);
}

function avg(num1,num2,num3){
    console.log((num1+num2+num3)/3);
}

function multiply(n){
    for(let i = 1;i<=10;i++){
        console.log(`${n} x ${i} = ${n*i}`);
    }
}

let s = 0;
function sum(n){
    for(let i = 1;i<=n;i++){
        s = s+i;
    }
    return s;
}

let str=["a","b","c","d","e"];
let strr = " ";
function concat(str){
    for(let i = 0;i<str.length;i++){
        strr = strr + str[i];
    }
    return strr;
}
console.log(concat(str));