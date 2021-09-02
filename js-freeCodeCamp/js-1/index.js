
// Grab the welcome-el paragraph amd store it in a variable called weconeEl
// Create two variables (name and greeting) that contains your name 
// and the greeting we want to render on the page
// Render the welcome message using welcoeEl.innerText

let welcomeEl = document.getElementById("welcome-el")


let name1 = "Rose "
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name1

// add am emoji to the end!
// WRITE YOUR CODE BELOW HERE
// HINT: COUNT = COUNT + 1

// welcomeEl.innerText = welcomeEl.innerText + "👋"

// or
welcomeEl.innerText += "👋"


let fatherEl = document.getElementById("father-el")

let firstline = "Father you have been faithful "

let thanks = " Thank you "


fatherEl.innerText = firstline + thanks

let beautifulEl = document.getElementById("beautiful-el")
let beau = "beautiful day "
let day = "wednesday "
beautifulEl.innerText = beau + day 
////////
practiceEl = document.getElementById("practice-el")

let prac = "practice make "
let make = "perfect 😅"
practiceEl.innerText = prac + make

fullnameEl = document.getElementById("fullname-el")
let firstName = "Rosse "
let lastName = "Oje "

fullnameEl.innerText = firstName  +  lastName
fullnameEl.innerText += " " + "🥰" + " " + "😄"


let name = "Linda"
let greet = "Hi there!" 

function greetLinda(){
   console.log(greet + ", " + name + "!")
}
greetLinda()

let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Points() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()
remove1Points()
add3Points()
console.log(myPoints)