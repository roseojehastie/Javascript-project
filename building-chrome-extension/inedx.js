
// log out "button click!"when the user clicks the "SAVE INPUT" button


// Refractor to addEventListener
// let inputBtn = document.getElementById("input-btn" )

let myLeads = []
const inputBtn = document.getElementById("input-btn" )
const inputEL = document.getElementById("input-el")


inputBtn.addEventListener("click", function () {
    // console.log("Button clicked from addEventListener")
    
    ///PUSH THE VALUE FROM THE INPUT INTO THE MYLEADS Array
    ///INSTEAD OF THE HARD-CODED "www.awesomeleads.com" value
    ///Google -> "get value from input field javascript"
    
    // myLeads.push("www.awesomelead.com")// ///Google -> "get value from input field javascript" answer below
    myLeads.push(inputEL.value)
    console.log(myLeads)
})






//Grab the box from DOM store it in the variable
// Add a click event listener to the box
// Log out "I want to open the box" when it is clicked

let box = document.getElementById("box")

box.addEventListener("click", function() {
    console.log("I want to open the box")
})
///create the myLeads array and inputEl
///create two variables:
///myLead -> should be assighned to an empty array
///inputEl -> should be assigned to the text input


// let myLead = [] ///moved to top of page

///refractor the code so that it uses .addEventListner()
///when you click the SAVE INPUT button

///WHEN TO SAY LET & CONST

const playerName = "Eke" //playerName is not to be reassigned
let credits = 45 //if poss. use const if not use let
///PUSH THE VALUE FROM INPUT FIELD
