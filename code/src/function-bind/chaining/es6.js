import { sortBy } from 'iter';

const pets = [
  { type: 'dog',  name: 'Tucker' },
  { type: 'fish', name: 'Nemo' },
  { type: 'cat',  name: 'Gorby' },
  { type: 'dog',  name: 'Fido' }
];

let mammalNames = pets.filter(pet => pet.type !== 'fish');
mammalNames = sortBy.call(mammalNames, 'name');
mammalNames = mammalNames.map(pet => pet.name);

console.log(mammalNames); // ['Fido', 'Gorby', 'Tucker']
