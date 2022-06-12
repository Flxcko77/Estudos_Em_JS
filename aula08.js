//-------> condições aninhadas (else if{}) <------------
var idade = 60
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('não vota')
} else if (idade >= 18 && idade < 65){
    console.log('voto obrigatorio')
} else {
    console.log ('Voto opicional')
}
