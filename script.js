document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("nav ul");
    const header = document.querySelector("header");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-barGo");
        hamburger.querySelector("#ham").classList.toggle("hidden");
        hamburger.querySelector("#cross").classList.toggle("hidden");

        // Toggle a class on the header to hide/show it
        header.classList.toggle("hide-header");
    });
});

document.querySelector("#cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-bar").classList.toggle("nav-barGo");
    if (document.querySelector(".nav-bar").classList.contains("nav-barGo")) {
        document.querySelector("#ham").style.display = "inline";
        document.querySelector("#cross").style.display = "none";
    } else {
        document.querySelector("#ham").style.display = "none";
        setTimeout(() => {
            document.querySelector("#cross").style.display = "inline";
        }, 300);
    }
});
