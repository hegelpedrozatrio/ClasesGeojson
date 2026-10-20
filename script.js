var map = L.map('map').setView([19.291538, -99.502147], 15);

L.tileLayer('https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function anotaMarcadores(dict) {
    let features = dict.features

    for (let i = 0; i < features.length; i++) {

        let properties = features[i].properties
        console.log(properties)

        let id = properties.id
        let description = properties.description
        let image = properties.image
        
        L.marker(features[i].geometry.coordinates.reverse()).addTo(map)
            .bindPopup(`<b>${id}</b> <br> <img class="imagenMarcador"src=${image} width="100"/> <br>${description}`)

    }
}

// function leerDatosModoVago(geojson){
//     L.geoJSON(geojson).addTo(map);
// }

fetch('data.geojson')
    .then(r => r.json())
    .then(datosDeMapa => anotaMarcadores(datosDeMapa));
    // .then(datosDeMapa => leerDatosModoVago(datosDeMapa));


//https://leafletjs.com/examples/geojson/


