// Higher order functions are very common in javascript
// code.

// Here's our own version of `map`
//
let map
  : <T,U> (ts: Array<T>, f: (T) => U) => Array<U>
  = (ts, f) => {
    let us = [];

    for (let i = 0; i < ts.length; i++) {
      us.push(f(ts[i]));
    }

    return us;
  }

console.log(map(["hello", "goodbye"], s => s.length));

// And our own version of reduce
//
let reduce
  : <T,U> (ts: Array<T>, init: U, step: (U,T) => U)
  => U
  = (ts, init, step) => {
    let u = init;

    for (let i = 0; i < ts.length; i++) {
      u = step(u, ts[i]);
    }

    return u;
  }

console.log(reduce([1,2,3], 0, (a, b) => a + b));

// Promise.then is a higher order function too!
//
class Promise<T> {
  listeners: Array<(T) => void>;

  constructor (f) {
    this.listeners = [];

    f((value: T) => {
      this.listeners.forEach((l) => l(value));
    })
  }

  static accept(t) {
    return new Promise((f) => {
      setTimeout(() => f(t), 0);
    });
  }

  then<U>(f: (T) => Promise<U> | U):Promise<U> {
    return new Promise((fulfill) => {
      this.listeners.push((t) => {
        let next = f(t);

        if (next instanceof Promise) {
          next.then(fulfill);
        } else {
          fulfill(next);
        }
      });
    });
  }
}

new Promise((fulfill) => {
  setTimeout(() => fulfill('done'), 3000);
}).then(s => Promise.accept(s.length))
  .then(console.log);

