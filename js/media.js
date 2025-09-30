document.addEventListener('DOMContentLoaded', () => {
    const isNewsPage = document.querySelector('.media-main h1')?.textContent.includes('NEWS') || false;
    
    // Pastikan data dimuat dan kontainer ada
    if (typeof NEWS_DATA === 'undefined' || typeof VIDEO_DATA === 'undefined') return;
    
    const data = isNewsPage ? NEWS_DATA : VIDEO_DATA;
    const gridContainer = document.getElementById(isNewsPage ? 'news-grid-container' : 'video-grid-container');
    const filterSelect = document.getElementById(isNewsPage ? 'news-filter' : 'video-filter');
    const sortButton = document.getElementById(isNewsPage ? 'sort-button' : 'sort-button-video');
    
    if (!gridContainer || !filterSelect || !sortButton) return; 

    let isAscending = false; 

    const createMediaItem = (item) => {
        if (isNewsPage) {
            return `
                <article class="story-item">
                    <span class="story-category">${item.category.toUpperCase()}</span>
                    <span class="story-date">${item.date}</span>
                    <a href="#">${item.title}</a>
                </article>
            `;
        } else {
            return `
                <div class="video-item">
                    <img src="${item.thumbnail}" alt="${item.title}" class="video-thumbnail">
                    <div class="video-info">
                        <span class="category-tag">${item.type}</span>
                        <a href="#">${item.title}</a>
                    </div>
                </div>
            `;
        }
    };

    const renderMedia = (mediaData) => {
        const selectedFilter = filterSelect.value;
        
        let filteredData = mediaData.filter(item => {
            const categoryField = isNewsPage ? item.category : item.type;
            return selectedFilter === '' || categoryField === selectedFilter;
        });

        filteredData.sort((a, b) => {
            const valA = isNewsPage ? new Date(a.date) : a.views;
            const valB = isNewsPage ? new Date(b.date) : b.views;

            if (valA < valB) return isAscending ? -1 : 1;
            if (valA > valB) return isAscending ? 1 : -1;
            return 0;
        });
        
        gridContainer.innerHTML = filteredData.map(createMediaItem).join('');
    };
    
    filterSelect.addEventListener('change', () => renderMedia(data));

    sortButton.addEventListener('click', () => {
        isAscending = !isAscending;
        const icon = sortButton.querySelector('i');
        // Ikon untuk Tanggal atau Views
        const newIcon = isNewsPage ? (isAscending ? 'fas fa-sort-amount-up' : 'fas fa-sort-amount-down') : (isAscending ? 'fas fa-eye-slash' : 'fas fa-eye');
        icon.className = newIcon;
        renderMedia(data);
    });

    renderMedia(data);
});
