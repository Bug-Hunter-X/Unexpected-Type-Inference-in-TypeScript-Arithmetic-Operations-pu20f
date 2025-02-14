function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: number, b: number): number {
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error("Invalid input types. Both inputs must be numbers.");
    }
    return a + b;
}

function subtractSafe(a: number, b: number): number {
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error("Invalid input types. Both inputs must be numbers.");
    }
    return a - b;
}

let result1 = add(5, 3); // result1 is number
let result2 = subtract(5, 3); // result2 is number

//Safe way to prevent this error
let result3 = addSafe(5, 3);
let result4 = subtractSafe(5,3);

// Using type guards to improve type safety and prevent unexpected results:
let result5 = add(5, 3);
let result6 = subtract(5, 3);

console.log(result1, result2, result3, result4, result5, result6); //8 2 8 2 8 2