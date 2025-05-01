document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Toggle mobile navigation
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    mobileNavToggle.addEventListener("click", function() {
        navMenu.classList.toggle('active');
    });

    // Form submission handling (example)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            // Handle form submission logic here
            alert("Form submitted!");
        });
    }
        contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = contactForm.querySelector('input[name="name"]').value.trim();
        const email = contactForm.querySelector('input[name="email"]').value.trim();
        const message = contactForm.querySelector('textarea[name="message"]').value.trim();
    
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }
        alert("Form submitted!");
    });
});