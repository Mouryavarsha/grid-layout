let hamburger = document.querySelector("#hamburger");

let navbar = document.querySelector(".navbar");

let navlinks = document.querySelector(".navlinks");

let cross= document.querySelector("#cross");

hamburger.onclick=()=>{
    navbar.classList.toggle("active");
    
}
cross.onclick=()=>{
    navbar.classList.toggle("active");
}