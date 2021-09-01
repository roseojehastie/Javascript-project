
// /* JAVASCRIPT DATA TYPE */
// //> NUMBER, STRING, BOLEAN, NULL, UNDEFINE, OBJECT//

// /* Assignment and variable variable are like names for data. we declare a variable and it is then staored in our computer's memory
// each variable can only be assigned to one piece of data. vaiable functionis code is design to carry out a task. variable function is 
// executed when it is evoked (call back)  */

// //use "let" for for variable which you might want to reassign// 
// let name = 'rose';
// console.log(name);

// let favouriteNumber = 42;
// console.log(favouriteNumber)

// let names = "peter";
// console.log(names);

// var car = "lamborgini";
// console.log(car);

// // Use "const" variable for values whcih are constants that will never be reasigned.//
// const nan = ("Oje's");
// console.log(nan);

// //USE LET FOR VARIABLE WHICH YOU MIGHT WANT TO REASSIGN//
// let age = 32;
// age = + 1;

// //Basic aritemetic in javascript with built in operators  //
// console.log(5+6);
// console.log(10 / 5); 
// console.log(5 % 2); 
// console.log(8 ** 2);

// //  COComparison opeerator to COMPARE values. === checks for strict equality//
// console.log('cat' === 'cat')
// console.log('cat' === 'dog')
// console.log('dog' === 'dog')

// //putting a BANG, or EXCLAMATION MARK, IN FRONT OF A DOUBLE EQUALS TESTS FOR STRICT INEAQUALITY//
// console.log('cat' !== 'dog')
// console.log('cat' !== 'cat')

// //test whether a vlaue is greater than, greater than or equal   //
// console.log(5 < 10)
// console.log(5 <= 5)
// console.log(3 >= 2)
// console.log(2 > 2)
// console.log(3 > 2)

// /*properties & methods: intances of different data have, by default,
// different properties and methods. for example, "ALL STRINGS HAVE 
// LENGTH PROPERTY*/
// console.log('Hello World'.length)

// /* Method are actions that we can perform on that particular data.
//   recognise method by the dot, followed by the method, and then "parentheses
//   (which might or migth not have something inside of them) E.G. strings have 
//   a toUpperCase method....*/
//   console.log('Hello World'.toUpperCase());

//   // and a "charAT" method  which find the character at position n(starting from 0!)... //
//   console.log('Hello World'.charAt(0))
//   console.log('Hello World'.charAt(8))
//   console.log('Hello World'.charAt(6))

//   /*Javascript Executes a block of code only is a particular condition is TRUE. The condition
//     goes inside the parentheses, and the block of code to be executed goes between the curly braces */
// /* "if" (condition which evaluates to true or false) {
//  execute this code if this condition is true}*/
// //  let age = 12;//
//  if (age > 12) {
//      console.log('you can watch this movie!')
//      /* it you want to execute a block of code if the condition doesn't pass, we can use as "else block" */
//  } else{
//      console.log('sorry, you are too young')
//  }
// // To create more possible routes, you ccan use else if:

// if (favouriteNumber > 1000) {
//     console.log('Your favorite number is HUGE!')
// } else if (favouriteNumber < 10) {
//     console.log('Your favourite number is TINY!')
// } else {
//     console.log('your favourite number is boring!')
// }

// /*Arrays are for adding multiple value to variable; arrys are special 
// kind of objects, where each value starts from "0" )*/

// const myArray = [4, 1.6, 'cat' [true, false], null, 'dog'];
// //we can access particular elements of the array using bracket notation//
// console.log(myArray[0])
// console.log(myArray[4])

// //Array have a length property//
// console.log(myArray.length)
// // The arrays [true, false] counts as one!//

// /* Array also has numerous useful methods such as push
// which pushes new element onto the end of the array, 
// and join, which joins the array into string. */

// let myFavouriteThings = ['piza', 'coding', 'cake'];
// myFavouriteThings.push('Game of thrones');
// console.log(myFavouriteThings);

// const prase = ['H', 'e', 'l', 'l', 'o'];
// const joinedPrase = prase.join ('');
// console.log(joinedPrase);

// /* "OBJECTS are another way to assign multiple VALUES to onE variable
// instaed of listing values, we DECLARE "KEY VALUE PAIRS"*/
// const myCar = {
//     make: "Mazda",
//     model: "2",
//     year: "2012",
//     colour: "Red"
// }
// /*we can access data inside objects in two ways.
// if we know the name os the KeyboardEvent, we can use DOT NOTATION*/
// console.log(myCar.make);

// /* if we don't know the name directly and need javascript to work
// out which KEY_VALUE pair to find, we use SQUARE BRACKET NOTATION */
// const customerSearch = 'year';
// console.log(myCar[customerSearch]);

// /* "for Loops" imagine we want to console.log the numbesr 1-100. 
// There is no point writing out console.log(1), console.log(2).... all the way to 100!
// Luckily, there is a handy little DEVICE in JAVASCRPIT that can repeat blocks of code. 
// it is called a "for Loop. THis is the structure:
//     start for loop at 1; Keep iterating only while this condition is ture; Increment our variable(i)by 1 each time we iterate
//      for (let i = 1;        i <= 100;                                        i++){
//      console.log(i); } " */

//      for (let i = 1; i <= 100; i++) {
//         console.log(i);
//      }
//      for (let i = 1; i <= 1000; i++) {
//         console.log(i);
//      }
// //for loops are really useful for looping through data in arrays://
// const favouriteFood = ['Curry', 'Pizza', 'Halloumi', 'Panckae'];
// for (let i = 0; i < favouriteFood.length; i++) {
//     console.log(favouriteFood[i]);
// }
// // There are other types of loops too, but the for loop is the most useful for now//

// /* Functions are repeated blocks of code. The return key is how you get data out of a functionout. it also ends EXECUTION immediately.  */
// // function multiply (a, b) {
// //     return a * b;
// // }console.log(a,b)

// // function multiply (a, b) {
// //     return a * b;
// //     } 

// // const result = multiply(5, 10);
// //     console.log(result);
//     /* > when we use parentheses after a function name like this "MULTIPLY"(5,10), this means we are CALLING or INVOKING the function "MULTIPLY"
//      > We are saying that the value of a should be 5 and the value of b 10
//      >"return a*b" means that the function will output whatever we get by multiplyinh a and b, in this case"50"
//      we can pass whatever data we like as "ARGUEMENT" into the function between the parenthesis when we call it.
//      This way we have "REUSABLE functions" that take any two numbers nad output the value of the two numbers multiplied together */

//      //PRACICE///
// //      function publication () {
// //         return "freeCodeCamp";
// //         } 
// //      const publication = ("freeCodeCamp");
// // publication[0].toUpperCase() + publication.substring(1);

// // const mySentence = "freeCodeCamp is an awesome resource";
// // const words = mySentence.split(" ");

// // for (let i = 0; i < words.length; i++) {
// //     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// // }

