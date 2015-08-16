const name = 'Emily';
let job = 'Nurse';

const person = do {
  const name = 'Jeremy'; // local, shadow outer variable
  const age = 28;        // locally scoped
  job = 'Web Developer'; // overwrite outer variable

  ({ name, job, age });
};

console.log(person); // { name: 'Jeremy',
                     //   job: 'Web Developer',
                     //   age: 28 }

console.log(name); // Emily
console.log(job);  // Web Developer
console.log(age);  // throw ReferenceError
