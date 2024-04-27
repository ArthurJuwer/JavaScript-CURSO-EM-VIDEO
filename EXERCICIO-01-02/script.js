var horas = new Date().getHours()

var textoHoras = document.querySelector("p.horas")

var imagem = document.querySelector("img")

textoHoras.innerHTML = `Agora são ${horas} horas.`

function trocarBackground(cor){
    document.body.style.background = cor
}

if(horas < 6){
    imagem.src = "/EXERCICIO-01-02/imagens/madrugada.jpg"
    trocarBackground("#1c1b1b")
} else if (horas < 12){
    imagem.src = "/EXERCICIO-01-02/imagens/amanhecer.jpg"
    trocarBackground("#FDBE53")
} else if (horas < 18){
    imagem.src = "/EXERCICIO-01-02/imagens/tardecer.jpg"
    trocarBackground("#b9846f")
} else{
    imagem.src = "/EXERCICIO-01-02/imagens/noitecer.jpg"
    trocarBackground("#515154")
}