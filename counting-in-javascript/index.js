
// //COUNT TO TEN!

// // WE NEED TO SPECIFY

// //WHERE SHOULD WE "START" COUNTING
// //WHERE IS THE FINISH
// //WHAT IS THE STEP SIZE WE SHOULD USE?

// // START            FINSIH      STEP SIZE
// for ( let count =10; count <21; count += 1 ) {
//     console.log(count)
// }
// //WRITE YOUR FIRST LOOP
// // CREATE A FOR LOOP THAT COUNTS FROM 10 TO 100 IN STEPS OF 10
// //USE CONSOLE.LOG TO LOG OUT THE NUMBERS

// for ( let count = 10; count <101; count += 10 ) {
//     console.log(count)
// }
// for ( i = 0; i<6; i +=1) {
//     console.log(i)
// }
// //FOR LOOP & ARRAYS
// let message = [
//     "Hey how is it going?",
//     "I am good, thank you! How about you?",
//     "All good. Been working on my portfolio lately",
//     "Same here",
//     "Great to hear.",
//     "🥰"
// ]
// //DRY - DO NOT REPEAT YOURSELF E.G.
// // console.log([0])
// // console.log([1])
// // console.log([2])
// // console.log([3])

// // for ( let i = 0; i < 5; i += 1) {
// //     console.log(message)
// // } // not dynamic

// for ( let i = 0; i < 5; i += 1) {
//     console.log(message)
// }

// //WRITE YOUR FIRST ARRAY-BASED LOOP
// //CREATE A FOR LOOP THAT LOGS OUT ALL THE CARDS IN THE ARRAY
// //USE CARDS.LENGTH TO SPECIFY HOW LONG THE LOOP SHOULD RUN

// let cards = [7, 3, 9]

// for (let i = 0; i <cards.length; i++) {
//     console.log(cards)
// }

// //FOR LOOPS, ARRAYS AND DOM

// let sentence = ["Hello", "my", "name", "is", "Eke"]
// let greetingEl = document.getElementById("greeting-el")

// //RENDER THE SENTENCE IN THE greetingEl PARAGRAPH USING A FOR LOOP AND .textContent
 
// for (let i = 0; i < sentence.length; i++) {
// greetingEL.textContent += sentence[i] + " "

// }

//RETURNING VALUES IN FUNCTION

let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}
let fastestRace = getFastestRaceTime()
console.log(fastestRace)


//GENERATING RANDOM NUMBERS WITH Math.random

// let randomNumber = Math.random() *6
//     console.log(randomNumber)
    
/*sss
    What does Math.random() do? 
    Answer: generates random numbers between 0.0000 and (1)0.99999 (not inclusive of 1)
*/
/*Math.random() *6 in which range will our randomNumber be now?
  Answer: between 0.0000 to 5.999*/

//   let flooredNumber = Math.floor(10.45632)
//     console.log(flooredNumber)
    
/* What does Math.floor() do to positive numbers
Answer: Returns the largest integer less than or equal to a given number*/

//USING Math.random() & Math.floor() TO CREAT DICE

// let randomNumber = Math.floor( Math.random() * 6 )
// console.log(randomNumber)

/* Write down all the possible values randomNumber can hold now
Answer = 0, 1, 4, 0, 1, 2, 3, 5 */

//COMPLETING OUR DICE GAME
//MODIFY THE EXPRESSION TO GET RANGE FROM 1 - 6

// let randomNumber = Math.floor( Math.random() *  6) + 1



function rollDice() {
    let randomNumber = Math.floor( Math.random() *  6) + 1
    return (randomNumber)
}
console.log(rollDice())