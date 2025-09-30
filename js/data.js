/**
 * js/data.js
 * Data Tiruan untuk Klon ONE Championship (Debater Battle Arena)
 * Mendukung Halaman Atlet, Peringkat, dan Acara
 */

// Data Profil Atlet
const ATHLETES_DATA = [
    { 
        id: 'andrade', 
        name: "Fabricio Andrade", 
        country: "Brazil", 
        weight_class: "Bantamweight", 
        sport: "MMA", 
        record: "9-2-0", 
        image: "../img/athlete-andrade-mock.jpg" 
    },
    { 
        id: 'lee', 
        name: "Angela Lee", 
        country: "Singapore / United States", 
        weight_class: "Atomweight", 
        sport: "MMA", 
        record: "11-3-0", 
        image: "../img/athlete-lee-mock.jpg" 
    },
    { 
        id: 'johnson', 
        name: "Demetrious Johnson", 
        country: "United States", 
        weight_class: "Flyweight", 
        sport: "MMA", 
        record: "25-4-1", 
        image: "../img/athlete-johnson-mock.jpg" 
    },
    { 
        id: 'haggerty', 
        name: "Jonathan Haggerty", 
        country: "United Kingdom", 
        weight_class: "Bantamweight", 
        sport: "Muay Thai", 
        record: "20-4-0 (MT/KB)", 
        image: "../img/athlete-haggerty-mock.jpg" 
    },
    { 
        id: 'anane', 
        name: "Nabil Anane", 
        country: "Algeria", 
        weight_class: "Flyweight", 
        sport: "Muay Thai", 
        record: "34-6-0 (MT)", 
        image: "../img/athlete-anane-mock.jpg" 
    },
    { 
        id: 'di-bella', 
        name: "Jonathan Di Bella", 
        country: "Canada", 
        weight_class: "Strawweight", 
        sport: "Kickboxing", 
        record: "11-0-0", 
        image: "../img/athlete-di-bella-mock.jpg" 
    }
    // Tambahkan 50+ atlet lain untuk tampilan profesional
];

// Data Peringkat (Diatur berdasarkan Divisi-Sport)
const RANKINGS_DATA = {
    'Flyweight-MMA': {
        champion: { name: 'Demetrious "Mighty Mouse" Johnson', country_code: 'USA' },
        ranked: [
            { rank: 1, athlete_id: 'akhmetov', name: 'Kairat Akhmetov', country_code: 'KAZ' },
            { rank: 2, athlete_id: 'kingad', name: 'Danny Kingad', country_code: 'PHL' },
            { rank: 3, athlete_id: 'moraes', name: 'Adriano Moraes', country_code: 'BRA' },
            { rank: 4, athlete_id: 'rebollosa', name: 'Gustavo Rebollosa', country_code: 'MEX' },
            { rank: 5, athlete_id: 'wakamatsu', name: 'Yuya Wakamatsu', country_code: 'JPN' },
        ]
    },
    'Bantamweight-MMA': {
        champion: { name: 'Fabricio Andrade', country_code: 'BRA' },
        ranked: [
            { rank: 1, athlete_id: 'kwan', name: 'Kwon Won Il', country_code: 'KOR' },
            { rank: 2, athlete_id: 'lineker', name: 'John Lineker', country_code: 'BRA' },
            { rank: 3, athlete_id: 'belingon', name: 'Kevin Belingon', country_code: 'PHL' },
        ]
    },
    'Bantamweight-MuayThai': {
        champion: { name: 'Jonathan Haggerty', country_code: 'UK' },
        ranked: [
            { rank: 1, athlete_id: 'rodtang', name: 'Rodtang Jitmuangnon', country_code: 'THA' },
            { rank: 2, athlete_id: 'anane', name: 'Nabil Anane', country_code: 'ALG' },
            // ...
        ]
    },
    'Strawweight-Kickboxing': {
        champion: { name: 'Jonathan Di Bella', country_code: 'CAN' },
        ranked: [
            { rank: 1, athlete_id: 'petchdam', name: 'Petchdam Petchyindee', country_code: 'THA' },
            // ...
        ]
    }
};

// Data Acara (Untuk halaman events.html)
const EVENTS_DATA = [
    { 
        id: 101, 
        title: "ONE Fight Night 37: Pranchai vs. Di Bella II", 
        date: "2025-10-04T08:00:00", 
        location: "Lumpinee Stadium, Bangkok", 
        status: "Upcoming",
        main_event: "Pranchai PK. Saenchai vs. Jonathan Di Bella II"
    },
    { 
        id: 102, 
        title: "ONE 172: Lineker vs. Andrade", 
        date: "2025-09-07T19:30:00", 
        location: "Singapore Indoor Stadium", 
        status: "Past",
        main_event: "John Lineker vs. Fabricio Andrade"
    }
    // Tambahkan lebih banyak acara
];
