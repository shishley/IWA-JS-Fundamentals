//to see wat the document object model looks like in the app. add .body to view body only
console.dir(window.document); //browser page where js can change html elemnts

//functions n event listeners.func are like variables that accept arguments n parameters n return things

const hellofunc = () => {
  console.log("hello");
  console.log(Math.random());
};

hellofunc();
//result hello 0.5748107356523422

const customLog = () => {
  //hav a func wanna change text to uppercase
  const text = "awez";
  const upperText = text.toUpperCase; //taking the variable  n .touppercase is built in object
  console.log(upperText);
};
customLog(); //result AWEZ

const upperCaseLog = (text) => {
  // same as const text = ''
  const upperText = text.toUpperCase;
  console.log(upperText);
};
upperCaseLog("roy"); //result ROY

const double = (value) => {
  // same as const value = ''
  const result = value * 2;
  return result; // giving us the result back
};
console.log(double(10)); //result 20, same as sayin console.log(20)

//function expressions, arrow, the best
const example1 = () => {
  return 123;
};
//another way of writing function, traditional
const example2 = function () {};
console.log(example1());

this; //messy statement avoid

//recursion  recursion is a function that calls itself
const example3 = (value) => {
  const innerValue = value + 1;
  if (value < 20) {
    return example3(innerValue);
  } else {
    return innerValue;
  }
};
const results = example3(1);
console.log(results); //output 21, way of looping over something
//another example of recursion
const recursiveFunction = (n) => {
  if (n <= 0) {
    return 0;
  } else {
    return n + recursiveFunction(n - 1);
  }
};
console.log(recursiveFunction(5)); //output 15
/*
This function also takes an integer n and returns the sum of all integers from 1 to n.
 If n is 0 or negative, the function returns 0 to stop the recursion.
useful for breaking do complex problems into simpler subproblems. However, it's important to be
careful when using recursion because it can consume a lot of memory if not used properly.
*/
