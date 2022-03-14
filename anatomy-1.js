// Function declaration

// 01 Função que não recebe parâmetro e não retorna nada.
function sayHello() {
    console.log('Hello')
}
sayHello()

// 02 Função que não retorna nada mas recebe um parâmetro.
function sayHelloTo(name){
    console.log('Hello ' + name)
}
sayHelloTo('Mike')
// Ou podemos utilizar o template string
function sayHelloTo(name){
    console.log(`Hello ${name}!`)
}
sayHelloTo('Mike')

// 03 Função que não recebe parâmetro e retorna valor.
function returnHi(){
    return 'Hi!'
}
returnHi()
// Aqui, ela não retornará nada pois a função não imprimiu nada no console. Para retornar, faremos:
function returnHi(){
    return 'Hi!'
}
let greeting = returnHi()
console.log(greeting) // Mesma coisa de utilizar console.log(returnHi())

// 04 Função que recebe parâmetro e retorna valor.
function returnHiTo(name) {
    return `Hi ${name}!`
}
console.log(returnHiTo('John'))