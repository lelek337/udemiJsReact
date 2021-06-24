'use strict';

// new RegExp('pattern', 'flags');
// /pattern/flags

// const ans = prompt('Введите ваше число');

// const reg = /\d/;
// console.log(ans.match(reg));

const str = 'my name is R2D2';

console.log(str.match(/\D/ig));

// обратные классы
//\D - не числа
//\W - не буквы


//i - мы хотим найти что то вне зависимости от регистра
//g - мы пытаемся найти сразу несколько вхождений
//m - включает многострочный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, '*'));

// console.log('12-15-25'.replace(/-/g, ':'));

// классы регю выражений
// \d - мы ищем цифры
//\w - ищем все слова буквы
//\s - ищем все пробелы