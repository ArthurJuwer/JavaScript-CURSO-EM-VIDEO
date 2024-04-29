const inicio = document.querySelectorAll(".container-box input")[0]
const fim = document.querySelectorAll(".container-box input")[1]
const passo = document.querySelectorAll(".container-box input")[2]

const resultado = document.querySelector(".container-resultado .contador")

const btnContar = document.querySelector(".container-button button")

btnContar.addEventListener("click", ()=>{
    if((inicio.value != ""|| fim.value != "" || passo.value != "") && (passo.value != 0)){
        
        if(inicio.value < fim.value){
            for(let i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)){
                resultado.innerHTML += `${i} -> `
            }
        } else {
            for(let i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value)){
                resultado.innerHTML += `${i} -> `
            }
        }
        resultado.innerHTML += "FIM"
    } else {
        alert("Números Invalidos")
    }
    
})
