// FAQ Toggle Functionality
function toggleFaq(element) {
    const faqItem = element.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');

    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function () {
    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add current page indicator to nav
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.style.color = 'var(--primary)';
            link.style.fontWeight = '600';
        }
    });

    // Initialize FAQ items (all closed by default)
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add animation on scroll for feature cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.5s, transform 0.5s';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards and other animated elements
    document.querySelectorAll('.feature-card, .step, .pricing-card').forEach(el => {
        observer.observe(el);
    });
});

// Mobile menu toggle (for future mobile navigation)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-open');
}

// Add external link indicators
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        if (!link.querySelector('.external-icon')) {
            link.innerHTML += ' <span class="external-icon">↗</span>';
        }
    });
});

// Copy email to clipboard functionality
function copyEmail(email) {
    navigator.clipboard.writeText(email).then(() => {
        // Show a temporary notification
        const notification = document.createElement('div');
        notification.textContent = 'Email copied to clipboard!';
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--success);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    });
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .external-icon {
        font-size: 0.8em;
        margin-left: 4px;
        opacity: 0.7;
    }
`;
document.head.appendChild(style);
