
//COUNT TO TEN!

// WE NEED TO SPECIFY

//WHERE SHOULD WE "START" COUNTING
//WHERE IS THE FINISH
//WHAT IS THE STEP SIZE WE SHOULD USE?

// START            FINSIH      STEP SIZE
for ( let count =10; count <21; count += 1 ) {
    console.log(count)
}
//WRITE YOUR FIRST LOOP
// CREATE A FOR LOOP THAT COUNTS FROM 10 TO 100 IN STEPS OF 10
//USE CONSOLE.LOG TO LOG OUT THE NUMBERS

for ( let count = 10; count <101; count += 10 ) {
    console.log(count)
}
for ( i = 0; i<6; i +=1) {
    console.log(i)
}
//FOR LOOP & ARRAYS
let message = [
    "Hey how is it going?",
    "I am good, thank you! How about you?",
    "All good. Been working on my portfolio lately",
    "Same here",
    "Great to hear.",
    "🥰"
]
//DRY - DO NOT REPEAT YOURSELF E.G.
// console.log([0])
// console.log([1])
// console.log([2])
// console.log([3])

// for ( let i = 0; i < 5; i += 1) {
//     console.log(message)
// } // not dynamic

for ( let i = 0; i < 5; i += 1) {
    console.log(message)
}

//WRITE YOUR FIRST ARRAY-BASED LOOP
//CREATE A FOR LOOP THAT LOGS OUT ALL THE CARDS IN THE ARRAY
//USE CARDS.LENGTH TO SPECIFY HOW LONG THE LOOP SHOULD RUN

let cards = [7, 3, 9]

for (i = 0; i <cards.length; i++) {
    console.log(cards)
}