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

//array always start at 0, so 0 =1, 1=2, 2=3, 3=4, 4=5
const array = [1, 2, 3, 4, 5];
console.log(array[0]); //output [1]

const array2 = ["a", "b", "c"];
console.log(array2.length); //output 3

array2.push("d"); //adding into array
array2.push("e");
console.log(array2.length); //output 5
console.log(array2); //output ['a', 'b', 'c', 'd', 'e']

array2.pop(); //removes last element from array
console.log(array2); //output ['a', 'b', 'c', 'd']
array2.shift(); //removes first element from array
console.log(array2); //output ['b', 'c', 'd']
array2.unshift("f"); //adds first element to array
console.log(array2); //output ['f', 'b', 'c', 'd']

//can have objects inside of arrays
const array3 = [
  {
    name: "andrew",
    age: 16,
  },
  {
    name: "ben",
    age: 22,
  },
];
console.log(array3[0].name); //output andrew

//destructuring an array
const myArray = [1, 2, 3];
const [a, b, c] = myArray; // Console logging the destructured variables
console.log(a); // Output: 1 //where as could have done this console.log(myArray[0]);
console.log(b); // Output: 2
console.log(c); // Output: 3
/*create an array called myArray which contains the numbers 1, 2, and 3.
 We then use destructuring to create three new variables (a, b, and c) and assign 
 them the values of the corresponding elements in the myArray array.
 */
//nested example
const myNestedArray = ["Hello", [1, 2, 3], ["alpha", "beta"]];
const [str, [nums], [statuses]] = myNestedArray;

console.log(str); // Output: "Hello"
console.log(nums); // Output: 1 2 3
console.log(statuses); // Output: "alpha" "beta"

const class2020 = ["dave", "steve", "john", "jane"];
const class2021 = ["pat", "mike", "john", "jo"];
const class2022 = [];
const checkIfPresent = (leaner) => {
  const letsee = {
    2022: class2022.includes(leaner),
    2021: class2021.includes(leaner),
    2020: class2020.includes(leaner),
  };
  return letsee;
};
console.log(checkIfPresent("steve")); //output {2022: false, 2021: false, 2020: true} checking which classes steve is in
console.log(checkIfPresent("john")); //output {2022: false, 2021: true, 2020: true} checking which classes john is in

//using the splice method to remove elements from an array:
const fruits = ["apple", "orange", "kiwi", "banana"];
fruits.splice(
  1,
  1
); /* Remove the second element (orange) from the array The first argument is the starting
 index and the second argument is the number of elements to remove. 
In this case, we are removing only one element*/
console.log(fruits); // Output: ["apple", "kiwi", "banana"]

//using slice method to extract a range of elements from an array of numbers
const numbers = [1, 2, 3, 4, 5, 6];
// Extract a range of elements using slice
const slicedNumbers = numbers.slice(2, 5); // Extract elements at indices 2, 3, and 4
console.log(slicedNumbers); // Output: [3, 4, 5]
/*
use the slice method to extract a range of elements from the array. We start at index 2 and end at index 5
 (which is excluded), so we extract the elements at indices 2, 3, and 4. The slicedNumbers array contains 
 only the extracted elements, while the original numbers array remains unchanged. */

//example of for loop in array
const loopArray = [1, 2, 3, 4, 5];

for (let i = 0; i < loopArray.length; i++) {
  console.log(loopArray[i]);
} /*The loop starts by initializing a counter variable i to 0, and then continues as long as i is
 less than the length of the array. For each iteration of the loop, we output the current element 
 of the array using the counter variable i.
 */
/*output
1
2
3
4
5
 */
//2 dimensional loop
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
/*output
1 2 3 4 5 6 7 8 9
 */
/*output
 two-dimensional array (a matrix) with 3 rows and 3 columns. We use a nested for loop to iterate
  through each element of the matrix. The outer loop iterates over each row of the matrix, while the
   inner loop iterates over each element (column) of the current row. For each iteration of the inner
    loop, we output the current element of the matrix using the counter variables i and j
 */

/*
given an array of objects that contain information about different students in a school.
 Each object has properties such as name, age, grade, and test scores. 
Your task is to calculate the average test score for each student and assign it to a new property 
called "averageScore" */

const students = [
  { name: "John Doe", age: 16, grade: "10th", testScores: [80, 85, 90] },
  { name: "Jane Doe", age: 15, grade: "9th", testScores: [90, 95, 100] },
  { name: "Bob Smith", age: 17, grade: "11th", testScores: [70, 75, 80] },
  { name: "Alice Johnson", age: 16, grade: "10th", testScores: [85, 90, 95] },
];

for (let i = 0; i < students.length; i++) {
  let sum = 0;
  for (let j = 0; j < students[i].testScores.length; j++) {
    sum += students[i].testScores[j];
  }
  const average = sum / students[i].testScores.length;
  students[i].averageScore = average;
}

console.log(students);

/*
We then use a for loop to iterate over each object in the array. Within this loop, we define 
another loop to iterate over each test score in the current student's test scores array. 
We calculate the sum of all the test scores for each student, and then divide it by the length
 of the test scores array to calculate the average score. 
we assign the average score to a new property called "averageScore" in each student object. */

/*output
 [
  { name: "John Doe", age: 16, grade: "10th", testScores: [80, 85, 90], averageScore: 85 },
  { name: "Jane Doe", age: 15, grade: "9th", testScores: [90, 95, 100], averageScore: 95 },
  { name: "Bob Smith", age: 17, grade: "11th", testScores: [70, 75, 80], averageScore: 75 },
  { name: "Alice Johnson", age: 16, grade: "10th", testScores: [85, 90, 95], averageScore: 90 }
]
*/
