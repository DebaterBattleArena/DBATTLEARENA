document.addEventListener('DOMContentLoaded', () => {
    if (typeof RANKINGS_DATA === 'undefined') return;

    const tabsContainer = document.getElementById('weight-class-tabs');
    const rankingsContainer = document.getElementById('rankings-container');
    
    const createRankedItem = (item) => {
        return `
            <div class="ranked-item">
                <span class="rank-number">#${item.rank}</span>
                <a href="athlete-profile.html?id=${item.athlete_id}" class="ranked-athlete">${item.name}</a>
                <span class="athlete-country">${item.country_code}</span>
            </div>
        `;
    };

    const renderDivision = (divisionKey) => {
        const divisionData = RANKINGS_DATA[divisionKey];
        if (!divisionData) return '';

        const title = divisionKey.toUpperCase().replace('-', ' ') + ' WORLD RANKINGS';
        const rankedItems = divisionData.ranked.map(createRankedItem).join('');

        return `
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
    };

    const switchDivision = (divisionKey) => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        rankingsContainer.innerHTML = '';
        
        rankingsContainer.innerHTML = renderDivision(divisionKey);
        
        const activeBtn = document.querySelector(`.tab-button[data-division="${divisionKey}"]`);
        if (activeBtn) activeBtn.classList.add('active');
    };

    const initializeRankings = () => {
        const divisionKeys = Object.keys(RANKINGS_DATA);
        
        if (tabsContainer) tabsContainer.innerHTML = ''; 
        
        divisionKeys.forEach(key => {
            const button = document.createElement('button');
            button.className = 'tab-button';
            button.setAttribute('data-division', key);
            button.textContent = key.replace('-', ' ').toUpperCase();
            
            button.addEventListener('click', () => switchDivision(key));
            if (tabsContainer) tabsContainer.appendChild(button);
        });

        if (divisionKeys.length > 0) {
            switchDivision(divisionKeys[0]);
        }
    };
    
    if(tabsContainer && rankingsContainer) {
        initializeRankings();
    }
});
