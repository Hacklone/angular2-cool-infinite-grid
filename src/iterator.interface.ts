export interface IIterator<T> {
  next(...args: any[]): IIterated<T>
}

export interface IIterated<T> {
  done: boolean;

  value: T;
}