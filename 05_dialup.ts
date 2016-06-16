// When taken to the extreme, higher order functions can
// be both mind-bending and useful at the same time.
//
// Let's build a function that both takes a function as
// an argument and returns a function without referring
// to any other named functions at all!
//
let Z
  : any
  = undefined

// `factialStep` implements one step of the
// factorial equation without worrying about
// the recursion. Its first argument is a function
// saying what to do next.
//
let factorialStep
  : (next: (number) => number) => (number) => number
  = undefined

// Z then fills in the first argument by passing the
// function to itself, thereby implementing the
// recursion
//
let factorial
  : (number) => number
  = undefined

// We can use Z to implement any function that can be
// implemented via recursion without needing to specify
// the recursion ourselves
//
let map = undefined

