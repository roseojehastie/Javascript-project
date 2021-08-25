// let name = 'Rose'; 
//how to assign and declare a variable
// are case-sensitive//
//can not contain space//
//chanell notation e.g firstName

// declare multiple variable by separating with corma or declare each variable on a single line

// let firstName = 'Eke';
// let lastName = 'Oje';


// console.log('Hello world');
// console.log('Welcome')
// console.log(name);
// console.log(firstName);
// console.log( lastName);

// let interestRate = 0.3;
// intersetRate = 1;
// console.log(intersetRate);

// let name = 'Rose '; // string literal
// let age = 30; // Number literal
// let isApproved = true; //Bollean literal
// let firstName = undefined;
// let lastName = null; // use to clear the value of the variable


//REFERECE TYPE (OBJECT, ARRAY & FUCNTION)
// object IS LIKE AN OBJECT IN REAL LIFE... age, name e.t.c  they are property of a person


// let name = 'Ekke';
// let age = '31';
// when dealing with related multiple variable;  instead of declaring 2 variables,(as above); we can declare a "person object" & 'refer a person object" -- use object literal {}
//& key value pair//

// let person = {
//     name: 'Eeke',
//     age: 30
// };

// console.log(person);

//DOT NOTATION = "prefered option" 

// let person = {
//     name: 'Eeke',
//     age: 30
// };

// person.name = 'John'
// console.log(person.name);

// BRACKET NOTATION


// let person = {
//     name: 'Eeke',
//     age: 30
// };

// person['name'] = 'Mary';
// console.log(person.name);

// to store the list of object / product -- use "ARRAY"[]
// declare variable e.g
//subject in an array are dynamic

// let selectedColours = ['red', 'blue', 'green'];
// selectedColours[2] = 5;
// console.log(selectedColours)


// *FUNCTION -- performs a taskLOGIC IS TO DISPLAY A FUCNTION...

// function greet(name, lastName){
//     console.log('Hello World ' + name + ' ' + lastName);
// }
// greet('Roses', 'Oje');
// greet('ses', 'Mary');

// FUNCTION CALCULATE A VLAUE

// function square(number) {
//      return number * number;
//     };

//     console,log(square(2)); ????

//OOPs 

// let baseSalary = 30_000;
// let overtime = 10;
// let rate = 20;

// function getWage(baseSalary, overtime, rate) {
//     return baseSalary + (overtime * rate);
// }

//the best fuctions are those with fwewer parameters: Uncle Bob. M: easy to maintain
// e.g ENCAPSULATION BELOW COMPARED TO ABOVE CODE
// let employee = {
//     baseSalary: 30_000,
//     overtime: 10,
//     rate: 20,

//  getWage: function() {
//     return this.baseSalary + (this.overtime * this.rate);
// }
// };

//    employee.getWage();

//ABSTRACTION: make interface simpler; reduces the impact of change; 

// INHERTANCE: MECHANISM that allows the elimination of redundant code. e.g textbox, select, checkbox 
// hidden, inheritance, click() & focus() propertie / methods of all HTML element. can be declared in one GENERIC element and 
// heritable by other elelments

//POLYMORPHISM POLY=MANY, MORPHISM=FORM; OOP Technique that allows you to get ride of long "if & else" (or stwitch on case statements)

//BENFIT OF OOP
// ECAPSULATION; GROUP RELATED VARIABLES AND FUCTION TOGHETR + INCREASE REUASBILITY
//ABSTARCTION: hide the details and the complexity and show only the essentials and isolate impact of change
// inheritance: eleminate redundant code
//POLYMOPHISM: refacture ugly switch/case statement 

// let myAge = 35
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)


let bonusPoints = 50
bonusPoints = bonusPoints + 25

console.log(bonusPoints)
