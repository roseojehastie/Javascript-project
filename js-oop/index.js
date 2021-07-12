console.log('another trial');
//OBJECTS; craeting objects -- OBJECT IS A COLLECTING OF KET VALUE PAIRS;
//PROPERTIES IS USED TO HOLD "VALUES"
//METHODS IS DEFINE "SOME LOGIC"

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };
// circle.draw(); //object literal is a simple way of defining an "object"

// FACTORIES & CONSTRUCTION

// function createCircle(radius) {
//     return {
//     radius,
//     draw: function() {
//         console.log('draw');
//     }
// };
// }

// const circle = createCircle(1);
// circle.draw(); 

//CONSTRUCTURE FUNCTION

// function Circle(radius) {
//         console.log('this',this);
//         this.radius = radius;
//         this.draw = function () {
//             console.log('draw');
//         };
//     }


// const another = new Circle(1);

// function Circle(radius) {
//     console.log('this',this);
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     };
//}
// const Circle1 = new Function('radius',`
// this.radius = radius;
// this.draw = function() {
//     console.log('draw');
// }
// `);
// const circle = new Circle1(1);

// Circle.call({}), 1
// Circle.apply({}, 1)

// const another = new Circle(1); //IN JAVASCRIPT - functions are "OBJECTS"

// PRIMITIVE     & REFERENCE TYPES
//value types catergory: Number, Srings, Boolean, Symbol, undefined and null: REFERENCE -- objects, functions & Array


// let x =  10;
// let y = x;
// x = 20;

//PRIMITIVE are copied by their value. value type are aslo known as PRIMITIVE
//OBJECTS are copied by their reference


// let x = {value: 10};
// let y = x;
// x.value = 20;
 
// let number = 10;
// function increase(number) {
//     number++;
// }
// increase(number)
// console.log(number)

//OBJECT ----
// let obj = {value: 10};

// function increase(obj) {
//     obj.value++;
// }
// increase(obj)
// console.log(obj)

// WORKING WITH PROPERTIES OF AN OBJECT (such as adding and removing objects & eliminating them);

// function Circle(radius) {
//         this.radius = radius;
//         this.draw = function() {
//             console.log('draw');
//         }
//     }
//     const circle = new Circle(10);

//     circle.location = { x: 1 };
//     circle['location'] = { x: 1 };

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// const circle = new Circle(10);

// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }
// const keys = object.keys(circle);
// console.log(keys);

// if ('radius' in circle)
// console.log('Circle has a radius');

// PRIVATE PROPERTIES
// GETTERS AND SETTERS






