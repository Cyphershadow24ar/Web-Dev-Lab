let a = 10;
let b = 20;

console.log("Before Swap: a =", a, "b =", b);

a = a + b;
b = a - b;
a = a - b;

console.log("After Swap: a =", a, "b =", b);

