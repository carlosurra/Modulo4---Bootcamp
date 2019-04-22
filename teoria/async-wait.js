// const isMomHappy = true;

// const willIGetNewPhone = new Promise((resolve, reject) => {
//     if (isMomHappy) {
//         const phone = {
//             brand: 'Vertu',
//             color: 'dark green'
//         };
//         resolve(phone);
//     } else {
//         const reason = new Error('mom is not happy');
//         reject(reason);
//     }
// });

// async function showOff(phone) {
//     return const message = 'here is my brand new ' + phone.color + ' ' + phone.brand + ' phone';

// };


// async function askMom() {
//     try {
//         const phone = await willIGetNewPhone;
//         const message = await showOff(phone);
//         console.log(message);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// (async() => {
//     await askMom();
// })();

// async function div(n1, n2) {
//     if (n2 === 0) {
//         throw new Error('error!');
//     }
//     return n1 / n2
// }

// (async() => {
//     try {
//         const resultado = await div(5, 0);
//         console.log(resultado)
//     } catch (error) {
//         console.log(error.message);
//     }
// })();

// ejercicio 1
// haced el de timer con async y await (setTimeOut es un callback y quizas hay que hacer promises (este jodido , hacer mejor el otro primero)
// hay que convertir settimeout a promise porque los callbacks no se pueden pasar directamente con async await

// ejercicio 2

// programa que multiplique con async y await usando clg por todos lados para controlar el flujo

// async function multiply(n1, n2) {
//     if (n1 < 0 || n2 < 0) {
//         throw new Error('error!');
//     }
//     return n1 * n2;
// };

// (async() => {
//     try {
//         const resultado = await multiply(5, 8);
//         console.log(resultado)
//     } catch (error) {
//         console.log(error.message);
//     }
// })();