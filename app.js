// Imports removed for local compatibility

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Clear existing content
    app.innerHTML = '';

    // Render All Sections
    const html = `
        ${Components.renderHeader()}
        <main>
            ${Components.renderHero()}
            ${Components.renderProcess()}
            ${Components.renderProducts()}
            ${Components.renderImpact()}
            ${Components.renderBMC()}
            ${Components.renderShorts()}
            ${Components.renderRecipes()}
            ${Components.renderStories()}
            ${Components.renderTestimonials()}
            ${Components.renderNewsletter()}
        </main>
        ${Components.renderFooter()}
    `;

    app.innerHTML = html;

    // Initialize Scroll Header Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-bali-dark/90', 'shadow-lg');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('bg-bali-dark/90', 'shadow-lg');
            header.classList.add('bg-transparent');
        }
    });

    // Initialize Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animations to sections
    document.querySelectorAll('section > div').forEach(div => {
        div.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(div);
    });
});
