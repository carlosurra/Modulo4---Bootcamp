'use strict';

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

// console.log(printRows(10));

// piramide invertida

// function restRows(num) {
//     for (i = num; i >= 0; i--) {
//         let arr = [];
//         for (j = 0; j < i + 1; j++) {
//             arr.push(j + 1);
//         }
//         console.log(arr.join());
//     }
// }
// console.log(restRows(9));
// let arr = ["a", "b", "c", "d"];

// function convert(arr) {
//     let result = "";
//     for (i = 0; i < arr.length; i++) {
//         let code = arr[i].charCodeAt(0);
//         if (code >= 97 && code <= 122) {
//             code -= 32;
//         }
//         result += String.fromCharCode(code);
//     }
//     return result;
// };
// // // console.log(convert(arr));


// let abc = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
// ];

// abc.forEach((el) => {
//     let code = el.charCodeAt(0);

//     if (code > 64 && code < 97) {
//         let codeLowercase = code + 32;
//         console.log(String.fromCharCode(codeLowercase));
//     } else {
//         console.log(el);
//     }
// });





// console.log(convert(["a", "b", "c", "d"]));

// let arr = ["a", "b", "c", "d"];
// arr = arr.map(function(arr) { 
// return arr.toUpperCase() });
// console.log(arr);

// arrow function 
// let arr = ["a", "b", "c", "d"];
// arr = arr.map((arr) => arr.toUpperCase());
// console.log(arr);


//funcion que reciba un numero de 0 a 12, si el numero es menor de 5 return mal , si esta entre 5 y 8 return bien y si es mayor de 8 return mejor

// function check(num) {
//     if (num < 5) {
//         return "Mal";
//     } else if (num > 5 && num < 8) {
//         return "Bien";
//     } else {
//         return "Mejor";
//     };
// };
// console.log(check(0));


// forma correcta de declarar el return, tras cada if ( que preferiblemente se declararan al mismo nivel ) se declara un result, y al final del ultimo if se retorna el result, llamando asi al final de la function.
// function check(num) {
//     let result;
//     if (num < 5) {
//         result = "Mal";
//     } else if (num > 5 && num < 8) {
//         result = "Bien";
//     } else if (num > 8 && num < 12) {
//         result = "Mejor";
//     };

//     return result;



// function check(num) {
//     if (num < 5) {
//         return "Mal";
//     }
//     if (num > 5 && num < 8) {
//         return "Bien";
//     }
//     if (num > 8 && num < 12) {
//         return "Mejor";
//     };
// };
// console.log(check(11));


// let numbers = [1, 2, 3, 4, 5, 6]
// let numSqrt = []

// for (let i = 0; i < numbers.length; i++) {
//     numSqrt[i] = numbers[i] * numbers[i]
// }

// console.log(numSqrt);

// let numbers = [1, 2, 3, 4, 5, 6]
// let numSqrt = numbers.map(function(number) {
//     return number * number
// });
// console.log(numSqrt);

// let numbers = [1, 2, 3, 4, 5, 6]
// let numSqrt = numbers.map(number => number * number);
// console.log(numSqrt);

// PIRAMIDE PERFECTA




// function displayPyramid(n) {
//     for (i = 0; i < n; i++) {
//         let str = '';
//         for (j = 1; j < n - i; j++) {
//             str = str + ' ';
//         }
//         for (k = 1; k <= (2 * i + 1); k++) {
//             str = str + '*';
//         }
//         console.log(str);
//     };
// };

// console.log(displayPyramid(10));

// function pyramid(n) {



//     for (let i = 1; i <= n; i++) {

//         let str = ' '.repeat(n - i);

//         let str2 = '*'.repeat(i * 2 - 1)



//         console.log(str + str2 + str);

//     }

// }

// pyramid(5);

// let isMomHappy = false;

// let willIGetNewPhone = new Promise((resolve, reject) => {
//     if (isMomHappy) {
//         let phone = {
//             brand: 'Vertu',
//             color: 'Silver'
//         };
//         resolve(phone);
//     } else {
//         let reason = new Error('mom is not happy');
//         reject(reason);
//     }
// });

// let showOff = function(phone) {
//     let message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';
//     return Promise.resolve(message);
// };

// let askMom = function() {
//     willIGetNewPhone.then(showOff)
//         .then(fulfilled => console.log(fulfilled))
//         .catch(error => console.log(error.message))
// };
// askMom();

// let isMomHappy = false;

// // Promise
// let willIGetNewPhone = new Promise(
//     (resolve, reject) => {
//         if (isMomHappy) {
//             let phone = {
//                 brand: 'Vertu',
//                 color: 'Gold'
//             };
//             resolve(phone);
//         } else {
//             let reason = new Error('mom is not happy');
//             reject(reason);
//         }

//     }
// );

// // 2nd promise
// async function showOff(phone) {
//     return new Promise(
//         (resolve, reject) => {
//             var message = 'Hey friend, I have a new ' +
//                 phone.color + ' ' + phone.brand + ' phone';

