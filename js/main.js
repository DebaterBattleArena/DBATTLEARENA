import { ATHLETES_DATA, RANKINGS_DATA } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LOGIKA TOGGLE MENU MOBILE (HAMBURGER) - (Perbaikan Utama) ---
    const menuToggleBtn = document.querySelector('.menu-toggle-btn'); 
    // Menggunakan querySelector karena button ini tidak punya ID di index.html perbaikan
    const mainBody = document.body; 

    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', () => {
            const isExpanded = mainBody.classList.contains('menu-open');
            
            // Perbaikan: HANYA toggle class 'menu-open' pada body. 
            // CSS (style.css) akan mengurus tampilan mobile-nav dan perubahan ikon.
            mainBody.classList.toggle('menu-open');
            
            // Update atribut ARIA untuk aksesibilitas
            menuToggleBtn.setAttribute('aria-expanded', !isExpanded);
        });

        // Opsional: Tutup menu saat link mobile diklik
        document.querySelectorAll('.mobile-menu-list a').forEach(link => {
            link.addEventListener('click', (e) => {
                // Kecuali jika link tersebut adalah parent dropdown (yang akan dihandle di bagian 2)
                if (!e.currentTarget.closest('.mobile-dropdown-toggle')) {
                    if (mainBody.classList.contains('menu-open')) {
                        // Beri penundaan sedikit agar transisi terlihat
                        setTimeout(() => {
                            mainBody.classList.remove('menu-open');
                            menuToggleBtn.setAttribute('aria-expanded', 'false');
                        }, 400); 
                    }
                }
            });
        });
    }

    // --- 2. LOGIKA DROPDOWN SUBMENU MOBILE ---
    document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetSubmenu = toggle.querySelector('.mobile-submenu');

            // Cek apakah submenu sudah terbuka
            const isOpen = toggle.classList.contains('active');

            // Tutup semua submenu lain
            document.querySelectorAll('.mobile-dropdown-toggle.active').forEach(openToggle => {
                if (openToggle !== toggle) {
                    openToggle.classList.remove('active');
                    const otherSubmenu = openToggle.querySelector('.mobile-submenu');
                    if (otherSubmenu) {
                        otherSubmenu.style.maxHeight = null;
                    }
                }
            });

            // Toggle submenu yang diklik 
            if (!isOpen) {
                toggle.classList.add('active');
                // Menggunakan scrollHeight untuk transisi CSS yang halus
                targetSubmenu.style.maxHeight = targetSubmenu.scrollHeight + "px";
            } else {
                toggle.classList.remove('active');
                targetSubmenu.style.maxHeight = null;
            }
        });
    });


    // --- 3. LOGIKA LAZY LOADING & ERROR GAMBAR (Perbaikan Gambar Hilang/404) ---
    function loadAndHandleImages() {
        document.querySelectorAll('img[data-src]').forEach(img => {
            const src = img.getAttribute('data-src');
            
            if (src) {
                // Set src ke data-src untuk memuat gambar
                img.src = src;

                // Tangani error jika gambar tidak ditemukan (ikon tanda tanya)
                img.onerror = () => {
                    console.error(`[ERROR 404] Gagal memuat asset: ${src}. Harap periksa jalur file /img.`);
                    
                    // Ganti dengan placeholder (misalnya: background abu gelap)
                    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // Piksel transparan kecil
                    img.style.backgroundColor = 'var(--color-tertiary-bg)';
                    img.classList.add('image-error-placeholder'); 
                    
                    img.removeAttribute('data-src'); 
                };
            }
        });
    }

    // Panggil fungsi loading gambar
    loadAndHandleImages();


    // --- 4. LOGIKA SCROLL TO TOP ---
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // 5. Logika Pencarian/Filter (Dikomentari - Akan dihandle di file spesifik)
    // console.log("Data Atlet Dimuat:", ATHLETES_DATA.length); 
});
