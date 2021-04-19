// # Declaring Functions

// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.
function multiply(a, b) {
  console.log(a * b);
}
multiply(2, 2);
multiply(16, 32);

// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.
const nextSum = function (c, d) {
  console.log(c * d);
};

nextSum(3, 6);

// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.
const numberMultiplied = (e, f) => {
  console.log(e * f);
};
numberMultiplied(4, 6);

// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers.
function remainderOne(g, h) {
  if (g / h >= 10) {
    console.log(g + " divided by " + h + " is larger than 10");
  } else {
    console.log(g + " divided by " + h + " is smaller than 10");
  }
}

remainderOne(100, 10);
