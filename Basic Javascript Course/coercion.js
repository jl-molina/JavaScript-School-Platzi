// implicit coercion
console.log('IMPLICIT COERCION');
console.log(typeof(4 + "7"), 4 + "7");
console.log(typeof(4 * "7"), 4 * "7");

// explicit coercion
console.log('EXPLICIT COERCION');
var a = 20;
var b = String(a);
var c = Number(b);
console.log('a',typeof(a), a);
console.log('b',typeof(b), b);
console.log('c',typeof(c), c);
