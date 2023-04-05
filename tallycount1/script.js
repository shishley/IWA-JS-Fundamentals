//console.log('awe'); check if script is linked n working only not for production code
//console.error not recommened rathr throw new Error('something went wrong')

//export {subtractHandler};

let exampleA = 5; //use let when declaring dont shortcut exampleA=5; first tym u declare
exampleA = 10; //re-assign the value of exampleA cze its not const
//always use const unless u know the value gonna change at some point
const MAX_NUMBER = 5; //defining global constants that never changes
const MIN_NUMBER = -5;
const STEP_AMOUNT = 1;

//storing n declaring 3 tings in memory to recall again
//group into object
const obj3way = {
  number: document.querySelector('[data-key="number"]'), //select any attribute using []
  subtract: document.querySelector('[data-key="subtract"]'),
  add: document.querySelector('[data-key="add"]'), //console.log(number, subtract, add); then check inspect to confirm it found these
};

//event handler declared as a function
const subtractHandler = () => {
  const newValue = parseInt(obj3way.number.value) - STEP_AMOUNT; //turning from string to num using parseint  newvalue equal to current value minus one when clicked
  obj3way.number.value = newValue;
  //if add button is disabled then undisable
  if (obj3way.add.disabled === true) {
    obj3way.add.disabled = false;
  }

  if (newValue <= MIN_NUMBER) {
    obj3way.subtract.disabled = true; //disable the add button
  }
  updateColor();
};
//if u wanna assign just value = ... buh if assign behaviour ()=> ... in {} u say wat happens
const addHandler = () => {
  const newValue = parseInt(obj3way.number.value) + STEP_AMOUNT; //can do same cze in diff scope {}
  obj3way.number.value = newValue;
  //(now add condtion
  //=== means equals in if statement
  if (obj3way.subtract.disabled === true) {
    obj3way.subtract.disabled = false;
  }

  if (newValue >= MAX_NUMBER) {
    obj3way.add.disabled = true; //disable the add button

    //(56).toString() turning num to string
  }
  updateColor();
};
//manipulate dom to change color of num as when u at endpoint
const updateColor = () => {
  //
  const value = parseInt(obj3way.number.value); //assigning value to the updating number
  const isEdge = value >= MAX_NUMBER || value <= MIN_NUMBER; //isedge num if it meets these requirements
  if (isEdge) {
    obj3way.number.style.color = "red";
  } else {
    obj3way.number.style.color = ""; //when neither of those conditions will return to normal/no color
  }
};
updateColor();

//now we add event listener to listen for an action n do something

obj3way.subtract.addEventListener("click", subtractHandler); //listen to click of - button variable declared
obj3way.add.addEventListener("click", addHandler); //then after , do this... run subtracthandler
