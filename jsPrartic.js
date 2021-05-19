"use strict";

// if (4 == 9) {
//     console.log('ok');
// } else {
//     console.log('error');
// }

// const nam = 50;
// if (nam < 49) {
//     console.log('error');
// } else if (nam > 100) {
//     console.log('много');
// } else {
//     console.log('ok');
// }

// (nam === 50) ? console.log('ok'): console.log('error');

// const nam = 50;
// switch (nam) {
//     case 49:
//         console.log('неверно');
//         break;
//     case 100:
//         console.log('неверно');
//         break;
//     case 50:
//         console.log('ok');
//         break;
//     default:
//         console.log('не в этот раз');
//         break;
// }


// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// let num = 50;

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// let num = 20;

// function showFirstMessenge(text) {
//     console.log(text);
//     let num = 10;
// }

// showFirstMessenge('Hello Word');
// console.log(num);

// console.log(calc(4, 3));
// console.log(calc(5, 4));
// console.log(calc(8, 13));

// function calc(a, b) {
//     return (a + b);
// }

// function ret() {
//     let num = 50;


//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('Hello')
// };


// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// }

//const str = 'teSt';
//const arr = [1, 2, 4];

//console.log(str.toUpperCase());
//console.log(str.toLowerCase());

//console.log(str[3]);
//console.log(str);

//const fruit = 'Some fruit';

//console.log(fruit.indexOf("q"));

//const logg = 'Hello world';

//console.log(logg.slice(-5, -1));
//console.log(logg.substring(6, 11));
//console.log(logg.substr(6, 5));


// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2';
// console.log(parseInt(test));


// function first() {

//     //Do something

//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }
// first();
// second();

// function learnJS(leng, callback) {
//     console.log(`Я учу: ${leng}`);
//     callback();
//}

// learnJS('javaScript', function() {
//     console.log('Я прошол этот урок');
// });
// function done() {
//     console.log('Я прошол этот урок');
// }

// learnJS('javaScript', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     heigth: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('test');
//     }
// };
// options.makeTest();
// //Деструкторизация
// const { border, bg } = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);
// delete options.name;
// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// const arr = [1, 13, 4, 16, 8];
// arr.sort(compareNume);
// console.log(arr);

// function compareNume(a, b) {
//     return a - b;
// }
// arr[100] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, err) {
//     console.log(`${i} ${item} внутри массива ${err}`);
// })

// arr.pop();
// arr.push(10);
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split('', '');
// console.log(products);
// console.log(products.join('; '));

// let a = 5;
// b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; //ссылка
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbrs = {
//     a: 5,
//     b: 7,
//     c: {
//         x: 10,
//         y: 11
//     },
// };

// const newNumbrs = copy(numbrs);
// newNumbrs.a = 10;
// newNumbrs.c.x = 15;
// // console.log(newNumbrs);
// // console.log(numbrs);

// const add = {
//     z: 12,
//     n: 9
// };

// const clon = Object.assign({}, add);
// clon.z = 20;
// // console.log(add);
// // console.log(clon);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'fbfbfb';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['worldpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

}
const num = [2, 5, 7];
log(...num);

const arr = ['a', 'b'];
const newArr = [...arr];

const q = {
    one: 1,
    two: 2
};
const newObj = {...q };