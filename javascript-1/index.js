let name = 'rose';
console.log(name);

let favouriteNumber = 42;
console.log(favouriteNumber)

let names = "peter";
console.log(names);

var car = "lamborgini";
console.log(car);

const nan = ("Oje's");
console.log(nan);

// LET FOR VARIABLE WHICH YOU MIGHT WANT TO REASSIGN//
let age = 32;
age = + 1;

//Basic aritemetic in javascript with built in operators  //
console.log(5+6);
console.log(10 / 5); 
console.log(5 % 2); 
console.log(8 ** 2);

//  COComparison opeerator to COMPARE values. === checks for strict equality//
console.log('cat' === 'cat')
console.log('cat' === 'dog')
console.log('dog' === 'dog')

//putting a BANG, or EXCLAMATION MARK, IN FRONT OF A DOUBLE EQUALS TESTS FOR STRICT INEAQUALITY//
console.log('cat' !== 'dog')
console.log('cat' !== 'cat')

//test whether a vlaue is greater than, greater than or equal   //
console.log(5 < 10)
console.log(5 <= 5)
console.log(3 >= 2)
console.log(2 > 2)
console.log(3 > 2)

/*properties & methods: intances of different data have, by default,
different properties and methods. for example, "ALL STRINGS HAVE 
LENGTH PROPERTY*/
console.log('Hello World'.length)

/* Method are actions that we can perform on that particular data.
  recognise method by the dot, followed by the method, and then "parentheses
  (which might or migth not have something inside of them) E.G. strings have 
  a toUpperCase method....*/
  console.log('Hello World'.toUpperCase());

  // and a "charAT" method  which find the character at position n(starting from 0!)... //
  console.log('Hello World'.charAt(0))
  console.log('Hello World'.charAt(8))
  console.log('Hello World'.charAt(6))

  /*Javascript Executes a block of code only is a particular condition is TRUE. The condition
    goes inside the parentheses, and the block of code to be executed goes between the curly braces */
/* "if" (condition which evaluates to true or false) {
 execute this code if this condition is true}*/
//  let age = 12;//
 if (age > 12) {
     console.log('you can watch this movie!')
     /* it you want to execute a block of code if the condition doesn't pass, we can use as "else block" */
 } else{
     console.log('sorry, you are too young')
 }
// To create more possible routes, you ccan use else if:

if (favouriteNumber > 1000) {
    console.log('Your favorite number is HUGE!')
} else if (favouriteNumber < 10) {
    console.log('Your favourite number is TINY!')
} else {
    console.log('your favourite number is boring!')
}

/*Arrays are for adding multiple value to variable; arrys are special 
kind of objects, where each value starts from "0" )*/

const myArray = [4, 1.6, 'cat' [true, false], null, 'dog'];
//we can access particular elements of the array using bracket notation//
console.log(myArray[0])
console.log(myArray[4])

//Array have a length property//
console.log(myArray.length)
// The arrays [true, false] counts as one!//

/* Array also has numerous useful methods such as push
which pushes new element onto the end of the array, 
and join, which joins the array into string. */

let myFavouriteThings = ['piza', 'coding', 'cake'];
myFavouriteThings.push('Game of thrones');
console.log(myFavouriteThings);

const prase = ['H', 'e', 'l', 'l', 'o'];
const joinedPrase = prase.join ('');
console.log(joinedPrase);

/* "OBJECTS are another way to assign multiple VALUES to onE variable
instaed of listing values, we DECLARE "KEY VALUE PAIRS"*/
const myCar = {
    make: "Mazda",
    model: "2",
    year: "2012",
    colour: "Red"
}
/*we can access data inside objects in two ways.
if we know the name os the KeyboardEvent, we can use DOT NOTATION*/
console.log(myCar.make);

/* if we don't know the name directly and need javascript to work
out which KEY_VALUE pair to find, we use SQUARE BRACKET NOTATION */
const customerSearch = 'year';
console.log(myCar[customerSearch]);
