
// log out "button click!"when the user clicks the "SAVE INPUT" button


// Refractor to addEventListener
let inputBtn = document.getElementById("input-btn" )

inputBtn.addEventListener("click", function () {
    console.log("Button clicked from addEventListener")
})