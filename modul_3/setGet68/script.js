'use strict';

// class User {

//   constructor(name, age) {
//     this.name = name;
//     this._age = age;
//   }

//   # surname = 'Petrushenko';

//   say = () => {
//     console.log(`Имя пользователя: ${this.name} ${this.#surname} возраст: ${this._age}`);
//   }

//   get age() {
//     return this._age;
//   }

//   set age(age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       this._age = age;
//     } else {
//       console.log('Недопустимое значение');
//     }
//   }
// }
// const ivan = new User('ivan', 27);
// console.log(ivan.surname);

// ivan.say();


const nomber = 1;

(function () {
  let nomber = 2;
  console.log(nomber);
  console.log(nomber + 3)
}()); //Ананимная самовызывающаяся функция 

console.log(nomber);

const user = (function () {
  const privat = function () {
    console.log('I am privat');
  };

  return {
    seyHello: privat
  };
}());

user.seyHello();