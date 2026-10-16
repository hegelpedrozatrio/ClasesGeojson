var map = L.map('map').setView([19.291538, -99.502147], 13);

L.tileLayer('https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([19.291538, -99.502147]).addTo(map)
    .bindPopup('<b>UAM Lerma</b> <br> <img class="imagenMarcador"src="https://static01.nyt.com/images/2025/03/02/business/02Musk-internet-print-illo/02Musk-internet-print-illo-articleLarge.png" width="100"/> <br>Elon Musk sabe donde estudio')
    .openPopup();
