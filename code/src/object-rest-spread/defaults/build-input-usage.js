import buildInput from './build-input';

console.log(buildInput());
// <input type="text" width="200">

console.log(buildInput({ type: 'password' }));
// <input type="password" width="200">

console.log(buildInput({
  type: 'email',
  width: 300,
  placeholder: 'test@example.com'
}));
// <input type="email"
//        width="200"
//        placeholder="test@example.com">
