'use strict';

// const now = new Date();
//new.Date.parse(2021-5-31);

// console.log(now.setHours(18));
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay()); //день недели нумирация с воскресенья
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 10000; i++) {
  let some = i ** 3;
}

let end = new Date();
alert(`Цикл отработал ${end - start} милисекунд`);