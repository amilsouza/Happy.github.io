// create map
const map = L.map('mapid').setView([-12.9770569,-38.4960377], 16);

// create and add a tileLayer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
   /* {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }*/
).addTo(map);

function addMarker({id, name, lat, lng}){

    //create icons
    const icon = L.icon({
        iconUrl: "images/images/map-marker.svg",
        iconSize:[58, 68],
        iconAnchor:[29, 68],
        popupAnchor:[170, 2],
    })

    // create popup
    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minWidth:240,
        minHeigth:240,
    }).setContent(`${name} <a href="/orphanage?id=${id}" >  <img src="images/images/arrow-white.svg" target="_blank"> </a>`)
    //create a popup
    L.marker([lat,lng], {icon: icon}) // É adicionado ao objeto (da biblioteca) a variavel que eu fiz (line 12)
    .addTo(map)
    .bindPopup(popup)//variavel que eu fiz e coloque como um novo objeto em L


}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng,
    }

    addMarker(orphanage)
})