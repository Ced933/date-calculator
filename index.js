"use strict";
// pour mettre la date du jour dans les input de type date seul ce format est accépté yyyy-mm-dd 
const today = new Date().toISOString().split('T')[0]; // new Date() Fri Feb 16 2024 12:56:15 GMT+0100 (heure normale d’Europe centrale) //new Date().toISOString() 2024-02-16T11:57:02.396Z // new Date().toISOString().split('T') ['2024-02-16', '11:58:00.868Z'] // new Date().toISOString().split('T')[0] 2024-02-16 
console.log(today);
const startDate = document.querySelector("#start_date");
startDate.value = today;
// bloquer les réservation avant aujourd'hui
startDate.min = today;
// la date de demain 
let tomorrow = new Date();
// la date d'aujourdhui + 1
tomorrow.setDate(tomorrow.getDate() + 1);
const endDate = document.querySelector("#end_date");
let tomorrowFormat = tomorrow.toISOString().split('T')[0];
endDate.value = tomorrowFormat;
endDate.min = tomorrowFormat;
startDate.addEventListener('change', (e) => {
    let day = new Date(startDate.value);
    console.log(day);
    // si la date de fin est inférieur a la date de depart alors on se met a la date de départ + 1 exemple  depart 26 arrivé le 24 pas possible alors depart le 27 arrivé le 27 
    if (endDate.value < startDate.value) {
        // il faut d'abord mettre le jour + 1 avant de parametrer le format de la date en yyyy-mm-dd
        day.setDate(day.getDate() + 1);
        endDate.value = day.toISOString().split('T')[0];
    }
});
endDate.addEventListener('change', () => {
    let endToday = new Date(endDate.value);
    console.log(endToday);
    if (endDate.value < startDate.value) {
        endToday.setDate(endToday.getDate() - 1);
        startDate.value = endToday.toISOString().split('T')[0];
    }
});
