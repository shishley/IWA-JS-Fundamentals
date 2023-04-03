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

/*if nickname is present should be displayed but if its not
 then firstname is displayed*/

const nickname = "Timmy";
const firstname = "Timothy";
//original but wrong
console.log("Good Morning, ${nickname} || {firstname}!");

//solution1
console.log(`Good Morning, ${nickname || firstname}!`);
// Output: Good Morning, Timmy!
/*cze nickname is not falsy cant move forward to next value*/

/*const nickname = null;
const firstname = "Timothy";*/
console.log(`Good Morning, ${nickname || firstname}!`);
// Output: Good Morning, Timothy!
/*cze nickname is falsy (null) moves to evaluate firstname which is truthy*/

//you can use a ternary operator. solution2
console.log(`Good Morning, ${nickname ? nickname : firstname}!`);
// Output: Good Morning, Timmy!
/*checks if nickname is truthy ( not null or undefined)and if so it is
 stops to use nickname.

/*const nickname = null;
const firstname = "Timothy";*/
console.log(`Good Morning, ${nickname ? nickname : firstname}!`);
// Output: Good Morning, Timothy!
/*If nickname is falsy, move forward to use firstname.*/

//objects
//commenting objects using jsdoc really helpful to read code, ctrl click to go to where was created

/**
 * family one
 */
const fam1 = {
  name: "Grez",
  surname: "Grooper",
  age: 39,
}; //declaring the inside of object, which are keys e.g. age
//console.log(fam1.age) result is 39. allows us to organise into logical groups
const fam2 = {
  name: "Dolly",
  surname: "Grooper",
  age: 19,
};
//combined object within object
/**
 * familys that ran away
 */
const manyfamilies = {
  Barrettfam: {
    youngest: {
      name: "Juo",
      surname: "Barrett",
      age: 3,
      'inge': 44
    },
    oldest: {
      name: "Perl",
      surname: "Barrett",
      age: 60,
    },
  },
/**
 * weird fam
 */
  Smithfam: {
    youngest: {
      name: "Sall",
      surname: "Smith",
      age: 5,
    },
    oldest: {
      name: "Ray",
      surname: "Smith",
      age: 64,
    },
  },
};
//cant use dot notation on a number or split string without adding []
manyfamilies.Barrettfam.inge
manyfamilies.Barrettfam.['inge']

const thisIsAVariableExample = ""; //camelCase
const ThisIsAVariableExample = ""; //pascalCase
const this_is_a_variable_example = ""; /*snakeCase used when pulling 
from api but dont declare like this*/

//document object helps find things in html, qs allows to grab in html throu css syntax
const exam = document.querySelector('button')
exam.disabled = true

//calling methods(func in objects)
const object5 = {
  run: 366,
  user: 'Grag',
  thisFunction: () => console.log('wateva')
}
//then call that function
  object5.thisFunction()
  //result yo

//math built in obj, 10 + rouned off pie
const rr= 10 + Math.round(Math.PI)
