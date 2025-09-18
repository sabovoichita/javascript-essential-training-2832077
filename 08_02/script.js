/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * A function  typicaly sits on itself
 * A method is a function that sits inside an object and acts on that obj
 * How we create a function has an impact on how it can be used:
 * The clasic function is a FUNCTION DECLARATION
 * 
 * 1. FUNCTION DECLARATION
  
* syntax:
 * 1) We start with the word "function" 
 * 2) We give the function a name: ex: "doSomeMath"
 * 3) We pass parameters inside the parentheses ex: "()" or "(a,b)";
 * 4) We have curly brackets wrapped around the FUNCTION BODY:
 * ex:"{
  let c = a + b;
  return c;
}
  5) Inside the FUNCTION BODY we perform actions on the data
  and then we can if we want to return that data using the 
  "return" keyword.
  That data then gets sent back to whatever we declared the function
  originally.
  We can also get the function to output data directly.
  If we use a function declaration, the function is hoisted to the global
  scope,meaning it becomes available everywhere.
Even if we declare this function inside a global scope, it will still
be available everywhere else in the script.
It can be redeclared, just like a var.
If we create a new function and use the same name, "doSomeMath",
that new function  will take precedence further down in the code. 
So you can accidently overwrite an existing function if we're using
function declaration.
These function are easy to understand.
Function declarations are parsed in the order they appear in the code.
So if you have a function b that relies on function a,
you have to make sure that function a is declared before function b in the code.
Otherwise when you get to function b, function a is not declared yet, 
and the script cannot run!
So the ORDER in which these functions are declared matters for JS to work proppperly

 * 2. FUNCTION EXPRESSION

1). In a function expression we set up a variable, ex: "const"
2) We give that constant a name: ex: "doMoreMath"
3) We set the value of that constant equal to an anonymous function-
 that doesnt have its own name
 : ex " = function"
4)This anonymous function has parenteses that may contain parameters
ex: "(a, b)"
5) We have curly brackets wrapping around the function body

The diference between these two is that the function itself(anonymous) 
doesnt have a name instead we place it inside a variable, 
the we call the variable;
The function sitting in a variable will have the same scope type
as that variable type, so if we are using a const, then it is locally
scoped or blocked scoped automatically, if we place it in a const,
it cannot be REDECLARED!
Function expressions are not hoisted, they exist only in the scope they were created

To call and use any of the them we simply name them and add parentheses 
at the end, and if there are parameters, we pass them in, 
console.log("Do some math:", doSomeMath(5, 6));
console.log("Do more math:", doMoreMath(5, 6));
If we dont add parentheses, we get the actual function itself!
If we dont pass values to "doMoreMath" even though it's expecting it
will get weird output("NaN");
We can solve that by setting default values for these parameters
 in the function expression itself:
(a = 3, b = 2 )
so then even if we dont pass values we get an output so it will be 
a default output.
in the console we see: 
// Do more math: 6
But if we pass values (5, 6), then those values take over
and we get in the console: 
// Do more math: 30

 * 3. Immediately Invoked Function Expression(IIFE)
syntax: 
1) We wrapp an anonymous function or a named function inside parentheses
2) We add another set of parentheses at the end ()
This function is immediately inovoked and runned as soon as the browser 
encounters it!
We are running this function right away without calling it!



 * 
 */

// Function declaration:
function doSomeMath(a, b) {
  let c = a + b;
  return c;
}

// Function expression:
const doMoreMath = function (a = 3, b = 2) {
  let c = a * b;
  return c;
};

console.log("Do some math:", doSomeMath(5, 6));
console.log("Do more math:", doMoreMath(5, 6));

// Immediately Invoked Function Expression (IIFE)
(function () {
  let a = 3;
  let b = 6;
  let c = doSomeMath(a, b);
  console.log(`The sum of a and b is: ${c}`);
})();
