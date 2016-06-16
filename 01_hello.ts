//
// Higher Order Function:
//   A function that either takes another function as
//   an argument, or returns a function.
//

// A function passed as an argument is sometimes though
// of as a callback
//
let converse
  : (message : String, callback : () => void) => void
  = undefined

// A function that returns a function is sometimes used
// to capture configuration options for the fuction being
// built.
//
let makeGreeter
  : (String) => ((String) => String)
  = undefined

