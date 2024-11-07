{
  //Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
  //
  function removeDuplicates(numbers: number[]): number[] {
    return numbers.filter((number, index) => numbers.indexOf(number) === index);
  }

  const arrayWithoutDuplicate = removeDuplicates([12, 58, 85, 56, 12, 68, 85]);
  console.log(arrayWithoutDuplicate);
  //
}
