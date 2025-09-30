/**
 * js/event-detail.js
 * Skrip untuk mengisi konten halaman detail acara berdasarkan ID di URL.
 * Membutuhkan EVENTS_DATA dari data.js
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Ambil ID Acara dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id'));

    if (!eventId || typeof EVENTS_DATA === 'undefined') {
        document.querySelector('.event-detail-main .container').innerHTML = '<h1 style="color:red; text-align:center;">ERROR: Acara tidak ditemukan.</h1>';
        return;
    }
    
    // Temukan data acara
    const eventData = EVENTS_DATA.find(e => e.id === eventId);

    if (!eventData) {
        document.querySelector('.event-detail-main .container').innerHTML = '<h1 style="color:red; text-align:center;">ERROR: Acara tidak ditemukan.</h1>';
        return;
    }

    // Helper untuk memformat tanggal
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.toLocaleDateString('id-ID', { weekday: 'short' }).toUpperCase().replace(/\./g, '');
        const month = date.toLocaleDateString('id-ID', { month: 'short' }).toUpperCase().replace(/\./g, '');
        const dayNum = date.getDate();
        
        return `${day}, ${dayNum} ${month} | ${eventData.location.split(',')[0].toUpperCase()}`;
    };

    // 2. Isi Detail Utama (Hero)
    document.getElementById('page-title').textContent = eventData.title;
    document.getElementById('hero-event-img').src = eventData.card_image;
    document.getElementById('event-date-loc').textContent = formatDate(eventData.date);
    document.getElementById('event-detail-title').textContent = eventData.title.toUpperCase();
    document.getElementById('event-description').textContent = eventData.description;

    // Tombol Aksi
    const heroActions = document.getElementById('hero-actions');
    const buttonText = eventData.status === 'Upcoming' ? 'BUY TICKETS' : 'WATCH HIGHLIGHTS';
    const buttonClass = eventData.status === 'Upcoming' ? 'btn-tickets' : 'btn-highlights';
    
    heroActions.innerHTML = `<a href="#" class="${buttonClass}">${buttonText} <i class="fas fa-arrow-right"></i></a>`;


    // 3. Isi Fight Card
    const fightCardList = document.getElementById('fight-card-list');
    
    const createBoutMarkup = (bout) => {
        return `
            <article class="fight-bout">
                <div class="bout-type">${bout.type}</div>
                <div class="fighters-matchup">
                    <span class="fighter-name">${bout.fighters[0].toUpperCase()}</span>
                    <span class="vs-text">VS</span>
                    <span class="fighter-name">${bout.fighters[1].toUpperCase()}</span>
                </div>
                <div class="bout-weight">${bout.weight}</div>
            </article>
        `;
    };

    fightCardList.innerHTML = eventData.fight_card.map(createBoutMarkup).join('');


    // 4. Isi Video Highlights (Hanya jika ada URL)
    const highlightsSection = document.getElementById('highlights-section');
    const highlightVideoFrame = document.getElementById('highlight-video-frame');

    if (eventData.highlights_url) {
        highlightsSection.classList.remove('hidden');
        // Pastikan URL yang disisipkan adalah URL embed YouTube yang benar
        highlightVideoFrame.src = eventData.highlights_url;
    } else {
        highlightsSection.classList.add('hidden');
    }
});
