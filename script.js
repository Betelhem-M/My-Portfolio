// Variable that stores "Web Developer" and "Web Designer"
const roles = ["Web Developer", "Web Designer"];

// Replace roles every 3 seconds
const typingElement = document.querySelector(".typing");
let roleIndex = 0;

typingElement.textContent = roles[roleIndex];

setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    typingElement.textContent = roles[roleIndex];
}, 3000);

// Smooth scroll for navigation links (header + sidebar)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
        // Close sidebar if open
        closeSidebar();
    });
});

// Hamburger & Sidebar toggle
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebarClose");
const overlay = document.getElementById("overlay");

function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
}

function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}

hamburger.addEventListener("click", openSidebar);
sidebarClose.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);
