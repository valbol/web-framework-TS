import { User } from './models/User';

const user = new User({ name: 'myName', age: 30, id: 1 });

// axios.post('http://localhost:3000/users', {
//   name: 'abc',
//   age: 22,
// });

user.fetch();

setTimeout(() => {
  console.log(user);
}, 4000);
