document.addEventListener('DOMContentLoaded', () => {
    // Scroll animations for fade-in effects
    const sections = document.querySelectorAll('section');
    const projectCards = document.querySelectorAll('.project-card');
    const contactLinks = document.querySelectorAll('.contact-info a');
    
    // Fade-in effect for sections
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, {
        threshold: 0.3 // Trigger when 30% of element is visible
    });

    sections.forEach(section => fadeInObserver.observe(section));
    projectCards.forEach(card => fadeInObserver.observe(card));
    contactLinks.forEach(link => fadeInObserver.observe(link));
    
    // Scroll-to-section smooth scrolling
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
