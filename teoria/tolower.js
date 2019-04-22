'use strict';

/**
 * Muestra en minúsculas el siguiente array de letras.
 */
const abc = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
];

abc.forEach((el) => {
  const code = el.charCodeAt(0);

  if (code > 64 && code < 97) {
    const codeLowercase = code + 32;
    console.log(String.fromCharCode(codeLowercase));
  } else {
    console.log(el);
  }
});
