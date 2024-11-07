{
  //Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
  };

  type Shape = Circle | Rectangle;

  function calculateShapeArea(shape: Shape) {
    if (shape.shape === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.shape === "rectangle") {
      return shape.height * shape.width;
    }
    return 0;
  }

  const circle: Circle = { shape: "circle", radius: 4 };
  const rectangle: Rectangle = { shape: "rectangle", height: 4, width: 6 };

  console.log(calculateShapeArea(circle));
  console.log(calculateShapeArea(rectangle));
  //
}
