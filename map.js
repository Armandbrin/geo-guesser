// map principal
let array = [
    [latMin = 24.396308, latMax = 49.384358, lngMin = -125.0, lngMax = -66.93457], // Amérique du Nord (États-Unis)
    [latMin = 35.0, latMax = 71.0, lngMin = -10.0, lngMax = 40.0], // Europe (partie continentale)
    [latMin = 10.0, latMax = 50.0, lngMin = 70.0, lngMax = 140.0], // Asie (intérieur de la Chine, Inde)
    [latMin = -35.0, latMax = -10.0, lngMin = -75.0, lngMax = -35.0], // Amérique du Sud (Brésil)
    [latMin = -35.0, latMax = -10.0, lngMin = 115.0, lngMax = 150.0], // Australie (intérieur)
    [latMin = 5.0, latMax = 35.0, lngMin = -20.0, lngMax = 55.0] // Afrique (partie continentale)
]
// shuffle
const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
const shuffle = shuffledArray.sort((a, b) => 0.5 - Math.random());

// random de la map
function getRandomLat(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomLng(min, max) {
    return Math.random() * (max - min) + min;
}

let lat;
let lng;
for (let i = 0; i < array.length; i++) {
    lat = getRandomLat(array[i][0], array[i][1]);
    lng = getRandomLng(array[i][2], array[i][3]);
}
let map = L.map('map', {
    dragging: false,
    doubleClickZoom: false,
    boxZoom: false,
    zoomControl: false,
    scrollWheelZoom: false
}).setView([lat, lng], 10);
L.marker([lat, lng]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// map clickable
let map2 = L.map('map2', {
    zoomControl: false,
}).setView([47.2, 2.5], 5);

let marker;

function onMapClick(e) {
    if (!marker) {
        marker = L.marker(e.latlng).addTo(map2);
    } else {
        marker.setLatLng(e.latlng);
    }

}
map2.on('click', onMapClick);

let resultat = document.getElementById("resultat")
let score = document.getElementById("resultat2")
let exp = document.getElementById("resultat3")
document.getElementById("button").addEventListener("click", function () {
    document.getElementById("button").style.display = "none";
    document.getElementById("a").style.display = "block";
    let distances = L.latLng([lat, lng]);
    resultat.innerText = "la distance entre vous et l'arrivée est de " + (distances.distanceTo(marker._latlng) / 1000).toFixed(0) + " kilometres";
    var ligne = [
        [lat, lng],
        [marker._latlng.lat, marker._latlng.lng],
    ];
    var polyline = L.polyline(ligne, { color: 'red' }).addTo(map2);
    map2.fitBounds(polyline.getBounds());
    L.marker([lat, lng]).addTo(map2).bindPopup("Arrivée").openPopup();

    if (distances.distanceTo(marker._latlng).toFixed(0) > 5000000) {
        score.innerText = "score :" + 0;
        exp.innerText = "exp: " + 0;
    } else {
        let calcul = 5000000 - distances.distanceTo(marker._latlng).toFixed(0);
        score.innerText = "score :" + (calcul / 1000).toFixed(0);
        exp.innerText = "exp: " + (calcul / 10000).toFixed(0);


    }

})

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);