import { ATHLETES_DATA, RANKINGS_DATA } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Logika Toggle Menu Mobile (Hamburger) yang Ditingkatkan
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    if (menuToggleBtn && mobileMenu) {
        menuToggleBtn.addEventListener('click', () => {
            const isExpanded = menuToggleBtn.getAttribute('aria-expanded') === 'true';
            
            mobileMenu.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            menuToggleBtn.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // 2. Logika Dropdown Submenu Mobile (Versi Kompleks)
    document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetSubmenu = toggle.querySelector('.mobile-submenu');

            // Cek apakah submenu sudah terbuka
            const isOpen = toggle.classList.contains('active');

            // Tutup semua submenu lain, kecuali yang sedang diklik
            document.querySelectorAll('.mobile-dropdown-toggle.active').forEach(openToggle => {
                if (openToggle !== toggle) {
                    openToggle.classList.remove('active');
                    openToggle.querySelector('.mobile-submenu').style.maxHeight = null;
                }
            });

            // Toggle submenu yang diklik (jika belum terbuka)
            if (!isOpen) {
                toggle.classList.add('active');
                targetSubmenu.style.maxHeight = targetSubmenu.scrollHeight + "px";
            } else {
                 // Jika sudah terbuka dan diklik lagi, tutup
                toggle.classList.remove('active');
                targetSubmenu.style.maxHeight = null;
            }
        });
    });

    // 3. Logika Pencarian/Filter
    // ... (Ini akan dihandle di file spesifik seperti athletes.js)
});
