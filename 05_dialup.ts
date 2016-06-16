// When taken to the extreme, higher order functions can
// be both mind-bending and useful at the same time.
//
// Let's build a function that both takes a function as
// an argument and returns a function without referring
// to any other named functions at all!
//
let Z
  :  <T,U>
     (f: (g: (T) => U) => (T) => U)
  => (T)
  => U
  = f => t => (f(Z(f)))(t)

// `factialStep` implements one step of the
// factorial equation without worrying about
// the recursion. Its first argument is a function
// saying what to do next.
//
let factorialStep
  : (next: (number) => number) => (number) => number
  = next => t => {
    if (t <= 0) {
      return 1;
    } else {
      return t * next(t - 1);
    }
  };

// Z then fills in the first argument by passing the
// function to itself, thereby implementing the
// recursion
//
let factorial
  : (number) => number
  = Z(factorialStep);

console.log([1,2,3,4].map(factorial));

// We can use Z to implement any function that can be
// implemented via recursion without needing to specify
// the recursion ourselves
//
let map = Z(next => ([f,items]) => {
    if (items.length == 0) {
      return [];
    } else {
      return [f(items[0])].concat(next([f, items.slice(1)]));
    }
  });

console.log(map([((x) => x + 1), [1,3,4]]));
