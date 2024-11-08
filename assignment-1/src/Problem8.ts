{
  //

  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    const missingKeys = keys.filter((key) => !(key in obj));
    return missingKeys.length === 0;
  }

  const person: { name: string; age: number; job: string } = {
    name: "Usama",
    age: 30,
    job: "Doctor",
  };
  console.log(validateKeys(person, ["name", "job"]));
  //
}
