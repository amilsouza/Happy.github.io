//setting
const options = {
    dragging:false,
    touchZoom: false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false,
}
//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng
// create map
const map = L.map('mapid', options).setView([lat,lng], 17);

// create and add a tileLayer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
   /* {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }*/
).addTo(map);

//create icons
const icon = L.icon({
    iconUrl: "images/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2],
})



//create a popup
L
.marker([lat,lng], {icon: icon}) // É adicionado ao objeto (da biblioteca) a variavel que eu fiz (line 12)
.addTo(map)

//image gallery

function selectImage (event){
    const button = event.currentTarget

    //remover todas as classes active
    const buttons = document.querySelectorAll(".images button")// espera os botões serem clicados
    buttons.forEach(function(button) { // vai em cada elemento (for Each) e faz alguma operação (esta entre as aspas)
        button.classList.remove("active") // .classList e uma propriedade que pode atuar na classe de uma tag, fazendo qualque função com suas classes. No exemplo, removemos a classe active
    })
    // selecionar a image clicada
    const imagem = button.children[0]
    const imagemContainer = document.querySelector(".orphanage-details > img")
    // atualizar o container de imagem
    imagemContainer.src = imagem.src
    // adicionar a classe active
    button.classList.add("active")
}