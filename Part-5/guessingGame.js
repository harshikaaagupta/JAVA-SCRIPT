const max = prompt("Enter the max number:");
const random =Math.floor(Math.random() * max)+1;
console.log(random);

let guess = prompt("Guess the number:");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("Correct");
    }else if(guess<random){
        console.log("Number is too small");
    }
    else{
        guess = prompt("Please try again:");
    }
}