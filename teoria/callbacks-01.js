// 'use strict';

// A callback is a function that is to be executed after another function has finished executing.
// In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.
https: //codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced

    // function first() {
    //     // Simulate a code delay
    //     setTimeout(function() {
    //         console.log(1);
    //     }, 500);
    // }

    // function second() {
    //     console.log(2);
    // }
    // first();
    // second();



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
    // function timer(callback) {
    //     console.log("hola");
    //     setTimeout(() => {
    //         callback("done");
    //     }, 2000);
    // };
    // timer(function(r) {
    //     console.log(r);
    // });
    // console.log("FIN");

    // function regresar(x) {
    //     console.log(x);
    // };
    // timer(regresar);
    // promesas callbacks relacionados
    // las promises se establecen para evitar el callbackhell