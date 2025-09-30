document.addEventListener('DOMContentLoaded', () => {
    // 1. Logika Toggle Menu Mobile (Hamburger)
    const menuToggleBtn = document.querySelector('.menu-toggle-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    // Meniru aksi buka menu
    menuToggleBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        menuToggleBtn.querySelector('i').classList.toggle('fa-bars');
        menuToggleBtn.querySelector('i').classList.toggle('fa-times'); // Ikon silang saat terbuka
        body.classList.toggle('menu-open'); // Kelas untuk mencegah scroll di background
    });

    // 2. Logika Floating Ticket Banner
    const floatingBanner = document.querySelector('.floating-ticket-banner');
    const closeBannerBtn = document.querySelector('.close-banner-btn');
    
    if (closeBannerBtn && floatingBanner) {
        closeBannerBtn.addEventListener('click', () => {
            floatingBanner.style.display = 'none';
            // Opsi: Simpan ke LocalStorage agar tidak muncul lagi
            localStorage.setItem('hideTicketBanner', 'true');
        });

        // Cek LocalStorage saat memuat halaman
        if (localStorage.getItem('hideTicketBanner') === 'true') {
            floatingBanner.style.display = 'none';
        }
    }


    // 3. Logika Countdown Timer (Replikasi Video 0:00)
    function updateCountdown() {
        // Target waktu: ONE Fight Night 36 (gunakan data tiruan/tanggal acak di masa depan)
        // Kita gunakan tanggal target 4 Oktober 2025 (sesuai video)
        const targetDate = new Date("October 4, 2025 08:00:00 GMT+0700").getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update DOM dengan padding nol (misal: 03, 18)
        const pad = (num) => String(num).padStart(2, '0');

        const daysEl = document.getElementById('days');
        const hrsEl = document.getElementById('hrs');
        const minEl = document.getElementById('min');
        
        if (daysEl) daysEl.innerHTML = `${pad(days)} <span class="unit-label">DAYS</span>`;
        if (hrsEl) hrsEl.innerHTML = `${pad(hours)} <span class="unit-label">HRS</span>`;
        if (minEl) minEl.innerHTML = `${pad(minutes)} <span class="unit-label">MIN</span>`;

        // Jika hitungan mundur selesai
        if (distance < 0) {
            clearInterval(countdownInterval);
            if (daysEl) daysEl.innerHTML = `00 <span class="unit-label">DAYS</span>`;
            // dll.
        }
    }

    // Panggil fungsi segera dan atur interval
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
});
