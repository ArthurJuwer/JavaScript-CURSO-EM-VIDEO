// example functions in this case, the game Odd or Even
function NumberOddOrEven(VerificationNumber){

let VerifyisEven = VerificationNumber % 2 == 0

    if(VerifyisEven){
        return "Even"
    }
    return "Odd"
}

const numberToVerification = 12
const resultNumberOddOrEven = NumberOddOrEven(numberToVerification)

console.log(`the number ${numberToVerification} after the verification is ${resultNumberOddOrEven}`)