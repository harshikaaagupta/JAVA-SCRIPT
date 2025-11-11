// let btns = document.querySelectorAll("button");


// btn.onclick = function() {
//     alert("Button was clicked!!");
// };

function sayHello(){
    alert("Hello!!");
}

function sayName(){
    alert("Good Morning");
}
// btn.onclick = sayHello;

// btn.onmouseenter = function(){
//     console.log("You entered a button");
// }
// for(btn of btns){
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
// }

let btn = document.querySelector("button");


btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColour();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.background = randomColor;

    console.log("Color updated");
});

function getRandomColour(){
  let red = Math.floor(Math.random() * 255);  
  let green = Math.floor(Math.random() * 255); 
  let black = Math.floor(Math.random() * 255); 

  let color = `rgb(${red}, ${green}, ${black})`;
  return color;
}