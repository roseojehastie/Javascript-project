
//Arrays - ordered lists of items

let featuredPosts = [
    "Check out my Netflix clone", 
    "here is the code from my project",
    "I've just relaunched my portfolio" 
]

console.log( featuredPosts[0] )

let myExperience = [
    "Current project: I am carrying out a Master Tailoring programme with ARTs",
    "My mentor is great and the best in his filed on Savil Row",
    "Experience: My experince in fashion covers, pattern cutting, sewing, fitting & Haute Couture",
    "As a childhood, I have always enjoyed  assiting my mother ih her tailoring business",
    "Software Development: I am a software Developer, skill include, html, javascript, react, SQL and Api",
    "I have an inqusitive and curious nature, I set myself challenges and put plan in place to achieve my goals",
    "I started coding out of curiosity with the help form my mentor and going to meet-up and using discord/google meet",
    "I have developed some coding skills and still working hard to get better"
    
]
console.log( myExperience[2] )
//Array Indexes: they are 0 index

//Arrays with multiple data types
// create an array taht describes yourself. use three primitive data types you've learnt
// It should contain your name(STRING), your age(NUMBER), and whether you like pizza(boolean)

let rose = ["Rose Oje", 21, true]

//addinhg andf removing items from ARRAYS

let cards = [7, 4]

cards.push(6)//methods
console.log(cards)

//push the newMessage to the message arrays, and then log out the array
let messages = [
    "Good evening",
    "it has been a busy day",
    "I have done a lot of coding"
]

let newMessage = "Same here"

messages.push(newMessage)
console.log(messages)

//How can i remove last item from an array
messages.pop()
console.log(messages)

