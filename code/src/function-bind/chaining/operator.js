import { sortBy } from 'iter';

const pets = [
  { type: 'dog',  name: 'Tucker' },
  { type: 'fish', name: 'Nemo' },
  { type: 'cat',  name: 'Gorby' },
  { type: 'dog',  name: 'Fido' }
];

const mammalNames = pets
  .filter(pet => pet.type !== 'fish')
  ::sortBy('name')
  .map(pet => pet.name);

console.log(mammalNames); // ['Fido', 'Gorby', 'Tucker']
