// 1. create two variables, firstCard and secondCard.
//Set their values to a random number between 2-11

//2. create a variable, sum, and set it to the sum of the two

// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let firstCard = 10
// let secondCard = 4
// let cards = [ firstCard, secondCard]
//let sum = firstCard + secondCard
let cards = []
let sum = 0
// console.log(sum)
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el") //QUERYSELECTOR COULD BE OD INSTEAD OF ELEMENBYID
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
// let cardsEL = document.getElementById("newcard-el")


// else if condition

// if (sum < 21){
//     console.log("Do you want to draw a new card😟? ")
// } else if (sum === 21) {
//     console.log("Wohoo! You have got Blackjack! 🥳")
// } else if (sum > 21) {
//     console.log("You're out of the game 😭")
// } // code will run with else if (sum > 21) excluded

// check if a person is old enought to enter a night club (21)
// Log a suitable message to the console in both cases

// let age1 = 22

// if (age1 < 22){
//     console.log("You can not enter the club!")
    
// }  else  {
//     console.log("Welcome")
//}
// check if the person is elegible for birthday card from the king! (100)

// let age = 100
//note==if less thah 100     -> "Not elegible"
//else if exactly 100 -> "here is your birthday card from the king"
//else                -> "Not elegible, you have already gotten one"

// if (age < 100){
//     console.log("Not elegible")
// } else if (age === 100){
//     console.log("here is your birthday card from the king")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }

let player = {
    name: "Eke",
    chips: 145

}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//CREATE A FUNCTION, getRandomCard(), that always returns the number 5

function getRandomCard() {
   let randomNumber = Math.floor(Math.random() * 13) + 1
   if (randomNumber > 10) {
       return 10
   } else if (randomNumber === 1) {
       return 11
   } else {
       return randomNumber
   }
}
console.log(getRandomCard)

//ASSIGN VALUES IN THE STARTGAME FUCTION

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard() 
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    //generate two random numbers
    //Re-assign the cards and sum variables so that the game can start
    renderGame()
}

function renderGame() {
    //render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    cardsEl.textContent = "Cards: "
     for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
     }
   
if (sum <= 20){
    message = "Do you want to draw a new card?"
   
}else if (sum === 21) {
    message = "You have got Blackjack!"
    hasBlackjack = true
} else {
    message = "You are out of the game!"
    isAlive = false   
}
messageEl.textContent = message
// cardsEl.textContent = cards
}  

function newCard() {
    // console.log("Drawing a new card from the deck")
// 1. CREATE A CARD VARIABLE, AND HARD CODE ITS VALUE TO A NUMBER (2 -11)
// let card = 6
if (isAlive === true  && hasBlackJack === false) {
let card = getRandomCard()
// //2. ADD NEW CARD TO THE SUM VARIABLE
sum += card

//PUSH THE CARD TO THE CARDS ARRAY
cards.push(card)
// console.log(cards)
//3. CALL startGame
renderGame()
}
}
//CASH OUT THE MONEY
//INTORDUCE VARIABLE TO KEEP TRACK OF THE STATE OF THE GAME
// console.log(hasBlackjack)

//add the isAlive variable
// console.log(isAlive)




////


