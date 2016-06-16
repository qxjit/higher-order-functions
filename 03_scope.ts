// Variables within scope at the function definition
// are available when it is called
//
let scopeExample = () => {
  let x = 2;
  let z = [1,2,3].map(y => x * y);

  console.log(`scopeExample: x = ${x}`);
  console.log(`scopeExample: z = ${z}`);

  // beware, these variables can be mutated as well!
  let w = 1;
  [2,3,4].forEach((v) => w = w + v);

  console.log(`scopeExample: w = ${w}`);
}

scopeExample();

// The value of `this`, however behaves somewhat strangely
//
function topFunction () { console.log('topFunction:', this); }
let topArrow = () => { console.log('topArrow:', this); }

let obj = {
  propFunction: function () { console.log('propFunction', this); },
  propArrow: () => { console.log('propArrow', this); },
  callbackFunction: function () {
    setTimeout(function () { console.log('callbackFunction', this); }, 0);
  },
  callbackArrow: function () {
    setTimeout(() => { console.log('callbackArrow', this); }, 0);
  }
}

topFunction();
topArrow();
obj.propFunction();
obj.propArrow();
obj.callbackFunction();
obj.callbackArrow();

