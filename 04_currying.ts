// A function that makes multiple arguments can always
// be converted into a function that takes 1 argument
// and returns another function. This is called
// "currying" the function.
//
// Curried functions are especially useful in combination
// with other higher order functions.
//

// A regular 2 argument function used with `map` requires
// a wrapper function to be built to fill out the parameter
// list.
//
let multiplyA
  : (x: number, y: number) => number
  = (x, y) => x * y


console.log([1,2,3].map((x) => multiplyA(2,x)))

// The curried version of the function allows the
// first parameter to be specified and returns
// a function that can then be passed directly to
// `map`.
//
let multiplyB
  : (number) => (number) => number
  = x => y => x * y

console.log([1,2,3].map(multiplyB(2)))

// Sometimes arguments aren't in the right order.
//
let repeat
  : <A> (number) => (A) => Array<A>
  = count => item => Array.apply(null, Array(count)).map(() => item)

console.log(repeat(2)("Hello"))
console.log([2,3,4].map((count) => repeat(count)("Malkovich")))

// But we can build a high order function to that allows us
// to rearrange the parameter list.
//
let flip
  : <A,B,C>(f: (A) => (B) => C) => (B) => (A) => C
  = f => a => b => f(b)(a)

console.log([2,3,4].map(flip(repeat)("Malkovich")))

