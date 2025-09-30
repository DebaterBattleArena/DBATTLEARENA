import { ATHLETES_DATA, RANKINGS_DATA } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LOGIKA TOGGLE MENU MOBILE (HAMBURGER) ---
    const menuToggleBtn = document.querySelector('.menu-toggle-btn'); 
    const mainBody = document.body; 
    
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', () => {
            const isExpanded = mainBody.classList.contains('menu-open');
            
            // Toggle class 'menu-open' pada body
            mainBody.classList.toggle('menu-open');
            
            // Update atribut ARIA
            menuToggleBtn.setAttribute('aria-expanded', !isExpanded);
        });

        // Tutup menu saat link mobile diklik
        document.querySelectorAll('.mobile-menu-list a').forEach(link => {
            link.addEventListener('click', (e) => {
                if (!e.currentTarget.closest('.mobile-dropdown-toggle')) {
                    if (mainBody.classList.contains('menu-open')) {
                        setTimeout(() => {
                            mainBody.classList.remove('menu-open');
                            menuToggleBtn.setAttribute('aria-expanded', 'false');
                        }, 400); 
                    }
                }
            });
        });
    }

    // --- 2. LOGIKA TOMBOL PENCARIAN (DIPERBAIKI) ---
    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            // Event listener untuk tombol pencarian sekarang aktif.
            // Tambahkan logika tampilan overlay pencarian di sini.
            console.log("Tombol Pencarian Diklik!");
            
            // Opsional: Tutup menu mobile jika tombol search diklik
            if (mainBody.classList.contains('menu-open')) {
                 mainBody.classList.remove('menu-open');
                 if (menuToggleBtn) {
                    menuToggleBtn.setAttribute('aria-expanded', 'false');
                 }
            }
        });
    }
    // --------------------------------------------------

    // --- 3. LOGIKA DROPDOWN SUBMENU MOBILE ---
    document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetSubmenu = toggle.querySelector('.mobile-submenu');

            const isOpen = toggle.classList.contains('active');

            document.querySelectorAll('.mobile-dropdown-toggle.active').forEach(openToggle => {
                if (openToggle !== toggle) {
                    openToggle.classList.remove('active');
                    const otherSubmenu = openToggle.querySelector('.mobile-submenu');
                    if (otherSubmenu) {
                        otherSubmenu.style.maxHeight = null;
                    }
                }
            });

            if (!isOpen) {
                toggle.classList.add('active');
                targetSubmenu.style.maxHeight = targetSubmenu.scrollHeight + "px";
            } else {
                toggle.classList.remove('active');
                targetSubmenu.style.maxHeight = null;
            }
        });
    });


    // --- 4. LOGIKA LAZY LOADING & ERROR GAMBAR ---
    function loadAndHandleImages() {
        document.querySelectorAll('img[data-src]').forEach(img => {
            const src = img.getAttribute('data-src');
            
            if (src) {
                img.src = src;

                img.onerror = () => {
                    console.error(`[ERROR 404] Gagal memuat asset: ${src}. Harap periksa jalur file /img.`);
                    
                    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                    img.style.backgroundColor = 'var(--color-tertiary-bg)';
                    img.classList.add('image-error-placeholder'); 
                    
                    img.removeAttribute('data-src'); 
                };
            }
        });
    }

    loadAndHandleImages();


    // --- 5. LOGIKA SCROLL TO TOP ---
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
