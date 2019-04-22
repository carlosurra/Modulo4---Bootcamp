// a Promise is an object that once called upon, will evetually resolve or reject and return a response based on some criteria that is specified within the Promise object.


//     function dividir(dividendo, divisor) {
//         return new Promise((resolve, reject) => {
//             if (divisor === 0) {
//                 return reject(new Error('divisor es 0'));
//             }

//             setTimeout(() => {
//                 return resolve(dividendo / divisor);
//             }, 500);
//         });
//     }

// function multiplicar(m1, m2) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return resolve(m1 * m2);
//         }, 500);
//     });
// }

// function sumar(n1, n2) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return resolve(n1 + n2);
//         }, 500);
//     });
// }

// function restar(r1, r2) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return resolve(r1 - r2);
//         }, 500);
//     });
// }

// multiplicar(3, 5).then((result) => {
//     console.log('result mul', result);

//     return dividir(3, 8);
// }).then((result) => {
//     console.log('result div', result);

//     return sumar(3, 5);
// }).then((result) => {
//     console.log('result sum', result);

//     return restar(3, 5);
// }).then((result) => {
//     console.log('result restart', result);
// }).catch((err) => {
//     console.error('Error', err.message);
// });

function timer(num) {
    return new Promise((resolve, reject) => {
        if (num < 0 || isNaN(num)) {
            return reject(new Error('valor menor que 0 o no es un numero'))
        }
        setTimeout(() => {
            return resolve('done');
        }, num * 1000); /* creo que hay que multiplicar aqui el parametro por algo que lo convierta en milisegundos **/
    });
}

timer(5).then((result) => {
    console.log('done');
}).catch((err) => {
    console.log('error', err.message);
});

// cambiar la funcion de forma que haga la misma operacion por parametro... tiene que ser a traves de una variable.
// el tiempo que metemos por parametro al llamar a la funcion es el que tenemos que aplicar en setTimeout para pasar por la multiplicacion.


// enlace promises
// https://scotch.io/tutorials/javascript-promises-for-dummies