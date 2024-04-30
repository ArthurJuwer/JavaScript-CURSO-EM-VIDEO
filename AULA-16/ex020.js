function descoveryFatorial(number) {

    let currentFatorial = 1
    
    for(let i = number; i > 1; i--){
        currentFatorial *= i
    }
    return currentFatorial
}

console.log(descoveryFatorial(5))