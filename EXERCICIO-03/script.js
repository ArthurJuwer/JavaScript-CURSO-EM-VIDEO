const btn = document.querySelector(".box-btn button")
const img = document.querySelector(".resultado img")
const checkedMasc = document.querySelector("#masc")
const checkedFem = document.querySelector("#fem")
const anoAtual =  new Date().getFullYear()
const idadeAntiga = document.querySelector(".box-nascimento input")
const txtResultado = document.querySelector(".resultado p")

btn.addEventListener("click", ()=>{

    let idade =  anoAtual - idadeAntiga.value
    if(idade < 140 && idade >= 0){
        img.style.display = "inline"
        if(checkedMasc.checked == true){
            
            if(idade < 10){
                img.src = "/EXERCICIO-03/images/Criança-Masculino.jpg"
                txtResultado.innerHTML = `Você é uma Criança Masculina com ${idade} anos`
            } else if(idade < 18){
                img.src = "/EXERCICIO-03/images/Adolescente-Masculino.jpg"
                txtResultado.innerHTML = `Você é um Adolescente Masculino com ${idade} anos`
            } else if(idade < 45){
                img.src = "/EXERCICIO-03/images/Adulto-Masculino.jpg"
                txtResultado.innerHTML = `Você é um Adulto Masculino com ${idade} anos`
            } else{
                img.src = "/EXERCICIO-03/images/Idoso-Masculino.jpg"
                txtResultado.innerHTML = `Você é um Idoso Masculino com ${idade} anos`
            }

        } else if(checkedFem.checked == true){
            if(idade < 10){
                img.src = "/EXERCICIO-03/images/Criança-Feminino.jpg"
                txtResultado.innerHTML = `Você é uma Criança Feminina com ${idade} anos`
            } else if(idade < 18){
                img.src = "/EXERCICIO-03/images/Adolescente-Feminino.jpg"
                txtResultado.innerHTML = `Você é uma Adolescente Feminina com ${idade} anos`
            } else if(idade < 45){
                img.src = "/EXERCICIO-03/images/Adulto-Feminino.jpg"
                txtResultado.innerHTML = `Você é uma Adulta Feminina com ${idade} anos`
            } else{
                img.src = "/EXERCICIO-03/images/Idoso-Feminino.jpg"
                txtResultado.innerHTML = `Você é uma Idosa Feminina com ${idade} anos`
            }
        }
    }
})