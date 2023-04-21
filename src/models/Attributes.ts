import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  // ? T[K] --> look at that key of the interface and return the appropriate type
  // ? We use the arrow func' here to overcome the issue w/ 'this', now it always bound to attribute instance
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
