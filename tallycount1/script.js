//console.log('awe'); check if script is linked n working only not for production code
//console.error not recommened rathr throw new Error('something went wrong')

/*import { hello as helloA} from "./code-a.js"; //pulling from the split files*/
/*import { hello as helloB} from "./code-b.js"; //as for named exports*/

let exampleA = 5; //use let when declaring dont shortcut exampleA=5; first tym u declare
exampleA = 10; //re-assign the value of exampleA cze its not const
//always use const unless u know the value gonna change at some point
const MAX_NUMBER = 5; //defining global constants that never changes
const MIN_NUMBER = -5;
const STEP_AMOUNT = 1;
//storing n declaring 3 tings in memory to recall again
const number = document.querySelector('[data-key="number"]'); //select any attribute using []
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]'); //console.log(number, subtract, add); then check inspect to confirm it found these

//event handler declared as a function
const subtractHandler = () => {
  const newValue = parseInt(number.value) - STEP_AMOUNT; //turning from string to num using parseint  newvalue equal to current value minus one when clicked
  number.value = newValue;
  //if add button is disabled then undisable
  if (add.disabled === true) {
    add.disabled = false;
  }

  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true; //disable the add button
  }
};
//if u wanna assign just value = ... buh if assign behaviour ()=> ... in {} u say wat happens
const addHandler = () => {
  const newValue = parseInt(number.value) + STEP_AMOUNT; //can do same cze in diff scope {}
  number.value = newValue;
  //(now add condtion
  //=== means equals in if statement
  if (subtract.disabled === true) {
    subtract.disabled = false;
  }

  if (newValue >= MAX_NUMBER) {
    add.disabled = true; //disable the add button

    //(56).toString() turning num to string
  }
};
//now we add event listener to listen for an action n do something

subtract.addEventListener("click", subtractHandler); //listen to click of - button variable declared
add.addEventListener("click", addHandler); //then after , do this... run subtracthandler

//long way example
if (1 === 1) {
  /*this is true*/ console.log("test");
} else {
  console.log("not true");
}
//can write same thing like this
console.log(1 === 1 ? "test" : "not true");
//logical && and,logical || or, !== not
//+ plus, - minus, / divide, * multiple, % how much remains, **power by
const jo = 5; //typeof is a num
toString(jo); //coerce num into string
const jel = "081";
parseInt(jel); //turn string into num
true.toString(); //turning boolean into 'true' string
Boolean(jel); //turning string to boolean
priceofshoe: 0; //means price is 0 technically free
priceofshoe: null; //means theres no price
priceofshoe: undefined; //means i dont understand wat u asking, i dont hav answer
