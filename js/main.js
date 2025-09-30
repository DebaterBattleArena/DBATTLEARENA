document.addEventListener('DOMContentLoaded', () => {
    // 1. Logika Toggle Menu Mobile (Hamburger)
    const menuToggleBtn = document.querySelector('.menu-toggle-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    if (menuToggleBtn && mobileNav) {
        menuToggleBtn.addEventListener('click', () => {
            const isExpanded = menuToggleBtn.getAttribute('aria-expanded') === 'true' || false;
            
            mobileNav.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            menuToggleBtn.setAttribute('aria-expanded', !isExpanded);
            menuToggleBtn.querySelector('i').classList.toggle('fa-bars');
            menuToggleBtn.querySelector('i').classList.toggle('fa-times');
        });

        // Logika Dropdown Submenu Mobile
        document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault(); 
                const targetId = toggle.getAttribute('data-target');
                const targetSubmenu = document.getElementById(targetId);

                toggle.classList.toggle('active');
                targetSubmenu.classList.toggle('active');
            });
        });
    }

    // 2. Logika Floating Ticket Banner
    const floatingBanner = document.querySelector('.floating-ticket-banner');
    const closeBannerBtn = document.querySelector('.close-banner-btn');
    
    if (closeBannerBtn && floatingBanner) {
        closeBannerBtn.addEventListener('click', () => {
            floatingBanner.style.display = 'none';
            localStorage.setItem('hideTicketBanner', 'true');
        });

        if (localStorage.getItem('hideTicketBanner') === 'true') {
            floatingBanner.style.display = 'none';
        }
    }


    // 3. Logika Countdown Timer (Hanya jika elemen ada di index.html)
    function updateCountdown() {
        const targetDate = new Date("October 4, 2025 08:00:00 GMT+0700").getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const pad = (num) => String(num).padStart(2, '0');

        const daysEl = document.getElementById('days');
        const hrsEl = document.getElementById('hrs');
        const minEl = document.getElementById('min');
        
        if (daysEl) daysEl.innerHTML = `${pad(days)} <span class="unit-label">DAYS</span>`;
        if (hrsEl) hrsEl.innerHTML = `${pad(hours)} <span class="unit-label">HRS</span>`;
        if (minEl) minEl.innerHTML = `${pad(minutes)} <span class="unit-label">MIN</span>`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            if (daysEl) daysEl.innerHTML = `00 <span class="unit-label">DAYS</span>`;
        }
    }

    if (document.getElementById('days')) {
        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
    }
});
