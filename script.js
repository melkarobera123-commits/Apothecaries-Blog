// ===================== Dark Mode =====================
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  // Save preference in localStorage
  if(document.body.classList.contains("dark")){
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

// Load dark mode on page load
if(localStorage.getItem("darkMode") === "enabled"){
  document.body.classList.add("dark");
}

// ===================== Scroll Reveal =====================
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

// ===================== Search Articles (Homepage) =====================
const searchBar = document.getElementById("searchBar");
if(searchBar){
  const posts = document.querySelectorAll(".post");
  searchBar.addEventListener("keyup", () => {
    const value = searchBar.value.toLowerCase();
    posts.forEach(post => {
      post.style.display = post.innerText.toLowerCase().includes(value) ? "block" : "none";
    });
  });
}