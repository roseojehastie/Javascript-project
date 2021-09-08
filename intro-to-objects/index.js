//objects - stroe data in-depth - composite / complex data type
// key-value pairs

let course = {
    title: "Learn css Grid for free",
    lesson: 16,
    creator: "Eke Ode Oje",
    lenght: 63,
    level: 2,
    isfree: true,
    tags: ["html", "css"]
}

console.log(course.tags) //Console.log(course["tags"]) this is called bracket notation... dot notation is prefered option


//creat an object that represents an airbnb castle listing
//it should contain at least one boolean, one string, and one array
//Log out at least twonof the kesy using the dot notation

let castle = {
    title: ["leave like a king in my castle"],
    accomodation: "Castle",
    isSuperHost: true,
    images: ["img./castle.jpg", "img/Essaouira.jpg", "img/matsumoto.jpg"],
    isfree: false,
    rating: "good",
    price: 190

}
console.log(castle.title)
console.log(castle.images)

// USE AN OBJECT TO STORE PLAYER DATA 

// METHOD ON OBJECT (Creates function inside objects known as METHODS)

// let player = {
//     name: "Eke",
//     chips: 200,
//     SayHello: function(){
//     console.log("obe")
// }

// player.SayHello()


