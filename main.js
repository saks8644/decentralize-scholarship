// Initialize particles.js (Background Animation)
document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles', {
        particles: {
            number: { value: 80 },
            color: { value: '#00bcd4' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 2 }
        }
    });

    // Start Marquee Animation
    initMarquee();
});

// Marquee Logic - Smooth Scrolling Text
function initMarquee() {
    const tickerContainer = document.querySelector('.animate-marquee');
    if (!tickerContainer) return;

    const content = Array.from(tickerContainer.children).map(node => node.outerHTML).join('');
    tickerContainer.innerHTML = content + content;  // Duplicate for smooth loop

    tickerContainer.style.display = 'flex';
    tickerContainer.style.animation = 'marqueeFlow 20s linear infinite';

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes marqueeFlow {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }
    `;
    document.head.appendChild(style);
}

// Responsive Navbar Toggle (optional for mobile)
const mobileNavToggle = document.getElementById('mobileNavToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileNavToggle && mobileMenu) {
    mobileNavToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Optional: Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });
});
