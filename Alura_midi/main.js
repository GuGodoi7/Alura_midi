
function toca_som(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log("Elemento não encontrado ou invalido ")
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); 

for (let contador = 0; contador < listaDeTeclas.length; contador++ ) {
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const adAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        toca_som(adAudio)
    }
    tecla.onkeydown = function (evento) {
        
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove ('ativa')
    }
}
