import createDog from './create-dog';

createDog();
// { breed: 'Sheltie', name: 'Tucker' }

createDog({
  breed: 'Golden Retriever',
  name: 'Shadow'
});

createDog({ name: 'Chance' });
// { breed: 'Sheltie', name: 'Chance' }
