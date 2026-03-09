const searchBar = document.getElementById("searchBar");
const posts = document.querySelectorAll(".post");

searchBar.addEventListener("keyup", () => {

let value = searchBar.value.toLowerCase();

posts.forEach(post => {

let text = post.innerText.toLowerCase();

post.style.display = text.includes(value) ? "block" : "none";

});

});


/* Dark Mode */

const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

});


/* Scroll reveal animation */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach(el => {

let windowHeight = window.innerHeight;

let top = el.getBoundingClientRect().top;

if(top < windowHeight - 100){

el.classList.add("show");

}

});

});