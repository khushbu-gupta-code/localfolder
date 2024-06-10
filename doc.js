// what is variable ✔️🔴

// In JavaScript, a variable is a container for storing data values.
//  Variables can hold various types of data, 
// including numbers, strings, objects, functions, and more. 

// var: The var keyword is the oldest way to declare variables in JavaScript. Variables declared with var have function scope or global scope and can be re-declared and updated.

// let: The let keyword, introduced in ES6 (ECMAScript 2015), allows you to declare block-scoped variables. Variables declared with let can be updated but not re-declared within the same block.

// const: The const keyword, also introduced in ES6, is used to declare block-scoped constants. Variables declared with const cannot be updated or re-declared.

// what is scope ✔️🔴 

// Global Scope: 

// 1. Definition: Variables declared outside of any function or block are in the global scope.
//2.  Accessibility: These variables can be accessed from anywhere in the code, including inside functions.
//3. Lifespan: They remain in memory for the entire duration of the program's execution.

// function showFunctionScope() {
//     var functionVar = "I am inside a function";
//     console.log(functionVar); // Accessible here
//   }
  
//   showFunctionScope();
//   console.log(functionVar); // ReferenceError: functionVar is not defined

// Function Scope:

// Definition: Variables declared within a function using var are scoped to that function.
// Accessibility: These variables can only be accessed within the function in which they are declared.
// Lifespan: Variables exist only during the function execution.

// Block Scope: Variables declared with let or const inside a block (e.g., inside an if statement 
//     or a for loop) are scoped to that block.


// if Variables declared within a function using let then it is function scope or not ✔️🔴

// Variables declared within a function using let have block scope, not function scope.
//  This means that variables declared with let are only accessible within the block, statement,
//   or expression where they are declared. However, if a let variable is declared at the top level
//    of a function, it can be accessed throughout the entire function, effectively behaving as
//     if it has function scope within that function. But, technically, it is still block-scoped.


// function testFunction() {
//     let a = "function scope"; // Block scope at the function level
  
//     if (true) {
//       let b = "block scope"; // Block scope inside the if statement
//       console.log(a); // Outputs: function scope
//       console.log(b); // Outputs: block scope
//     }
  
//     console.log(a); // Outputs: function scope
//     console.log(b); // ReferenceError: b is not defined
//   }
  
//   testFunction();


// what is Hoisting ✔️🔴

// In JavaScript, hoisting is a behavior in which variable and function declarations are moved to 
// the top of their containing scope during the compilation phase.
// However, only the declarations are hoisted, not the initializations.

// 1. Variable Hoisting
// For variables declared with var, the declaration is hoisted, but the initialization remains in place. This means the variable will be undefined until the line where it is initialized is executed.


// console.log(a)
// var a = 10;
// console.log(a)


// 2. Function Hoisting
// Function declarations are fully hoisted

// Temporal Dead Zone (TDZ) in JavaScript ✔️🔴
// The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs with variables declared using let and const.

// TDZ stands for Temporal Dead Zone, a state where a let or const variable is declared but not yet initialized.
// Accessing a variable in the TDZ results in a ReferenceError.
// Purpose: TDZ helps prevent the use of variables before they are initialized, ensuring more predictable and error-free code.

// {
//     // TDZ starts
//     console.log(a); // ReferenceError: Cannot access 'a' before initialization
//     let a = 20; // TDZ ends
//     console.log(a); // Outputs: 20
//   }

// JavaScript is a loosely typed language because it ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
//  allows variables to hold values of any data type, and these types can change dynamically.

// difference between Number.NaN and Number.IsNaN

// 1. isNaN
//1. Type Coercion:

// isNaN coerces the value to a number before checking if it is NaN.
// Number.isNaN checks the value directly without type coercion.

//2. Return Values:

// isNaN can return true for non-number values that are coerced to NaN (e.g., undefined, "NaN", "string", {}).
// Number.isNaN returns true only for values that are of type number and are NaN.


// 3.Use Cases
// Use isNaN when you need to check if a value can be considered NaN after coercion.
// Use Number.isNaN when you need to accurately check if a value is exactly NaN without coercion.