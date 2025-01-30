function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  if (typeof b === 'string') {
    return a + parseFloat(b);
  }
  return a + b;
}

let result1 = add(5, 10); // Correct
let result2 = addSafe(5, "10"); // Correct use of type guard
let result3 = addSafe(5, 10); // Correct use of type guard