const btnGerar = document.querySelector(".container-numbers button")

btnGerar.addEventListener("click", ()=>{
    
    let numero = document.querySelector(".container-numbers input")
    let tabuada = document.querySelector(".container-resultado select")

    if(tabuada.textContent != ""){
        btnGerar.innerHTML = "Gerar Tabuada"
        tabuada.innerHTML = ""
    } else {
        numero = Number(numero.value)

        for(let i = 0; i <= 10; i++){        
        let item = document.createElement("option")
        item.text = `${numero} x ${i} = ${numero*i}`
        tabuada.appendChild(item)
        btnGerar.innerHTML = "Limpar"
    }
    }

    
})