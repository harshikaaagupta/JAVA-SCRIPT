//Selecting Elements
//getElementById 
//getElementsByClassName -> Returns the elements as an HTML Collection or empty collection.

// let smallImages = document.getElementsByClassName("oldImg");
// for(let i = 0;i<smallImages.length ;i++){
//     console.dir(smallImages[i].src);

// }

//getElementsByTagName -> Returns the Elements as an HTML Collection or empty collection.


//--------------------------------------------------------------------------------------------------------------------------

//Query Selector -> Allows us to use any CSS selector.
// console.dir(document.querySelector("h1"));
// document.querySelectorAll("p"); 

//Manipulating Style
let links = document.querySelectorAll(".box a");
for(link of links){
    link.style.color = "purple";
}
// for(let i = 0;i<links.length;i++){
//     links[i].style.color = "yellow";
// }