//             resolve(message);
//         }
//     );
// };

// // call our promise
// async function askMom() {
//     try {
//         console.log('before asking Mom');

//         let phone = await willIGetNewPhone;
//         let message = await showOff(phone);

//         console.log(message);
//         console.log('after asking mom');
//     } catch (error) {
//         console.log(error.message);
//     }
// }











/**ejercicio 1 ¿cual es el valor de la variable z? */
function calculateZ() {
    const a = 4;
    const b = 2;
    const c = 6;
    const d = 2;
    const z = (a * b) / (c + d);
    return z;

};

console.log(calculateZ());

/** ejercicio 2 ¿cual es el valor de las siguientes expresiones? */

function calculateA() {
    const a = 2 / 4;
    return a;
}
console.log(calculateA()); /**0.5 */

function calculateB() {
    const b = 2 ** 3;
    return b;
}
console.log(calculateB()); /**8 */

function calculateC() {
    const c = 20 % 6;
    return c;
}
console.log(calculateC()); /**2 */

function calculateD() {
    const d = 3 > 2;
    return d;
}
console.log(calculateD()); /**true */

function calculateE() {
    const e = 8 - 5 < 4;
    return e;
}
console.log(calculateE()); /**true */

/** ejercicio 3 ¿cual es el valor de la variable z? */

function calculateZ() {
    const x = 1;
    const z = x ? 4 : 5;
    return z;
}
console.log(calculateZ()); /**4 */


/** escribe un  programa que dada la altura en metros de una persona y su edad, obtenga su indice de masa corporal (IMC) recomendado en base a la siguiente formula:
 * IMC = (peso en kg / Altura (m) al cuadrado)
 */

function calculateImc(height, kg) {

    const imc = kg / (Math.pow(height, 2));
    return imc;

};
console.log(calculateImc(189, 88.5));


/** escriba un programa que calcule el area de un rectangulo y su perimetro a partir de la base y la altura */

function calculateRectangleArea(base, height) {
    const area = base * height;
    return area;
};

console.log(calculateRectangleArea(50, 35));

function calculateRectanglePerimeter(base, height) {
    const perimeter = 2 * (base + height);
    return perimeter;
};

console.log(calculateRectanglePerimeter(75, 25));


/**  dado 3 numeros , indicar cual es el mayor*/

function calculateLargestNum(x, y, z) {
    if (x > y && x > z) {
        return x;
    }
    if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
};

console.log(calculateLargestNum(147, 984, 985));

/** si los numeros se encontrasen dentro de un array */

function calculateLargest(array) {
    const largest = Math.max.apply(Math, array);
    return largest;
};

console.log(calculateLargest([267, 306, 108]));


/** dada una cantidad, de maximo 888,88€, hacer un programa que calcule cual es el numero minimo de billetes y monedas de curso legal que equivalen a dicha cantidad */



function countChange(amount) {
    const currency = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    const change = [];
    var changed = 0;
    while (changed < amount) {
        for (var i = 0; i < currency.length; i++) {
            if (amount - currency[i] >= 0) {
                change.push(currency[i]);
                changed += currency[i];
                amount -= currency[i];
            }
        }
    }
    return change;

};

console.log(countChange(888.88))



/** dados dos numeros, hacer un programa que indique si un es multiplo del otro */

function calculateMultiple(num1, num2) {
    if (num1 % num2 == 0) {
        return true;
    } else {
        return false;
    }
};

console.log(calculateMultiple(30, 10));


/** cual es el resultado de z */

const x = 2;
let z;

if (5 !== x) {
    if (3 == x) {
        z = -1;
    } else {
        z = x;
    }
} else {
    z = 0;
};

console.log(z); /**z = 2 */

/** una compañia de agua esta implantando un nuevo sistema de cobro . Para cada vivienda se tiene en cuenta:
 * Los primeros 50 litros son gratis
 * Entre 50 y 200 litros se cobra a 0.1 el litro
 * A partir de 200 se cobra a 0.3
 * El cobro minimo es de 10€. Si los litros de agua a facturar son menor de 10€, entonces la factura final sera de 10€
 */


function calculateBill(litres) {
    const intake = litres - 50;
    let bill = 0;

    if (intake < 100) {
        bill = 10;
    }
    if (intake > 100 && intake <= 250) {
        bill = intake * 0.1;
    } else if (bill < 10) {
        bill = 10;
    }
    if (intake > 250) {
        bill = ((intake - (intake - 250)) * 0.1) + ((intake - 250) * 0.3);
    }
    return bill;
};

console.log(calculateBill(350));


/** escribe una funcion que acepte como parametro un numero entero N y calcule 1+2+3+...3+N */


function add(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result;
};

console.log(add(18));



function sumFirstNums(n) {
    const result = (n * (n + 1)) / 2;
    return result;
}

console.log(sumFirstNums(18));





/** indica si un año es bisiesto : un año es bisiesto en el calendario gregoriano , si es divisible entre 4 y no divisible entre 100, y tambien si es divisible entre 400.
 * @param {number} año
 * @param {boolean} esBisiesto
 * function esBIsiesto(año)
 */

