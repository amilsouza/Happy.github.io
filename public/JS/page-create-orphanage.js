// create map
const map = L.map('mapid').setView([-12.9770569,-38.4960377], 15);

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
})

let marker;

map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    //remover icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng ],{icon}).addTo(map)
    
})

//add photos

function addPhotoField(){
    // pegar o container de photos com o #images (guardar em memória)
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //Se o container estiver vazio, eu não quero que duplique
    const input = newFieldContainer.children[0]
    if(input.value == ""){return} //não vai acontecer nada
    //limpar o input antes que duplicar
    input.value = ""
    // adicionar o clone ao container de #imagem
    container.appendChild(newFieldContainer)
}

function deleteField(event){// o event passa a informação de quem esta clicando ele
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <=1){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    //deletar o campo
    span.parentNode.remove();
}

//Select "Sim" or "Não"
function toggleSelect(event){
    //Remover a class active (dos botoes)
    document.querySelectorAll(".button-select button")
    .forEach( function(button){
        button.classList.remove('active')
    })
    //Pegar o botão clicando
    const button = event.currentTarget
    button.classList.add('active')


    //Atualizar o meu input hidden com o valor selecionado 
    const input = document.querySelector('#opening_on_weekends')
    
    //verificar se sim ou não
    input.value = button.dataset.value
}


