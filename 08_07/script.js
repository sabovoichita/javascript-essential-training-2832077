/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * We pass arguments  through arguments parameteres
We need to pass in a sum and a percentage number into the tipCalulator function
as arguments and will return the tip and total for us for whatever values 
we pass in .
To do that, we need to specify those values into the call to the function
using arguments, who get captured by parameters up in the function
and used inside the function
I need two parameters: sum and percentage;
Now I no longer need the let sum and let percentage declarations
Now they become available inside the function. Whenever I mention sum, 
in the function body, I am refering to the parameter value from the parentheses
In the function call, I pass in 29,95, 18
tipCalculator(29.95, 18);
We'll ge the same exact result as before
Now change the values
tipCalculator(29.95, 28);

I want to add in a currency simbol
I will add a new parameter called 'currency'
const tipCalculator = (sum, percentage, currency) => {...}
In the function call I will pass in '$'
tipCalculator(29.95, 28, "$");
as well as in the the function: const tipCalculator = (sum, percentage, currency) => {
  // let sum = 29.95;
  // let percentage = 18;
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
  Sum before tip: ${currency}${sum}
  Tip percentage: ${percentage}%
  Tip:             ${currency}${tip.toFixed(2)}
  Total:           ${currency}${total.toFixed(2)}
`);
};

BUT what if I want to use a different currency???
If I want to pass in at the end, after the value?
I will pass in a Boolean Value, and output different content
depending on what the Boolean Value is:
1) Will set up anew parameter for the function 
const tipCalculator = (sum, percentage, currency, prefix) => {...}
and a condition:
 if (prefix) {
    console.log(`
  Sum before tip: ${currency}${sum}
  Tip percentage: ${percentage}%
  Tip:            ${currency}${tip.toFixed(2)}
  Total:          ${currency}${total.toFixed(2)}
`);
  } else {
    console.log(`
  Sum before tip: ${sum}${currency}
  Tip percentage: ${percentage}%
  Tip:            ${tip.toFixed(2)}${currency}
  Total:          ${total.toFixed(2)}${currency}
`);
  }
- then I need to pass in a true or a false in the function call


*/

// const tipCalculator = () => {
//   let sum = 29.95;
//   let percentage = 18;
//   let tip = sum * (percentage / 100);
//   let total = sum + tip;
//   console.log(`
//   Sum before tip: ${sum}
//   Tip percentage: ${percentage}%
//   Tip:            ${tip.toFixed(2)}
//   Total:          ${total.toFixed(2)}
// `);
// };

// const tipCalculator = (sum, percentage) => {
//   // let sum = 29.95;
//   // let percentage = 18;
//   let tip = sum * (percentage / 100);
//   let total = sum + tip;
//   console.log(`
//   Sum before tip: ${sum}
//   Tip percentage: ${percentage}%
//   Tip:            ${tip.toFixed(2)}
//   Total:          ${total.toFixed(2)}
// `);
// };

// const tipCalculator = (sum, percentage, currency) => {
//   // let sum = 29.95;
//   // let percentage = 18;
//   let tip = sum * (percentage / 100);
//   let total = sum + tip;
//   console.log(`
//   Sum before tip: ${currency}${sum}
//   Tip percentage: ${percentage}%
//   Tip:             ${currency}${tip.toFixed(2)}
//   Total:           ${currency}${total.toFixed(2)}
// `);
// };

const tipCalculator = (sum, percentage, currency, prefix) => {
  // let sum = 29.95;
  // let percentage = 18;
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  if (prefix) {
    console.log(`
  Sum before tip: ${currency}${sum}
  Tip percentage: ${percentage}%
  Tip:            ${currency}${tip.toFixed(2)}
  Total:          ${currency}${total.toFixed(2)}
    `);
  } else {
    console.log(`
  Sum before tip: ${sum}${currency}
  Tip percentage: ${percentage}%
  Tip:            ${tip.toFixed(2)}${currency}
  Total:          ${total.toFixed(2)}${currency}
    `);
  }
};

// tipCalculator(29.95, 18);
// console.log("29.95, 18: ", tipCalculator(29.95, 18));
// Sum before tip: 29.95
// Tip percentage: 18%
// Tip:            5.39
// Total:          35.34
// tipCalculator(29.95, 28);
// console.log("29.95, 28: ", tipCalculator(29.95, 28));
// Sum before tip: 29.95
//   Tip percentage: 28%
//   Tip:            8.39
//   Total:          38.34

// tipCalculator(29.95, 28, "$");
// console.log("29.95, 28, '$': ", tipCalculator(29.95, 28, "$"));
// Sum before tip: $29.95
//   Tip percentage: 28%
//   Tip:             $8.39
//   Total:           $38.34

tipCalculator(29.95, 28, "kr", false);
console.log("29.95, 28, '$': ", tipCalculator(29.95, 28, "kr", false));
//   Sum before tip: 29.95$
//   Tip percentage: 28%
//   Tip:            8.39$
//   Total:          38.34$
