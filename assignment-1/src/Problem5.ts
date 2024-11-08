{
  //Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

  function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
  }

  const person: { Name: string; Age: number } = {
    Name: "Usama",
    Age: 2,
  };

  const name = getProperty(person, "Name");
  const age = getProperty(person, "Age");
  console.log(name, age);

  //
}
