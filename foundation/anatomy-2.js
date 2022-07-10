// Function expression
const sum = function (a, b){
        return a + b
}
const result = sum(10, 65)
console.log(result)

const anotherSum = sum
console.log(anotherSum(9, 8))

let x = 3
// 3() doesn't work because it's not a function
// x()doesn't work because it's not a function
console.log(x)

x = sum
console.log(x(18, 9))

// É possível atribuir ao valor de uma variável ou mesmo de uma constante o valor de uma função.
// It is possible to assign to the value of a variable or even a constant the value of a function.