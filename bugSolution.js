function foo(a, b) {
  // Explicit type checking before addition
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error: throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

console.log(foo(5, '5')); // Output: NaN
console.log(foo(5, 5)); // Output: 10