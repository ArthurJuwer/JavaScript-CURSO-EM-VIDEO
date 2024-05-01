const btnAdicionar = document.querySelector(".container-numbers button")
const textResultado = document.querySelector(".container-resultado") 
const numerosRecebidos = []

btnAdicionar.addEventListener("click", ()=>{
    let numerosInput = document.querySelector(".container-numbers input")
    let numerosInputValor = numerosInput.value
    
    let numeroInvalido = numerosRecebidos.indexOf(numerosInputValor) != -1 || numerosInputValor >= 100 || numerosInputValor < 1 

    if(numeroInvalido){
        alert("Insira um valor diferente")
    }
    else{
        numerosRecebidos.push(numerosInputValor)
        let item = document.createElement("option")
        item.text = `Valor ${numerosInputValor} adicionado`
        let select = document.querySelector(".container-valores select")
        select.appendChild(item)
        textResultado.innerHTML = ""
    }
})
const btnFinalizar = document.querySelector(".container-valores button")

btnFinalizar.addEventListener("click", ()=>{
    
    textResultado.innerHTML = ""

    let totalNumeros = numerosRecebidos.length
    let maiorNumeros = numerosRecebidos[0]
    let menorNumeros = numerosRecebidos[0]
    let somaNumeros = 0
    
    for(let i = 0; i < numerosRecebidos.length;i++){
        somaNumeros += Number(numerosRecebidos[i])
        if(numerosRecebidos[i] > maiorNumeros){
            maiorNumeros = numerosRecebidos[i]
        }
        if(numerosRecebidos[i] < menorNumeros){
            menorNumeros = numerosRecebidos[i]
        }
    }



    let mediaNumeros = totalNumeros / somaNumeros


    textResultado.innerHTML += `<p>Ao todo, temos ${totalNumeros} numeros cadastrados</p>`
    textResultado.innerHTML += `<p>O maior valor informado foi ${maiorNumeros}</p>`
    textResultado.innerHTML += `<p>O menor valor informado foi ${menorNumeros}</p>`
    textResultado.innerHTML += `<p>Somando todos os valores, temos ${somaNumeros}</p>`
    textResultado.innerHTML += `<p>A media de todos os valores é ${mediaNumeros}</p>`


    
})

