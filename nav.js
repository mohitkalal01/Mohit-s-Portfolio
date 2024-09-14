const mobileMenu = document.getElementById('mobile-menu');
const navbarLinks = document.getElementById('navbar-links');

mobileMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


function downloadResume() {
    // alert('https://drive.google.com/file/d/1KNpJWGJjbiB5TzSet3hkEG6QE_GFVzMD/view?usp=sharing');
    window.open("https://drive.google.com/file/d/1KNpJWGJjbiB5TzSet3hkEG6QE_GFVzMD/view?usp=sharing", '_blank');
    // Replace the alert with your download logic
}

function visitGithub() {
    window.open('https://github.com/mohitkalal01', '_blank');
}


function openEmail() {
    window.location.href = "kalalmohit003@gmail.com", "_blank";
}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/mohit-kalal-389521217/", "_blank");
}

function openInstagram() {
    window.open("https://www.instagram.com/mohitkalal07/", "_blank");
}

function openWhatsApp() {
    window.open("https://wa.me/9119369801", "_blank");
}

// JavaScript can be used for interactive elements if needed
console.log("Page loaded");