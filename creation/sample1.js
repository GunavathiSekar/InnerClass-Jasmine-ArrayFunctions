var o, d;

o = { get foo() { return 17; } };
d = console.log(Object.getOwnPropertyDescriptor(o, 'foo'));
// d is {
//   configurable: true,
//   enumerable: true,
//   get: /*the getter function*/,
//   set: undefined
// }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, 'bar');

// d is {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }

o = {};
Object.defineProperty(o, 'baz', {
  value: 8675309,
  writable: false,
  enumerable: false
});
d =console.log(Object.getOwnPropertyDescriptor(o, 'baz'));
// d is {
//   value: 8675309,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }