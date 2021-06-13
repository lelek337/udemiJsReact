'use strict';

//Filter

// const names = ['Ivan', 'Anna', 'Ksenia', 'Voldemar'];

// const shortNames = names.filter(function(name) {
//   return name.length < 5;
// });
// console.log(shortNames);

//map

// let answers = ['IvAn', 'AnNa', 'Hello'];

// // const result = answers.map(item => {
// //   return item.toLowerCase();
// // });
// answers = answers.map(item => item.toLowerCase());
// console.log(answers);

//every/some

// const some = [4, 5, 7];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));


// reduce

// const arr = [1, 3, 5, 7, 6, 2];

// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

//пример

const obj = {
  ivan: 'persone',
  anna: 'persone',
  dog: 'animal',
  cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);