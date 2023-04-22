import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'John', age: 25 });

// ? The parentheses (....) invoking the on function in Eventing class
user.on('change', () => {
  console.log(user);
});

user.fetch();
