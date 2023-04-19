import { User } from './models/User';

const user = new User({ name: 'new record', age: 8 });

// user.set({ name: 'NEW NAME', age: 40 });
user.save();
// user.fetch();

// setTimeout(() => {
//   console.log(user);
// }, 4000);
