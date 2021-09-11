
// // //COUNT TO TEN!

// // // WE NEED TO SPECIFY

// // //WHERE SHOULD WE "START" COUNTING
// // //WHERE IS THE FINISH
// // //WHAT IS THE STEP SIZE WE SHOULD USE?

// // // START            FINSIH      STEP SIZE
// // for ( let count =10; count <21; count += 1 ) {
// //     console.log(count)
// // }
// // //WRITE YOUR FIRST LOOP
// // // CREATE A FOR LOOP THAT COUNTS FROM 10 TO 100 IN STEPS OF 10
// // //USE CONSOLE.LOG TO LOG OUT THE NUMBERS

// // for ( let count = 10; count <101; count += 10 ) {
// //     console.log(count)
// // }
// // for ( i = 0; i<6; i +=1) {
// //     console.log(i)
// // }
// // //FOR LOOP & ARRAYS
// // let message = [
// //     "Hey how is it going?",
// //     "I am good, thank you! How about you?",
// //     "All good. Been working on my portfolio lately",
// //     "Same here",
// //     "Great to hear.",
// //     "🥰"
// // ]
// // //DRY - DO NOT REPEAT YOURSELF E.G.
// // // console.log([0])
// // // console.log([1])
// // // console.log([2])
// // // console.log([3])

// // // for ( let i = 0; i < 5; i += 1) {
// // //     console.log(message)
// // // } // not dynamic

// // for ( let i = 0; i < 5; i += 1) {
// //     console.log(message)
// // }

// // //WRITE YOUR FIRST ARRAY-BASED LOOP
// // //CREATE A FOR LOOP THAT LOGS OUT ALL THE CARDS IN THE ARRAY
// // //USE CARDS.LENGTH TO SPECIFY HOW LONG THE LOOP SHOULD RUN

// // let cards = [7, 3, 9]

// // for (let i = 0; i <cards.length; i++) {
// //     console.log(cards)
// // }

// // //FOR LOOPS, ARRAYS AND DOM

// // let sentence = ["Hello", "my", "name", "is", "Eke"]
// // let greetingEl = document.getElementById("greeting-el")

// // //RENDER THE SENTENCE IN THE greetingEl PARAGRAPH USING A FOR LOOP AND .textContent
 
// // for (let i = 0; i < sentence.length; i++) {
// // greetingEL.textContent += sentence[i] + " "

// // }

// //RETURNING VALUES IN FUNCTION

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }
// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)


// //GENERATING RANDOM NUMBERS WITH Math.random

// // let randomNumber = Math.random() *6
// //     console.log(randomNumber)
    
// /*sss
//     What does Math.random() do? 
//     Answer: generates random numbers between 0.0000 and (1)0.99999 (not inclusive of 1)
// */
// /*Math.random() *6 in which range will our randomNumber be now?
//   Answer: between 0.0000 to 5.999*/

// //   let flooredNumber = Math.floor(10.45632)
// //     console.log(flooredNumber)
    
// /* What does Math.floor() do to positive numbers
// Answer: Returns the largest integer less than or equal to a given number*/

// //USING Math.random() & Math.floor() TO CREAT DICE

// // let randomNumber = Math.floor( Math.random() * 6 )
// // console.log(randomNumber)

// /* Write down all the possible values randomNumber can hold now
// Answer = 0, 1, 4, 0, 1, 2, 3, 5 */

// //COMPLETING OUR DICE GAME
// //MODIFY THE EXPRESSION TO GET RANGE FROM 1 - 6

// // let randomNumber = Math.floor( Math.random() *  6) + 1

// /* CREATE A ROLLDICE FUNCTION.....*/

// // function rollDice() {
// //     let randomNumber = Math.floor( Math.random() *  6) + 1
// //     return (randomNumber)
// // }
// // console.log(rollDice())

// /* COMPLETING DICE FUNCTION */
// /* THE LOGICAL AND OPERATOR*/
// //LESSON 44: OUR CARD FEATURE IS BROKEN
// // LOGICAL OPERATORS LET YOU COMBINE MULTIPLE APPLICATIONS IN IF STATEMENT
// //SO THAT A PIECE PF CODE WILL ONLY RUN IF MULTIPLE CONDITIONS ARE SATISFIED
// // let hasCompleteCourse = true
// // let givesCertificate = true

// // fucntion generateCertificate() {
// // console.log("Generating certificate....")
// //} not completed

// //WRTTING LOGICAL OPERATOR

// let hasSolvedChallenge = false //(try true for results)
// let hasHintsLeft = false

// //create an if statemet that checks that both variables  are false
// // if so, run the showSolution() function

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }


// function showSolution() {
//     console.log("showing the solution.....")
// }

// // LOGICAL OR OPERATOR

// let hasCompleteCourse = false 
// let givesCertificate = true

// if (hasCompleteCourse === true || givesCertificate === true) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generate certificate.....")
// }// USED TO SHOW EXAMPLE OF NONE-USEFUL CODE

// ///CRETAE TWO BOOLEAN VARIABLES, likesDocumentaries AND likesStartups
// /// USE AN OR STATEMENT (||) TO CALL recommendMovie() IF EITHER OF THOSE VARIABLES ARE TRUE

// let likesDocumentaries = true
// let likesStartups = true

// if (likesDocumentaries === true || likesStartups === flase) {
//     recommendMovies()
// }


// function recommendMovies() {
//     console.log("Hey, check out this new film we think you will like")
// }

// ///USE A FOR LOOP TO LOG THE FOLLOWING TO THE CONSOLE

//  let largeCountries = ["Tuvalu","India","USA","Indonesai","Monaco"]
// console.log("the 5 largest country in the world")
// /*the 5 largest country in the world
// - China
// - India
// - USA
// - Indonesai
// - Pakistan
// console.log(largeCountries)
// */

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("-" + largeCountries[i])
// }
// ///pop, push, unshift, shift challenge
// largeCountries.pop()
// largeCountries.push("pakistan")
// largeCountries.shift()
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)


// //logical operators

// // if it is friday the 13th, log out this spooky face: 😱
// //Use the loical "AND OPERATOR" ->

// let dayOfMonth = 13
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("😱")
// }
// //ROCK PAPERS SCISSORS

// let hands = ["rock", "paper", "scissor"]
// //Create a fucntion that returns a random item from the array

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]

// }
// console.log(getHand() )

// //SORTING FRUITS

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

//get a function that puts the apples onto the applShelf
// and the oranges onto the orangeShelf. Use a for loop
// a conditiomal statement, and the textContent property

function sortFruit() {
    for (let i =0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}
sortFruit()

/// BUILD CHROME EXTENSION: programmmes that can enhance broswer experience e.g Honey / motion / gramally e.t.c.for gathering coupons on line 
/// LEAD TRACKER $

//ADD BUTTON AND INPUT TAG





