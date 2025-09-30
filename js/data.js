/**
 * Data Tiruan untuk Klon ONE Championship
 */

const ATHLETES_DATA = [
    { id: 'andrade', name: "Fabricio Andrade", country: "Brazil", weight_class: "Bantamweight", sport: "MMA", record: "9-2-0", image: "../img/athlete-andrade-mock.jpg" },
    { id: 'lee', name: "Angela Lee", country: "Singapore / United States", weight_class: "Atomweight", sport: "MMA", record: "11-3-0", image: "../img/athlete-lee-mock.jpg" },
    { id: 'johnson', name: "Demetrious Johnson", country: "United States", weight_class: "Flyweight", sport: "MMA", record: "25-4-1", image: "../img/athlete-johnson-mock.jpg" },
    { id: 'haggerty', name: "Jonathan Haggerty", country: "United Kingdom", weight_class: "Bantamweight", sport: "Muay Thai", record: "20-4-0 (MT/KB)", image: "../img/athlete-haggerty-mock.jpg" },
    { id: 'anane', name: "Nabil Anane", country: "Algeria", weight_class: "Flyweight", sport: "Muay Thai", record: "34-6-0 (MT)", image: "../img/athlete-anane-mock.jpg" },
    { id: 'di-bella', name: "Jonathan Di Bella", country: "Canada", weight_class: "Strawweight", sport: "Kickboxing", record: "11-0-0", image: "../img/athlete-di-bella-mock.jpg" }
];

const RANKINGS_DATA = {
    'Flyweight-MMA': {
        champion: { name: 'Demetrious "Mighty Mouse" Johnson', country_code: 'USA' },
        ranked: [
            { rank: 1, athlete_id: 'akhmetov', name: 'Kairat Akhmetov', country_code: 'KAZ' },
            { rank: 2, athlete_id: 'kingad', name: 'Danny Kingad', country_code: 'PHL' },
            { rank: 3, athlete_id: 'moraes', name: 'Adriano Moraes', country_code: 'BRA' },
        ]
    },
    'Bantamweight-MMA': {
        champion: { name: 'Fabricio Andrade', country_code: 'BRA' },
        ranked: [
            { rank: 1, athlete_id: 'kwan', name: 'Kwon Won Il', country_code: 'KOR' },
            { rank: 2, athlete_id: 'lineker', name: 'John Lineker', country_code: 'BRA' },
        ]
    },
    'Bantamweight-MuayThai': {
        champion: { name: 'Jonathan Haggerty', country_code: 'UK' },
        ranked: [
            { rank: 1, athlete_id: 'rodtang', name: 'Rodtang Jitmuangnon', country_code: 'THA' },
        ]
    }
};

const EVENTS_DATA = [
    { 
        id: 101, 
        title: "ONE Fight Night 37: Pranchai vs. Di Bella II", 
        date: "2025-10-04T08:00:00", 
        location: "Lumpinee Stadium, Bangkok", 
        status: "Upcoming",
        main_event: "Pranchai PK. Saenchai vs. Jonathan Di Bella II",
        description: "Saksikan pertarungan ulang yang eksplosif untuk gelar Kickboxing Strawweight World Championship! Ditambah dengan kartu pertarungan penuh yang menampilkan bintang-bintang terbaik ONE Championship.",
        fight_card: [
            { type: "WORLD TITLE", fighters: ["Pranchai PK. Saenchai", "Jonathan Di Bella"], weight: "Strawweight Kickboxing" },
            { type: "FEATURE BOUT", fighters: ["Anissa Meksen", "Vero"], weight: "Atomweight Muay Thai" },
        ],
        highlights_url: null,
        card_image: "../img/event-banner-mock-1-detail.jpg"
    },
    { 
        id: 102, 
        title: "ONE 172: Lineker vs. Andrade", 
        date: "2025-09-07T19:30:00", 
        location: "Singapore Indoor Stadium", 
        status: "Past",
        main_event: "John Lineker vs. Fabricio Andrade",
        description: "Malam legendaris pertarungan MMA! Pertarungan ulang yang brutal memperebutkan gelar Bantamweight World Championship.",
        fight_card: [
            { type: "MAIN EVENT", fighters: ["John Lineker", "Fabricio Andrade"], weight: "Bantamweight MMA" },
            { type: "MMA", fighters: ["Thang Le", "Ilya Freymanov"], weight: "Featherweight MMA" },
        ],
        highlights_url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Contoh URL embed
        card_image: "../img/event-banner-mock-2-detail.jpg"
    }
];

const NEWS_DATA = [
    { id: 1, title: '5 Reasons To Watch ONE Fight Night 37', category: 'Features', date: 'SEP 29, 2025', is_featured: true },
    { id: 2, title: 'Nabil Anane To Defend Title Against Jonathan Haggerty', category: 'News', date: 'SEP 27, 2025', is_featured: false },
    { id: 3, title: 'EXCLUSIVE: Meksen Wants World Title Shot Next', category: 'Interviews', date: 'SEP 25, 2025', is_featured: false },
    { id: 4, title: 'Big Announcement about Ranks', category: 'News', date: 'SEP 20, 2025', is_featured: false },
];

const VIDEO_DATA = [
    { id: 1, title: 'No one saw it coming - Shock KO Highlights', type: 'Highlights', date: 'SEP 30, 2025', views: 500000, thumbnail: '../img/video-thumbnail-1.jpg' },
    { id: 2, title: 'Mighty Mouse vs Moraes I (Full Fight)', type: 'Full Fights', date: 'SEP 15, 2025', views: 1500000, thumbnail: '../img/video-thumbnail-2.jpg' },
    { id: 3, title: 'ONE Fight Night 37 Official Trailer', type: 'Trailer', date: 'OCT 1, 2025', views: 50000, thumbnail: '../img/video-thumbnail-3.jpg' },
];
