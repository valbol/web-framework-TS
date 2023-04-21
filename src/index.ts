import { User } from './models/User';

const user = new User({ id: 1, name: 'John', age: 25 });

// ? The parentheses (....) invoking the on function in Eventing class
user.on('save', () => {
  console.log(user);
});

user.save();
