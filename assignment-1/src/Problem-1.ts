{
  //
  function sumArray(numbers: number[]): number {
    return numbers.reduce((total, currentValue) => total + currentValue, 0);
  }

  const result = sumArray([1, 2, 3, 4]);
  console.log(result);
  //
}
