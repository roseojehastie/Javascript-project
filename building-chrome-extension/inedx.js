
// log out "button click!"when the user clicks the "SAVE INPUT" button


// Refractor to addEventListener
// let inputBtn = document.getElementById("input-btn" )

// let myLeads = [] START BY USING DUMMY ARRAY
// let myLeads = ["www.awesomeleads.com", "www.epicleadss.com", "www.wowleads.com"] // START USING DO
 let myLeads = []
const inputBtn = document.getElementById("input-btn" )
const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
console.log(ulEl)
inputBtn.addEventListener("click", function () {
    // console.log("Button clicked from addEventListener")
    
   
    ///PUSH THE VALUE FROM THE INPUT INTO THE MYLEADS Array
    ///INSTEAD OF THE HARD-CODED "www.awesomeleads.com" value
    ///Google -> "get value from input field javascript"
    
    // myLeads.push("www.awesomelead.com")// ///Google -> "get value from input field javascript" answer below
    myLeads.push(inputEL.value)
    console.log(myLeads)
    ///USE A for loop TO LOG OUT LEADS: LOG OUT ITEMS IN THE MYLEADS ARRAY USING A FOR LOOP

    //Clear out the input field
    inputEL.value = ""

    renderLeads()

})
   ///RENDER ELEMENT INTO UNORDEREDLIST....
    //1. create a variable, listItems, to hold all the HTML for the list items
    //Assign it to an empty string to begin with

function renderLeads() {
    let listItems = ""    
for (let i = 0; i < myLeads.length; i++) {
    // console.log(myLeads[i]) // Transform from logging to rendering on the page 
    // ulEl.textContent = myLeads

    /// Replace TextContent with innerHTML & use <li> tags

    // ulEl.textContent += myLeads[i] + " " // CONCATONATE PREVIOUS VALUE AND CURRENT "LEAD"
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" 

    // 2. Add the item to the listItems instead of the ulEL.innerhtml (IMPROVING )
    // listItems += "<li><a  target='_blank' href='" + myLeads + " '>" + myLeads[i] + "</a></li>" // Adding links 
    // TEMPLATE STRING
    listItems += `
    <li>
        <a  target='_blank' href='${myLeads[i]}'>
          ${myLeads[i]} 
        </a>
    </li>` // Adding links 
    ///<a  target='_blank' href='" + myLeads + " '>" + myLeads[i] + "</a>// fractored before above code
    // console.log(listItems)
}


///Lets try different method
    // Create element
    // Set text content
    // Append to ul
// const li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append()

// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems
}

//Grab the box from DOM store it in the variable
// Add a click event listener to the box
// Log out "I want to open the box" when it is clicked

// let box = document.getElementById("box")

// box.addEventListener("click", function() {
//     console.log("I want to open the box")
// })

///create the myLeads array and inputEl
///create two variables:
///myLead -> should be assighned to an empty array
///inputEl -> should be assigned to the text input


// let myLead = [] ///moved to top of page

///refractor the code so that it uses .addEventListner()
///when you click the SAVE INPUT button

///WHEN TO SAY LET & CONST

// const playerName = "Eke" //playerName is not to be reassigned
// let credits = 45 //if poss. use const if not use let
///PUSH THE VALUE FROM INPUT FIELD

/// Sample self

// let boxify = document.getElementById("boxify")

// boxify.addEventListener("click", function() {
//     console.log("Open the pink box")
// })

// Use .innerHTML to render a Buy! button inside the div

// when click render a paragraph under the button (in container)
// that says "Thank you for buying"

const contanier = document.getElementById("container")
   
contanier.innerHTML = "<button Onclick='buy()'>Buy!</button>"

function buy() {
    contanier.innerHTML += "<p> Thank you for buying!!!</p>"

    ///PRACTICE TEMPLATE RETRAL....

    const recipient = "James"
    ///create  a new variable, sender, and set it's value to your name

    const sender = "Eke Ode Oje"


    //Refactor the email string to use templete strings or template literal

    // const email = "Hey " + recipient + "! How is it going? Cheers Eke"
    const email = `
        Hey ${recipient}! 
        
        How is it going? 
        
        Cheers ${sender}`

    console.log(email)
}

