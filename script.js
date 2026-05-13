// ====================
// Matrix Rain Effect
// ====================
function createMatrixRain() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const container = document.createElement('div');
    container.classList.add('matrix-bg');
    hero.insertBefore(container, hero.firstChild);

    const chars = 'TCPIPHTTPFTPSSH';
    const columnCount = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.classList.add('matrix-column');
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDuration = (Math.random() * 10 + 8) + 's';
        column.style.animationDelay = (Math.random() * 10) + 's';
        column.style.fontSize = (Math.random() * 10 + 10) + 'px';

        let randomChars = '';
        for (let j = 0; j < 30; j++) {
            randomChars += chars.charAt(Math.floor(Math.random() * chars.length)) + '<br>';
        }
        column.innerHTML = randomChars;
        container.appendChild(column);
    }
}
createMatrixRain();

// ====================
// Hero Borders
// ====================
function createHeroBorders() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    ['t', 'b', 'l', 'r'].forEach(pos => {
        const border = document.createElement('div');
        border.classList.add(`hero-border-${pos}`);
        hero.appendChild(border);
    });
}
createHeroBorders();

// ====================
// Header Scroll Effect
// ====================
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('header-scroll', window.scrollY > 50);
});

// ====================
// Mobile Menu
// ====================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('nav-active');
    document.body.style.overflow = navLinks.classList.contains('nav-active') ? 'hidden' : '';
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('nav-active');
        document.body.style.overflow = '';
    });
});

// ====================
// Active Nav Link on Scroll
// ====================
const sections = document.querySelectorAll('section[id]');
function highlightNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (link) {
            if (scrollY >= top && scrollY < top + height) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
}
window.addEventListener('scroll', highlightNav);
highlightNav();

// ====================
// Scroll Reveal Animations
// ====================
function addRevealClasses() {
    const selectors = [
        '.section-header', '.about-text', '.contact-info', '.skill-category',
        '.project-card', '.timeline-item', '.certification-card',
        '.achievement-item', '.training-item', '.article-card',
        '.contact-info-item', '.contact-form-container'
    ];

    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, i) => {
            if (!el.classList.contains('reveal')) {
                el.classList.add('reveal');
                el.classList.add(`reveal-delay-${Math.min((i % 5) + 1, 5)}`);
            }
        });
    });
}

// Add delay CSS dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .reveal-delay-1 { transition-delay: 0.1s; }
    .reveal-delay-2 { transition-delay: 0.2s; }
    .reveal-delay-3 { transition-delay: 0.3s; }
    .reveal-delay-4 { transition-delay: 0.4s; }
    .reveal-delay-5 { transition-delay: 0.5s; }
`;
document.head.appendChild(styleSheet);

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 60) {
            el.classList.add('revealed');
        }
    });
}

addRevealClasses();
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ====================
// Hero Floating Particles
// ====================
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const container = document.createElement('div');
    container.classList.add('hero-particles');
    hero.appendChild(container);

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 6) + 's';
        particle.style.animationDelay = (Math.random() * 6) + 's';
        const size = (Math.random() * 3 + 1) + 'px';
        particle.style.width = size;
        particle.style.height = size;

        if (Math.random() > 0.6) particle.style.background = 'var(--accent-color-2)';
        if (Math.random() > 0.9) particle.style.background = 'var(--accent-color-3)';

        container.appendChild(particle);
    }
}
createParticles();

// ====================
// Typing Effect
// ====================
function typeEffect() {
    const h2 = document.querySelector('.hero-text h2');
    if (!h2) return;
    const text = h2.textContent;
    h2.textContent = '';
    h2.style.opacity = '1';
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            h2.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 60);
}
window.addEventListener('load', () => setTimeout(typeEffect, 1000));

// ====================
// Hero Image Tilt Effect
// ====================
const heroImg = document.querySelector('.hero-image img');
if (heroImg) {
    const heroImageContainer = document.querySelector('.hero-image');
    heroImageContainer.addEventListener('mousemove', (e) => {
        const rect = heroImageContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        heroImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    heroImageContainer.addEventListener('mouseleave', () => {
        heroImg.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
}

// ====================
// Contact Form
// ====================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.style.opacity = '0.8';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '✓ Message Sent!';
            btn.style.opacity = '1';
            btn.style.background = 'linear-gradient(135deg, #00ff66, #00cc55)';
            btn.style.color = '#000';
            btn.style.borderColor = '#00ff66';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.color = '';
                btn.style.borderColor = '';
                btn.disabled = false;
                contactForm.reset();
            }, 2500);
        }, 1800);
    });
}

// ====================
// Smooth Scroll for Safari
// ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ====================
// Theme Toggle
// ====================
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const moon = themeToggle.querySelector('.fa-moon');
        const sun = themeToggle.querySelector('.fa-sun');
        moon.style.display = document.body.classList.contains('light-theme') ? 'none' : 'block';
        sun.style.display = document.body.classList.contains('light-theme') ? 'block' : 'none';
    });
}