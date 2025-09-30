/**
 * Data Tiruan untuk Klon ONE Championship
 */

const ATHLETES_DATA = [
    { id: 'andrade', name: "Fabricio Andrade", country: "Brazil", countryCode: "BRA", weight_class: "Bantamweight", sport: "MMA", record: "9-2-0", image: "../img/athlete-andrade-mock.jpg" },
    { id: 'lee', name: "Angela Lee", country: "Singapore / United States", countryCode: "SGP", weight_class: "Atomweight", sport: "MMA", record: "11-3-0", image: "../img/athlete-lee-mock.jpg" },
    { id: 'johnson', name: "Demetrious Johnson", country: "United States", countryCode: "USA", weight_class: "Flyweight", sport: "MMA", record: "25-4-1", image: "../img/athlete-johnson-mock.jpg" },
    { id: 'haggerty', name: "Jonathan Haggerty", country: "United Kingdom", countryCode: "GBR", weight_class: "Bantamweight", sport: "Muay Thai", record: "20-4-0 (MT/KB)", image: "../img/athlete-haggerty-mock.jpg" },
    { id: 'stamp', name: "Stamp Fairtex", country: "Thailand", countryCode: "THA", weight_class: "Atomweight", sport: "Muay Thai", record: "64-18-0 (MT)", image: "../img/athlete-stamp-mock.jpg" },
    { id: 'di-bella', name: "Jonathan Di Bella", country: "Canada", countryCode: "CAN", weight_class: "Strawweight", sport: "Kickboxing", record: "11-0-0", image: "../img/athlete-di-bella-mock.jpg" },
    { id: 'ruotolo', name: "Kade Ruotolo", country: "United States", countryCode: "USA", weight_class: "Lightweight", sport: "Grappling", record: "BJJ Specialist", image: "../img/athlete-ruotolo-mock.jpg" },
    { id: 'gong', name: "Gong Ouyang", country: "China", countryCode: "CHN", weight_class: "Light Heavyweight", sport: "MMA", record: "11-6-0", image: "../img/athlete-gong-mock.jpg" }
];

const RANKINGS_DATA = [
    { 
        title: "Pound-for-Pound", 
        sport: "P4P", 
        athletes: [
            { rank: 1, name: "Demetrious Johnson", record: "25-4-1" },
            { rank: 2, name: "Regian Eersel", record: "67-4-0" },
            { rank: 3, name: "Kairat Akhmetov", record: "28-2-0" },
        ]
    },
    { 
        title: "Bantamweight MMA", 
        sport: "MMA",
        athletes: [
            { rank: "C", name: "Fabricio Andrade", record: "9-2-0" },
            { rank: 1, name: "John Lineker", record: "37-10-0" },
            { rank: 2, name: "Kwon Won Il", record: "14-4-0" },
            { rank: 3, name: "Stephen Loman", record: "17-2-0" },
            { rank: 4, name: "Bibiano Fernandes", record: "24-5-0" },
            { rank: 5, name: "Shoko Sato", record: "33-14-2" },
        ]
    },
    { 
        title: "Atomweight Muay Thai", 
        sport: "Muay Thai",
        athletes: [
            { rank: "C", name: "Allycia Rodrigues", record: "45-6-0" },
            { rank: 1, name: "Stamp Fairtex", record: "64-18-0" },
            { rank: 2, name: "Janet Todd", record: "39-7-0" },
            { rank: 3, name: "Anissa Meksen", record: "103-5-0" },
            { rank: 4, name: "Jackie Buntan", record: "23-6-0" },
            { rank: 5, name: "Anna Jaroonsak", record: "40-10-0" },
        ]
    },
    // ... Tambahkan ranking lainnya untuk diuji
];

// Pastikan Anda mengekspor semua data
export { ATHLETES_DATA, RANKINGS_DATA };
