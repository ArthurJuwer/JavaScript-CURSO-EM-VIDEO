// VARIAVEIS COMPOSTAS ARRAYS
let vagaCarros = ["Carro Azul", "Carro Preto", "Carro Amarelo"]

console.log(vagaCarros[0]) // Carro Azul
// aray vagaCarros // [0] inidice // valor do elemento Carro Azul

console.log(`Nosso vetor é o ${vagaCarros[1]}`)

vagaCarros[3] = "Carro Branco"
console.log(`O vetor criado foi ${vagaCarros[3]}`)
// ou

vagaCarros.push("Carro Verde")
console.log(`O vetor adicionado ao final foi ${vagaCarros[4]}`)

console.log(`A quantidade de carros nas vagas é  ${vagaCarros.length} vagas`)

let numeros = [4,5,2,1,3]

console.log("Por padrão os numeros estão vindo " + numeros)
console.log("Organizando o vetor numeros fica: " + numeros.sort())

// ler todos

console.log("FOR -> Lendo todos os valores das Vagas:")

for(let i = 0; i < vagaCarros.length; i++){
    console.log(`A posição ${i} -> ${vagaCarros[i]}`)
}

console.log("FOR IN -> Lendo todos os valores das Vagas:")
for(let i in vagaCarros){
    console.log(`A posição ${i} -> ${vagaCarros[i]}`)
}

// procurar onde esta tal valor

console.log(`Qual posição esta o Carro Amarelo? ele está no index ${vagaCarros.indexOf("Carro Amarelo")}`)

