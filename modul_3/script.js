'use script';

const persone = {
  name: 'Alex',
  tel: '+32845687',
  parents: {
    mom: 'Olga',
    ded: 'Mikle'
  }
};
// console.log(JSON.parse(JSON.stringify(persone)));
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Anna';
console.log(clone);
console.log(persone);