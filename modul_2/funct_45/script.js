'use strict';

// const num = new Number(3);
// console.log(num);

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() {
//     console.log(`Hello ${this.name}`);
//   };
// }
// User.prototype.exit = function() {
//   console.log(`Пользватель ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 47);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);


// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   }
// };
// obj.sum();

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() {
//     console.log(`Hello ${this.name}`);
//   };
// }
// let ivan = new User('Ivan', 47)

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }
// const user = {
//   name: 'John'
// };
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//   return this * num;
// }

// const duble = count.bind(2);
// console.log(duble(3));
// console.log(duble(13));

//1) Обычная функция: this = window если use strict = undefined
//2) Контекст у методов объекта - сам объект
//3) This в консруторах и классах это новый экземпляр объекта
//4) Ручная привязка this call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//   // console.log(this);
//   this.style.backgroundColor = 'red';
// });

// btn.addEventListener('click', function(e){
  
//   e.target.style.backgroundColor = 'red';
// });

// const obj = {
//   num: 5,
//   sayNumber: function() {
//     const say = () => {
//       console.log(this.num);
//     };

//     say();

//   }
// };
// obj.sayNumber();

// const double = (a) => {
//   return a * 2;
// };
//когда тело функции одна строка то можно записать так:
// const double = (a, b) => a * 2; 
// console.log(double(4));


      //Классы

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
} 

class ColoredRectanglewidthText extends Rectangle {
  constructor(height, width, text, bgcolor) {
    super(height, width);
    this.text = text;
    this.bgcolor = bgcolor;
  }

  showMyProps() {
    console.log(`Текст: ${this.text}, Цвет: ${this.bgcolor}`);
  }
}

const div = new ColoredRectanglewidthText(25, 15, 'Hello worid', 'red');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());
