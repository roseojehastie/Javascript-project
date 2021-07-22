//document.getElementById("count-el").innerText = 5

// let count = 0
// console.log(count)

// //1.create a variable, myAge and set the "value" to your age 
// let myAge = 30
// //2. Log thr myAge variable to the console
// console.log(myAge)

//let count = 5 + 9
//console.log(count)

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch
// console.log(count)

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge
// 3. Log my DogAge to the console

// let myAge = 35
// let humanDogRatio = 7
 
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

//reassigment of OR CHANGING variable 
// let count = 5
// // count = 3
// console.log(count)

//INCREMENT and decreasing VARIABLE BY REASSIGNING  
// let count = 5
// // COUNT + 1
//  count =  count + 33
//  count =  count - 33 
// console.log(count)

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 100
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 25
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 70

// console.log(bonusPoints)

// initialise the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//     console.log("The button was clicked ")
// }

//Practicing FUNCTION
// function myLogger() {
//     console.log(42)
// }
// myLogger()

//create function that logs out the sum of all the lap times

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTime () {
    // let totalTime = lap1 + lap2 + lap3
    // console.log(totalTime)

    // ALTERNATICE METHOD
//     console.log(lap1 + lap2 + lap3)
    
//     }

//  logLapTime()

let lapsCompleted = 0

//create a fucntion that increment the lapsCompleted variable with one
//Run it three times
// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// initialise the count as 0
//listen for clicks on the increament button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// write in carment case

let countEl = document.getElementById("count-el")//pass in argument

console.log(countEl)

let count = 0

function increment() {
    // console.log("clicked")
    count = count + 1
    countEl.innerText = count
    
}


