// Search articles
const searchBar = document.getElementById("searchBar");
const posts = document.querySelectorAll(".post");
searchBar.addEventListener("keyup", () => {
  const value = searchBar.value.toLowerCase();
  posts.forEach(post => {
    post.style.display = post.innerText.toLowerCase().includes(value) ? "block" : "none";
  });
});

// Dark mode toggle
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const top = el.getBoundingClientRect().top;
    if(top < windowHeight - 100){
      el.classList.add("show");
    }
  });
});