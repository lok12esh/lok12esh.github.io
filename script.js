// Simple Scroll Animation on Scroll Event
document.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let windowHeight = window.innerHeight;

    sections.forEach(section => {
        let sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
    
});
// JavaScript to toggle the hamburger menu
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});