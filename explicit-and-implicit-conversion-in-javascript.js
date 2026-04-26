/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;
console.log("The result is: " + result);

let isValid = "false" === "true";
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

// Implicit conversion example
let implicitExample = "5" + 5;
console.log(implicitExample); // "55"
console.log(typeof implicitExample); // string

// Explicit conversion example
let explicitExample = Number("5") + 5;
console.log(explicitExample); // 10
console.log(typeof explicitExample); // number

// Edge case: NaN
let badValue = Number("hello");
console.log(badValue); // NaN
console.log(typeof badValue); // number