function esBisiesto(año) {
    if ((año % 4 == 0) && (año % 100 !== 0) || (año % 400 == 0)) {
        return true;
    } else {
        return false;
    }
};

console.log(esBisiesto(2016));





/**  haz un funcion que reciba dos parametros , un numero de filas y un numero de columnas y dibuje:
 *        *****
 *        *****
 *        *****
 */


function printStars(rows, columns) {
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            console.log('*');
        }
        console.log("\n");
    }

};

console.log(printStars(3, 5));


/** escribe una funcion que calcule el factorial de un numero. el factorial de un numero , si el numero es N(5por ejemplo), seria 5 x 4 x 3 x 2 x 1 */

function calculateFactorial(number) {
    let total = 1;

    for (let i = 0; i < number; i++) {
        total = total * (number - i);
    }
    return total;
};
console.log(calculateFactorial(10));

/** haz una funcion que reciba 3 numero y los devuelva ordenados en un array*/

function orderNum(n1, n2, n3) {
    let arr = [];
    arr.push(n1);
    arr.push(n2);
    arr.push(n3);
    arr.sort(function(a, b) {
        return a - b;
    });
    return arr;
};

console.log(orderNum(4, 9, 1));


/** escribe una funcion que recibe un numero y devuelva un array con los volares que conforman ese numero */

function createArray(number) {
    let arr = number.toString().split('').map(Number);
    return arr;
};
console.log(createArray(1592));


/**  hacer una funcion que reciba un array de numeros y nos diga cuantos numeros hay de cada*/

function countNumbers(array) {
    let count = {};
    array.forEach(function(i) {
        count[i] = (count[i] || 0) + 1
    });
    return count;
};

console.log(countNumbers([1, 1, 8, 7, 9, 6, 7, 9, 2, 4, 6, 4, 7, 33, 25, 17, 3, 8]));


/** haz una funcion que reciba un array de numeros y devuelva la suma de los numeros divisibles por 3 y 5 */

function addDivisible(numbers) {
    const newArray = numbers.filter(number => number % 3 === 0 && number % 5 === 0);
    const add = (accumulator, currentValue) => accumulator + currentValue;
    console.log(newArray.reduce(add));
};

addDivisible([15, 25, 30, 12, 76, 60, 300]);



/** haz una funcion que devuelva una frase y devuelva cuantas vocales tienes */


function countVowels(phrase) {
    return (phrase.match(/[aeiou]/gi) == null) ? 0 : phrase.match(/[aeiou]/gi).length;
};

console.log(countVowels('cuenta todas la vocales de esta frase'));


/** haz una funcion que reciba un array de numeros y devuelva el mayor. No utilizar math.max */

function calculateLargest(array) {
    let max = array[0];
    for (let i = 0; i < array.length; ++i) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
};

console.log(calculateLargest([58, 34, 67, 984, 1, 28, 67]));


/** escribe una funcion que pida un numero y nos diga si es divisible por 2,3,5 o 7 (solo hay que comprobar que lo es por uno de los cuatro) */

function checkNum(num) {
    if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
        return true;
    } else {
        return false;
    }
};

console.log(checkNum(1269));


/** haz una funcion que reciba un numero y devuelva un string indicando si es par o impar */


function checkEvenOdd(num) {
    if (num % 2 == 0) {
        return 'is even';
    } else {
        return 'is odd';
    }
};

console.log(checkEvenOdd(69));

/** haz una funcion que reciba los 8 digitos del dni y calcule su letra. la formula es:
 * sumar todos los digitos del dni
 * obtener el resto de la division entera de la suma anterior y el numero 23
 * mirar la letra correspondiente usando el siguiente array. la letra estara en la posicion calculada en el paso 2
 * const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 */

function calculateLetter(dni) {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let result = dni.toString().split('').map(Number).reduce(function(a, b) { return a + b; }, 0);
    let letra = letras[result % 23];
    return letra;
};

console.log(calculateLetter(71656405));


/**
 * 1. haz una funcion 'lanzarDosDados' que devuelva un array con el resultado (ej. [3,6]). Para simular el lanzamiento puedes utilizar la funcion math.random y sacar valores entre 1 y 6
 * 2. sumar el resultado de lanzar los dados 
 * 3. guardar el resultado en un array "reslutadoLanzamiento"
 * 4. hacer 36.000 lanzamientos
 * 5. sacar cual fue el resultado mas repetido
 */

function launchTwoDice() {
    let dice1 = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    let dice2 = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    let dices = [];
    dices.push(dice1);
    dices.push(dice2);
    let sum = dices.reduce(function(a, b) {
        return a + b;
    });
    let resultOfLaunch = [];
    resultOfLaunch.push(sum);
    return resultOfLaunch;
};

let allLaunches = [];

for (let i = 0; i < 36000; i++) {
    let result = launchTwoDice();
    allLaunches[result] = allLaunches[result] + 1;
    allLaunches.push(result);

};

console.log(allLaunches);

