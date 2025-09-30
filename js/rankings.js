/**
 * js/rankings.js
 * Skrip untuk mengelola tampilan peringkat dinamis.
 * Membutuhkan RANKINGS_DATA dari data.js
 */

document.addEventListener('DOMContentLoaded', () => {
    if (typeof RANKINGS_DATA === 'undefined') {
        console.error("RANKINGS_DATA tidak ditemukan. Pastikan data.js dimuat.");
        return;
    }

    const tabsContainer = document.getElementById('weight-class-tabs');
    const rankingsContainer = document.getElementById('rankings-container');
    
    let activeDivision = '';

    // 1. Fungsi untuk membuat markup item peringkat
    const createRankedItem = (item) => {
        return `
            <div class="ranked-item">
                <span class="rank-number">#${item.rank}</span>
                <a href="athlete-profile.html?id=${item.athlete_id}" class="ranked-athlete">${item.name}</a>
                <span class="athlete-country">${item.country_code}</span>
            </div>
        `;
    };

    // 2. Fungsi untuk me-render satu divisi peringkat
    const renderDivision = (divisionKey) => {
        const divisionData = RANKINGS_DATA[divisionKey];
        if (!divisionData) return '';

        const title = divisionKey.toUpperCase().replace('-', ' ') + ' WORLD RANKINGS';
        const rankedItems = divisionData.ranked.map(createRankedItem).join('');

        const html = `
            <div class="ranking-division active" id="ranking-${divisionKey}">
                <h2 class="division-title">ONE ${title}</h2>
                
                <article class="champion-card">
                    <span class="rank-label">CHAMPION</span>
                    <a href="athlete-profile.html?id=${divisionData.champion.name.split(' ')[0].toLowerCase()}" class="champion-name">${divisionData.champion.name}</a>
                    <span class="champion-belt"><i class="fas fa-crown"></i> WORLD CHAMPION (${divisionData.champion.country_code})</span>
                </article>

                <div class="ranked-list">
                    ${rankedItems}
                </div>
            </div>
        `;
        return html;
    };

    // 3. Fungsi utama untuk mengganti tab dan konten
    const switchDivision = (divisionKey) => {
        // Hapus kelas aktif dari semua tombol
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        // Hapus konten yang sudah ada
        rankingsContainer.innerHTML = '';
        
        // Render dan tampilkan divisi baru
        rankingsContainer.innerHTML = renderDivision(divisionKey);
        activeDivision = divisionKey;

        // Atur tombol yang diklik menjadi aktif
        document.querySelector(`.tab-button[data-division="${divisionKey}"]`).classList.add('active');
    };

    // 4. Inisiasi: Buat tab dan atur event listeners
    const initializeRankings = () => {
        const divisionKeys = Object.keys(RANKINGS_DATA);
        
        // Kosongkan dan buat ulang tab dari data
        tabsContainer.innerHTML = ''; 
        divisionKeys.forEach(key => {
            const button = document.createElement('button');
            button.className = 'tab-button';
            button.setAttribute('data-division', key);
            // Contoh format: Flyweight-MMA -> Flyweight MMA
            button.textContent = key.replace('-', ' ').toUpperCase();
            
            button.addEventListener('click', () => switchDivision(key));
            tabsContainer.appendChild(button);
        });

        // Tampilkan divisi pertama sebagai default
        if (divisionKeys.length > 0) {
            switchDivision(divisionKeys[0]);
        }
    };

    initializeRankings();
});
