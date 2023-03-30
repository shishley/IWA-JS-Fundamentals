//more notes
//long way example

//import { subtractHandler} from "./script.js"; //pulling from the split files*/

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
//know when to use which inverted comma
const declare1 = "sihle";
const declare2 = "sihle's child";
const declare3 = "sihle's child";
const declare4 = `sihle's child says: "hello"`;

const one = 1;
const two = 2;
console.log(one + two); //only use the + sign when adding numbers to avoid auto concatination
//rsult 3
//when u wanna concatinate, use interpolation
console.log(`${one} ${two}`); //use backticks , grab the value n put it as a string
//result 1 2

//&& (and and)if value before the && is true, hen it proceeds to next value
//|| (or or)if value before the || is false, then it proceeds to next value

const eg = 15 && 7 && "string" && false && 7 && 9;
//return false   it stoped at it cze false is not true, if there was no false gonna return 9

const eg2 = 15 || 7 || "string" || false || 7 || 9;
//return 15   it stoped at it cze 15 is true not falsy

const eg3 = null || false || 0 || 15 || 7 || "string" || 7 || 9;
//return 15   cze all the prev values are falsy stopped at 15 truthy

//challenge from IWA_7.4: Challenge 2

/*To display the nickname is present should be displayed only n if no nickname then firstname is displayed, you can use a ternary operator.

const nickname = "Timmy";
const firstname = "Timothy";
const nickname= "Timmy";
const firstname = "Timothy";

console.log("Good Morning, ${nickname} || {firstname}!") //original with error

solution

console.log(`Good Morning, ${nickname ? nickname : firstname}!`);
The ternary operator nickname ? nickname : firstname checks if nickname is truthy (i.e., not null or undefined), and if so, it uses nickname. If nickname is falsy, it uses firstname. The backticks ``````````````````````````` around the string allow you to use string interpolation with ${}.


what happens  if you change const nickname = null ;
If you change const nickname = "Timmy"; to const nickname = null;, the ternary operator in the console.log statement will treat nickname as falsy because null is falsy in JavaScript. As a result, the string template will evaluate to Good Morning, Timothy!, and the output will display "Timothy" instead of "Timmy".

const nickname = null;
const firstname = "Timothy";

console.log(`Good Morning, ${nickname ? nickname : firstname}!`);
// Output: Good Morning, Timothy!
In this case, the condition nickname ? nickname : firstname evaluates to firstname since nickname is null (i.e., falsy). Therefore, the output is Good Morning, Timothy!
