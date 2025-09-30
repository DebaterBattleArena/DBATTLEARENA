document.addEventListener('DOMContentLoaded', () => {
    if (typeof EVENTS_DATA === 'undefined') return;

    const upcomingGrid = document.getElementById('upcoming-events-grid');
    const pastGrid = document.getElementById('past-events-grid');
    const tabButtons = document.querySelectorAll('.event-tab-btn');
    const sections = document.querySelectorAll('.events-list-section');
    
    if(!upcomingGrid || !pastGrid) return; // Pastikan kita berada di halaman events.html

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('id-ID', options).toUpperCase().replace(/\./g, '');
    };

    const createEventCard = (event) => {
        const isUpcoming = event.status === 'Upcoming';
        const buttonClass = isUpcoming ? 'btn-tickets' : 'btn-highlights';
        const buttonText = isUpcoming ? 'BUY TICKETS' : 'WATCH HIGHLIGHTS';
        const buttonIcon = isUpcoming ? 'fas fa-arrow-right' : 'fas fa-video';
        
        return `
            <article class="event-card ${isUpcoming ? 'upcoming-event' : 'past-event'}">
                <div class="event-image-area">
                    <img src="${event.card_image.replace('-detail', '')}" alt="${event.title}" class="event-banner-img">
                    <div class="event-type-tag">${event.title.split(':')[0]}</div>
                    ${isUpcoming ? '<span class="event-status">LIVE</span>' : ''}
                </div>
                <div class="event-info-box">
                    <span class="event-date">${formatDate(event.date)}</span>
                    <h3 class="event-title"><a href="event-detail.html?id=${event.id}">${event.title}</a></h3>
                    <p class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                    <a href="event-detail.html?id=${event.id}" class="${buttonClass}">${buttonText} <i class="${buttonIcon}"></i></a>
                </div>
            </article>
        `;
    };

    const renderEvents = () => {
        const upcomingEvents = EVENTS_DATA.filter(e => e.status === 'Upcoming');
        const pastEvents = EVENTS_DATA.filter(e => e.status === 'Past').reverse();
        
        upcomingGrid.innerHTML = upcomingEvents.map(createEventCard).join('');
        pastGrid.innerHTML = pastEvents.map(createEventCard).join('');
    };

    const activateTab = (filter) => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('active'));

        document.querySelector(`.event-tab-btn[data-filter="${filter}"]`).classList.add('active');
        document.getElementById(`${filter}-events-section`).classList.add('active');
    };

    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            activateTab(filter);
        });
    });

    renderEvents();
    activateTab('upcoming');
});
