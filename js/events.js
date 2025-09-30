/**
 * js/events.js
 * Skrip untuk mengelola tampilan dan filter tab di halaman acara.
 * Membutuhkan EVENTS_DATA dari data.js
 */

document.addEventListener('DOMContentLoaded', () => {
    if (typeof EVENTS_DATA === 'undefined') {
        console.error("EVENTS_DATA tidak ditemukan. Pastikan data.js dimuat.");
        return;
    }

    const upcomingGrid = document.getElementById('upcoming-events-grid');
    const pastGrid = document.getElementById('past-events-grid');
    const tabButtons = document.querySelectorAll('.event-tab-btn');
    const sections = document.querySelectorAll('.events-list-section');

    // Helper untuk memformat tanggal (misal: "SABTU, 4 OKT 2025")
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        // Menyesuaikan format agar terlihat "kuat"
        return date.toLocaleDateString('id-ID', options).toUpperCase().replace(/\./g, '');
    };

    // Fungsi untuk membuat markup kartu acara
    const createEventCard = (event) => {
        const isUpcoming = event.status === 'Upcoming';
        const buttonClass = isUpcoming ? 'btn-tickets' : 'btn-highlights';
        const buttonText = isUpcoming ? 'BUY TICKETS' : 'WATCH HIGHLIGHTS';
        const buttonIcon = isUpcoming ? 'fas fa-arrow-right' : 'fas fa-video';
        
        return `
            <article class="event-card ${isUpcoming ? 'upcoming-event' : 'past-event'}">
                <div class="event-image-area">
                    <img src="../img/event-banner-mock-${event.id}.jpg" alt="${event.title}" class="event-banner-img">
                    <div class="event-type-tag">${event.title.split(':')[0]}</div>
                    ${isUpcoming ? '<span class="event-status">LIVE</span>' : ''}
                </div>
                <div class="event-info-box">
                    <span class="event-date">${formatDate(event.date)}</span>
                    <h3 class="event-title"><a href="event-detail.html?id=${event.id}">${event.title}</a></h3>
                    <p class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                    <a href="${isUpcoming ? '#' : 'event-detail.html?id=' + event.id}" class="${buttonClass}">${buttonText} <i class="${buttonIcon}"></i></a>
                </div>
            </article>
        `;
    };

    // Fungsi utama untuk me-render semua acara
    const renderEvents = () => {
        const upcomingEvents = EVENTS_DATA.filter(e => e.status === 'Upcoming');
        const pastEvents = EVENTS_DATA.filter(e => e.status === 'Past').reverse(); // Acara lalu terbaru di atas
        
        upcomingGrid.innerHTML = upcomingEvents.map(createEventCard).join('');
        pastGrid.innerHTML = pastEvents.map(createEventCard).join('');

        // Jika tidak ada acara mendatang, berikan pesan yang sesuai
        if (upcomingEvents.length === 0) {
            upcomingGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--color-secondary-text); margin-top: 30px;">Tidak ada acara yang dijadwalkan saat ini. Nantikan pengumuman!</p>';
        }
    };

    // Fungsi untuk mengaktifkan tab
    const activateTab = (filter) => {
        // Nonaktifkan semua tombol dan section
        tabButtons.forEach(btn => btn.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('active'));

        // Aktifkan tab dan section yang sesuai
        document.querySelector(`.event-tab-btn[data-filter="${filter}"]`).classList.add('active');
        document.getElementById(`${filter}-events-section`).classList.add('active');
    };

    // Event Listeners untuk Tab
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            activateTab(filter);
        });
    });

    // Inisiasi
    renderEvents();
    activateTab('upcoming'); // Tampilkan Upcoming secara default
});
