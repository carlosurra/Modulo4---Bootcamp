// 'use strict';

// function mostrarNumero(n) {
//   console.log(n);
// }

// function sumar(n1, n2, callback) {
//   setTimeout(() => {
//     callback(n1 + n2);
//   }, 2000);
// }

// sumar(3, 5, mostrarNumero);

// sumar(2, 7, (result) => {
//   mostrarNumero(result);
// });
//  callbacks teoria en backend trabaja de continuo /no siemprre asincrono, retornas datos cuando se cumpla el callback no la funcion
// ejemplo de callback para ejecutar en casa  y entender funcionalidad del mismo



// let numbers = [1, 2, 3, 4, 5, 6]
// let numFiltered = numbers.filter((number) => (number > 3));

// console.log(numFiltered);

// reduce(), convierte o reduce una matriz o Array hasta un único valor por medio de la función pasada como callback. Este método tiene algunas diferencias significativas respecto a los vistos anteriormente. También recibe una función, pero además recibe un segundo parámetro que será el valor inicial que se usará como primer argumento en la función. De ahí que su sintaxis varíe un poco respecto a map() y filter().

// let numbers = [1, 2, 3, 4, 5, 6]
// let total = 0

// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i]
// };

// console.log(total);

// let numbers = [1, 2, 3, 4, 5, 6]
// let total = numbers.reduce((acc, it) => acc + it, 10);

// console.log(total);

// const developers = [
//     { name: 'Tano', type: 'mobile', age: 4 },
//     { name: 'Inma', type: 'mobile', age: 31 },
//     { name: 'Edgar', type: 'web', age: 35 },
//     { name: 'Fernando', type: 'mobile', age: 33 }
// ];

// let sumAgeMobDev = developers.filter(developer => developer.type === 'mobile')
//     .map(developer => developer.age)
//     .reduce((prev, cur) => prev + cur, 0);

// console.log(sumAgeMobDev);

// multiplicar tiempos por dos y filtrar los mayores de 250 y sumar los resultados

// const time = [15, 20, 30];

// const finalTime = time.map(time => time * 2).filter(time => time > 50).reduce((prev, cur) => prev + cur);
// console.log(finalTime);

// const jeans = [
//     { name: "glenn", fitting: "slim", size: 33 },
//     { name: "liam", fitting: "skinny", size: 34 },
//     { name: "clark", fitting: "regular", size: 32 },
//     { name: "nick", fitting: "regular", size: 36 }
// ];

// const superSize = jeans.filter(jeans => jeans.fitting === "regular").map(jeans => jeans.size).reduce((prev, cur) => prev + cur, 0);

// console.log(superSize);

// prev > acumulador
// cur > elemento de cada iteraccion
// 0 > cualquier valor que quieras añadir a la operacion

//forEach itera por todos los elementos del array pero no retorna nada, a diferencia del map que devuelve un nuevo array.