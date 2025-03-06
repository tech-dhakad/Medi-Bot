// script.js

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input");
    const header = document.querySelector("header");
    const logo = document.querySelector(".logo img");
    const searchInput = document.querySelector(".searchbar input");


    // Smooth scrolling effect for navigation
    document.querySelectorAll("ul li a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector("main").scrollIntoView({ behavior: "smooth" });
        });
    });


    // Input focus effect
    input.addEventListener("focus", () => {
        input.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.7)";
    });

    input.addEventListener("blur", () => {
        input.style.boxShadow = "none";
    });

    // Navbar color change on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(0, 0, 0, 0.8)";
        } else {
            header.style.background = "rgba(0, 0, 0, 0.5)";
        }
    });
 // Interactive logo effect
 logo.addEventListener("mouseover", () => {
    document.body.style.background = "linear-gradient(135deg,hsl(301, 100.00%, 50.00%),hsl(0, 100.00%, 50.00%))";
});

logo.addEventListener("mouseleave", () => {
    document.body.style.background = "linear-gradient(135deg,rgb(255, 0, 166), #1e00ff)";
});
 
});
