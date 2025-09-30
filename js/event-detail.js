document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id'));

    if (!eventId || typeof EVENTS_DATA === 'undefined') return;
    
    const eventData = EVENTS_DATA.find(e => e.id === eventId);

    if (!eventData) return;

    // Helper untuk memformat tanggal
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.toLocaleDateString('id-ID', { weekday: 'short' }).toUpperCase().replace(/\./g, '');
        const month = date.toLocaleDateString('id-ID', { month: 'short' }).toUpperCase().replace(/\./g, '');
        const dayNum = date.getDate();
        
        return `${day}, ${dayNum} ${month} | ${eventData.location.split(',')[0].toUpperCase()}`;
    };

    // Isi Detail Utama (Hero)
    document.getElementById('page-title').textContent = eventData.title;
    const heroImg = document.getElementById('hero-event-img');
    if (heroImg) heroImg.src = eventData.card_image;
    document.getElementById('event-date-loc').textContent = formatDate(eventData.date);
    document.getElementById('event-detail-title').textContent = eventData.title.toUpperCase();
    document.getElementById('event-description').textContent = eventData.description;

    // Tombol Aksi
    const heroActions = document.getElementById('hero-actions');
    const buttonText = eventData.status === 'Upcoming' ? 'BUY TICKETS' : 'WATCH HIGHLIGHTS';
    const buttonClass = eventData.status === 'Upcoming' ? 'btn-tickets' : 'btn-highlights';
    
    if (heroActions) heroActions.innerHTML = `<a href="#" class="${buttonClass}">${buttonText} <i class="fas fa-arrow-right"></i></a>`;


    // Isi Fight Card
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
    
    if (fightCardList) fightCardList.innerHTML = eventData.fight_card.map(createBoutMarkup).join('');


    // Isi Video Highlights
    const highlightsSection = document.getElementById('highlights-section');
    const highlightVideoFrame = document.getElementById('highlight-video-frame');

    if (highlightsSection && highlightVideoFrame) {
        if (eventData.highlights_url) {
            highlightsSection.classList.remove('hidden');
            highlightVideoFrame.src = eventData.highlights_url;
        } else {
            highlightsSection.classList.add('hidden');
        }
    }
});
