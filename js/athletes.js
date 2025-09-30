import { ATHLETES_DATA } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    if (typeof ATHLETES_DATA === 'undefined') return;

    const athleteListContainer = document.getElementById('athlete-list');
    const searchInput = document.getElementById('athlete-search');
    const weightFilter = document.getElementById('weight-class-filter');
    const sportFilter = document.getElementById('sport-filter');
    const countryFilter = document.getElementById('country-filter');

    // Fungsi untuk mengisi opsi filter secara dinamis (lebih fleksibel)
    const populateFilters = () => {
        const uniqueWeights = [...new Set(ATHLETES_DATA.map(a => a.weight_class))].sort();
        const uniqueSports = [...new Set(ATHLETES_DATA.map(a => a.sport))].sort();
        
        // Mengambil kode negara unik dan nama negara
        const uniqueCountries = ATHLETES_DATA.reduce((acc, athlete) => {
            if (!acc.find(item => item.code === athlete.countryCode)) {
                acc.push({ code: athlete.countryCode, name: athlete.country.split(' / ')[0] });
            }
            return acc;
        }, []).sort((a, b) => a.name.localeCompare(b.name));

        // Isi Weight Filter
        uniqueWeights.forEach(weight => {
            weightFilter.innerHTML += `<option value="${weight.toLowerCase()}">${weight.toUpperCase()}</option>`;
        });
        
        // Isi Sport Filter
        uniqueSports.forEach(sport => {
            sportFilter.innerHTML += `<option value="${sport.toLowerCase()}">${sport.toUpperCase()}</option>`;
        });

        // Isi Country Filter (Perbaikan: Menggunakan kode negara untuk filtering)
        uniqueCountries.forEach(country => {
            countryFilter.innerHTML += `<option value="${country.code.toLowerCase()}">${country.name.toUpperCase()}</option>`;
        });
    };
    
    // Panggil populateFilters sebelum merender
    populateFilters();

    const createAthleteCard = (athlete) => {
        const card = document.createElement('a');
        card.href = `athlete-detail.html?id=${athlete.id}`;
        card.className = 'athlete-card';
        card.innerHTML = `
            <div class="athlete-image-wrapper">
                <img src="${athlete.image}" alt="${athlete.name}" loading="lazy">
            </div>
            <div class="athlete-info">
                <p class="athlete-country">${athlete.country.split(' / ')[0].toUpperCase()}</p>
                <h3 class="athlete-name">${athlete.name}</h3>
                <p class="athlete-class">${athlete.weight_class} | ${athlete.sport}</p>
            </div>
        `;
        return card;
    };

    const renderAthletes = (data) => {
        athleteListContainer.innerHTML = '';
        if (data.length === 0) {
            athleteListContainer.innerHTML = '<p class="no-results">Tidak ada atlet yang cocok dengan kriteria pencarian.</p>';
            return;
        }
        data.forEach(athlete => {
            athleteListContainer.appendChild(createAthleteCard(athlete));
        });
    };

    const applyFilters = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedWeight = weightFilter.value; // Sudah dalam lowercase dari value option
        const selectedSport = sportFilter.value; 
        const selectedCountry = countryFilter.value; // Sudah dalam lowercase dari value option

        const filteredData = ATHLETES_DATA.filter(athlete => {
            const matchesSearch = athlete.name.toLowerCase().includes(searchTerm);
            const matchesWeight = selectedWeight === '' || athlete.weight_class.toLowerCase() === selectedWeight;
            const matchesSport = selectedSport === '' || athlete.sport.toLowerCase() === selectedSport;
            
            // Logika filter Negara: membandingkan countryCode
            const matchesCountry = selectedCountry === '' || athlete.countryCode.toLowerCase() === selectedCountry;

            return matchesSearch && matchesWeight && matchesSport && matchesCountry;
        });
        renderAthletes(filteredData);
    };

    if(athleteListContainer) {
        searchInput.addEventListener('input', applyFilters);
        weightFilter.addEventListener('change', applyFilters);
        sportFilter.addEventListener('change', applyFilters);
        countryFilter.addEventListener('change', applyFilters); 
        
        // Inisiasi awal
        applyFilters();
    }
});
