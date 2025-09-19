/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 * 
 * I want to upgrade this function to output the correct currency
 * formatting and symbols for whatever currency we are targeting.
 * 1) will create a new helper function to transform these numbers
 * 2) The Intl.NumberFormat object is a constructor for objects that 
 * enable language sensitive number formatting.
 * 
 * const number = 123456.789;
 * console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);

const formatter = (value)=>{
  let formattedValue
  
  return formattedValue
  };
 * 
  const formatter = (value) => {
  let formattedValue = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(value);

  return formattedValue;
};

  const formatter = (value) => {
  let formattedValue = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(value);

  return formattedValue;
};

4) We need to pass in locale and currency manually:
- will add two more parameters: locale, currency:
const tipCalculator = (sum, percentage, locale, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${formatter(locale, currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale, currency, tip)}
      Total:          ${formatter(locale, currency, total)}
    `);
};

tipCalculator(29.95, 18, "de-DE", "EUR");

// Sum before tip: 29,95 €
// Tip percentage: 18%
// Tip:            5,39 €
// Total:          35,34 €

 */

// const formatter = (value) => {
//   let formattedValue = new Intl.NumberFormat("de-DE", {
//     style: "currency",
//     currency: "EUR",
//   }).format(value);

//   return formattedValue;
// };

// const formatter = (value) => {
//   let formattedValue = new Intl.NumberFormat("en-CA", {
//     style: "currency",
//     currency: "CAD",
//   }).format(value);

//   return formattedValue;
// };

const formatter = (locale, currency, value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedValue;
};

//Console:
// Sum before tip: $29.95
// Tip percentage: 18%
// Tip:            $5.39
// Total:          $35.34

// const tipCalculator = (sum, percentage, locale, currency) => {
//   let tip = sum * (percentage / 100);
//   let total = sum + tip;
//   console.log(`
//       Sum before tip: ${formatter(locale, currency, sum)}
//       Tip percentage: ${percentage}%
//       Tip:            ${formatter(locale, currency, tip)}
//       Total:          ${formatter(locale, currency, total)}
//     `);
// };

// tipCalculator(29.95, 18, "de-DE", "EUR");

// Sum before tip: 29,95 €
// Tip percentage: 18%
// Tip:            5,39 €

// const tipCalculator = (sum, percentage, locale, currency) => {
//   let tip = sum * (percentage / 100);
//   let total = sum + tip;
//   console.log(`
//       Sum before tip: ${formatter(locale, currency, sum)}
//       Tip percentage: ${percentage}%
//       Tip:            ${formatter(locale, currency, tip)}
//       Total:          ${formatter(locale, currency, total)}
//     `);
// };

// tipCalculator(29.95, 18, "no-NO", "NOK");

// Sum before tip: 29,95 kr
// Tip percentage: 18%
// Tip:            5,39 kr
// Total:          35,34 kr

const tipCalculator = (sum, percentage, locale, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${formatter(locale, currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale, currency, tip)}
      Total:          ${formatter(locale, currency, total)}
    `);
};

tipCalculator(29.95, 18, "en-US", "USD");

// Sum before tip: $29.95
// Tip percentage: 18%
// Tip:            $5.39
// Total:          $35.34
