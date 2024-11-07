{
  // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  //
  function sumArray(numbers: number[]): number {
    return numbers.reduce((total, currentValue) => total + currentValue, 0);
  }

  const result = sumArray([1, 2, 3, 4]);
  console.log(result);
  //
}
