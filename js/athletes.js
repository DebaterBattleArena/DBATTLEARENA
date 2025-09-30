document.addEventListener('DOMContentLoaded', () => {
    if (typeof ATHLETES_DATA === 'undefined') return;

    const athleteListContainer = document.getElementById('athlete-list');
    const searchInput = document.getElementById('athlete-search');
    const weightFilter = document.getElementById('weight-class-filter');
    const sportFilter = document.getElementById('sport-filter');

    const createAthleteCard = (athlete) => {
        return `
            <a href="athlete-profile.html?id=${athlete.id}" class="athlete-card">
                <div class="card-image-wrapper">
                    <img src="${athlete.image || '../img/placeholder.jpg'}" alt="${athlete.name}" class="athlete-img">
                </div>
                <div class="athlete-info">
                    <span class="athlete-name">${athlete.name.toUpperCase()}</span>
                    <span class="athlete-class">${athlete.weight_class.toUpperCase()} ${athlete.sport.toUpperCase()}</span>
                </div>
            </a>
        `;
    };

    const renderAthletes = (data) => {
        athleteListContainer.innerHTML = '';
        if (data.length === 0) {
            athleteListContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--color-secondary-text); margin-top: 50px;">Tidak ada atlet yang ditemukan.</p>';
            return;
        }
        athleteListContainer.innerHTML = data.map(createAthleteCard).join('');
    };

    const applyFilters = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedWeight = weightFilter.value.toLowerCase();
        const selectedSport = sportFilter.value.toLowerCase();

        const filteredData = ATHLETES_DATA.filter(athlete => {
            const matchesSearch = athlete.name.toLowerCase().includes(searchTerm);
            const matchesWeight = selectedWeight === '' || athlete.weight_class.toLowerCase() === selectedWeight;
            const matchesSport = selectedSport === '' || athlete.sport.toLowerCase() === selectedSport;
            return matchesSearch && matchesWeight && matchesSport;
        });
        renderAthletes(filteredData);
    };

    if(athleteListContainer) {
        searchInput.addEventListener('input', applyFilters);
        weightFilter.addEventListener('change', applyFilters);
        sportFilter.addEventListener('change', applyFilters);
        renderAthletes(ATHLETES_DATA);
    }
});
