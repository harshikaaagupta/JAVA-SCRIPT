let start = prompt("Enter the starting range:");
let end = prompt("Enter the ending range:");
function randomRange(start,end){
    let diff = end-start;
    let num = Math.floor(Math.random()*diff)+1;
    console.log(num);
}
randomRange(start,end);