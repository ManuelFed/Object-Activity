// Name: Manuel Federico D. Tudayan
// Activity: Perf3: Reference Types with Arrays and Objects
// Data Structures and Algorithms

// Activity 3: WORKING WITH OBJECTS

// Create an object called 'car' that has a 'type', 'model', and 'color' property
let car = {
  type: "Ford",
  model: "Mustang",
  color: "Gold",
};

// Display the initial properties of the object 'car'
console.log("Initial car object:", car);

console.log("\n________________\n");

// Use 'typeof' to check the type of the object 'car', and display the type
console.log("Type of the object:", typeof car);

console.log("\n________________\n");

// Update the 'type' property of the object 'car'
car.type = "Toyota";
console.log("Updated car property(type):", car);

console.log("\n________________\n");

// Add a new property to the object 'car', and display the updated object
car.wheels = 4;
console.log("Added car property(wheels):", car);
