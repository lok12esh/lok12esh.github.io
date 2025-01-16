// Intersection Observer to trigger section visibility
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Parallax effect for sections
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;

    document.querySelectorAll('section').forEach((section, index) => {
        const speed = index * 0.2; // Adjust the multiplier to control parallax speed
        section.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});