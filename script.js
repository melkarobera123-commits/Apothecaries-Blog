﻿// ===================== Dark Mode =====================
const toggle = document.getElementById("darkToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
}

if (localStorage.getItem("darkMode") === "enabled") {
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

// ===================== Reading Progress =====================
const progressBar = document.querySelector(".reading-progress span");
if (progressBar) {
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  };

  window.addEventListener("scroll", updateProgress);
  window.addEventListener("resize", updateProgress);
  updateProgress();
}

// ===================== Section Highlighting =====================
const tocLinks = document.querySelectorAll(".toc a[data-target]");
const tocTargets = Array.from(tocLinks)
  .map(link => document.getElementById(link.dataset.target))
  .filter(Boolean);

if (tocLinks.length && tocTargets.length) {
  const activateLink = (id) => {
    tocLinks.forEach(link => {
      const isActive = link.dataset.target === id;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activateLink(entry.target.id);
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });

  tocTargets.forEach(section => observer.observe(section));
}

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

// ===================== Newsletter Subscription =====================
const newsletterForm = document.querySelector(".newsletter");
if (newsletterForm) {
  const newsletterButton = newsletterForm.querySelector("button");
  const newsletterInput = newsletterForm.querySelector("input[type='email']");

  newsletterButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    const email = newsletterInput.value;
    if (email && email.includes("@")) {
      alert(`Thank you for subscribing with ${email}! You are now part of the Apothecaries Circle.`);
      newsletterInput.value = ""; // Clear the input
    } else {
      alert("Please enter a valid email address to subscribe.");
    }
  });
}
