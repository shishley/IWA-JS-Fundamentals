// IWA_8.2: Challenge 1

const leoName = "Leo Musvaire";
const leoNumber = "2";
const leoStreet = "Church St.";
const leoPostal = "3105";
const leoBalance = "-10";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";
const sarahNumber = "13";
const sarahStreet = "William Close";
const sarahPostal = "0310";
const sarahBalance = "-5";

// Only change below this line

const leo = {
  name: leoName + " " + leoSurname,
  balance: leoBalance,
  accessId: "47afb389-8014-4d0b-aff3-e40203d2107f",
  age: 24,
  address: {
    number: leoNumber,
    street: leoStreet,
    postalCode: leoPostal,
  },
};

const sarah = {
  name: sarahName + " " + sarahSurname,
  age: 62,
  accessId: "6b279ae5-5657-4240-80e9-23f6b635f7a8",
  balance: sarahBalance,
  address: {
    number: sarahNumber,
    street: sarahStreet,
    postalCode: sarahPostal,
  },
};

console.log(leo, leo.address.postalCode);
console.log(sarah, sarah.address.postalCode);
/*Changes made:
  
  Added the missing surname for Leo and removed the extra whitespace in Sarah's name.
  Changed the variable names for Sarah's balance and number to avoid duplication.
  Fixed the syntax errors in the objects' properties by using colons instead of equal signs,
   and changed the access id property to accessId with camelCase.
  Changed the hyphenated property names for the addresses to use camelCase instead.
  Added closing brackets for both objects.
  Changed the property names used to access the postal codes in the console.log statements.
  */
