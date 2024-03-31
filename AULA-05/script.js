// SENDO ESCRITO TUDO NO TERMINAL DO NODE

// INDENTIFICADORES

/*
1. Podem começar com letra, $ ou _ (carro, $carro ou _carro)
2. Não podem começar com números 
3. É possivel usar letras ou números (carro1)
4. É possivel usar acentos e simbolos (número)
5. Não podem conter espaços 
6. Não podem ser palavras reservadas 
*/

// DICAS 

/*

1. Maiusculas e minusculas fazem diferença ( var a = 18 console.log(A))
2. tente utilizar nomes coerentes para as variáveis
3. 

*/

var idade = 18
var salario = 1550.5
var sexo = 'M'

var n1 = 8
var n2 = 5

var resultado = n1 + n2 // 13

// TIPOS DE DADOS

/*

// TYPE OF

number { infinity NaN - not a number }
string
boolean
null
undefined
object{ array }
function

*/

var n = 200
typeof n // number
n = "Google"
typeof n // string

typeof 6 // number
typeof "6" // string

typeof [] // object
typeof function(){} // function

typeof NaN // number
typeof null // object