// Dropdown toggle functionality
function toggleDropdown(header) {
    const dropdownItem = header.parentElement;
    const isActive = dropdownItem.classList.contains('active');
    
    // Close all other dropdowns in the same section
    const section = dropdownItem.closest('section');
    const allDropdowns = section.querySelectorAll('.dropdown-item');
    allDropdowns.forEach(item => {
        if (item !== dropdownItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current dropdown
    if (isActive) {
        dropdownItem.classList.remove('active');
    } else {
        dropdownItem.classList.add('active');
    }
}

// Smooth scroll to section with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
});

// Add keyboard accessibility for dropdowns
document.querySelectorAll('.dropdown-header').forEach(header => {
    header.setAttribute('tabindex', '0');
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'false');
    
    header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown(header);
            const isActive = header.parentElement.classList.contains('active');
            header.setAttribute('aria-expanded', isActive);
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe dropdown items and project cards for fade-in effect
document.querySelectorAll('.dropdown-item, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (if you want to add hamburger menu later)
function createMobileMenu() {
    const nav = document.querySelector('nav ul');
    const width = window.innerWidth;
    
    if (width <= 768 && !document.querySelector('.mobile-toggle')) {
        // Add mobile menu functionality here if needed
    }
}

window.addEventListener('resize', createMobileMenu);
document.addEventListener('DOMContentLoaded', createMobileMenu);