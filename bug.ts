function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is number
let result2 = subtract(5, 3); // result2 is number

//Uncommon error in TS
let result3 = add(5, "3"); // TS will infer a as number and b as string, the function will return a string
let result4 = subtract(5, "3"); // TS will infer a as number and b as string, the function will return a string
console.log(result1, result2, result3, result4); // 8 2 53 53