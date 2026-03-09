const searchBar = document.getElementById("searchBar");
const posts = document.querySelectorAll(".post");

searchBar.addEventListener("keyup", function(){

let value = searchBar.value.toLowerCase();

posts.forEach(post => {

let text = post.innerText.toLowerCase();

post.style.display = text.includes(value) ? "block" : "none";

});

});


const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", function(){

document.body.classList.toggle("dark");

});