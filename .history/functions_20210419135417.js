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
    console.log(g + " divided by " + h + " is equal to or larger than 10");
  } else {
    console.log(g + " divided by " + h + " is smaller than 10");
  }
}

remainderOne(100, 10);
remainderOne(30, 5);

const divisionSum = function (i, j) {
  if (i / j >= 10) {
    console.log(i + " divided by " + j + " is equal to or larger than 10");
  } else {
    console.log(i + " divided by " + j + " is smaller than 10");
  }
};
divisionSum(49, 9);
divisionSum(77, 7);

const anotherDivision = (k, l) => {
  if (k / l >= 10) {
    console.log(k + " divided by " + l + " is equal to or larger than 10");
  } else {
    console.log(k + " divided by " + l + " is smaller than 10");
  }
};
anotherDivision(99, 9);
anotherDivision(35, 5);
anotherDivision(10, 0);

let ex3 = (num1, num2) => console.log(num1 * num2);
ex3(3, 3);

function getRemainder(num3, num4) {
  return num3 % num4;
}
getremainder(12, 3);
