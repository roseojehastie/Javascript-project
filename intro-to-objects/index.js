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

///CRAET A PERSON OBJECT THAT CONTAINS THREE KESY`: NAME, AGE AND COUNTRY.
///USE YOURSELF AS AN EXAMPLE TO SET THE VALUES FOR NAME, AGE AND COUNTRY

///CREATE A FUNCTION, logData(), TAHT USES THE PERSON ONBJECT TO CREATENA
///STRING IN THE FOLLOWING FORMAT;
/// "Eke is 35 years old and lives in Norway"

/// CALL THE logData() FUNCTION TO VERIFY THAT IT WORKS

let person = {
    name: "Eke",
    age: "35",
    country: "Norway",
    
}
    function logData(){
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)  
    }

logData()

///IF ELSE

let age = 5
///less than 6 years old -> free
/// 6 - 17 years old  ->child discount
/// 18 - 26 years old -> student discount
/// 27 - 66 years old -> senior citizen discount

///Create a conditional statement (is/else if) that logs out the discount
/// The passenger will get based upon the value of the age variable


    if (age  < 6) {
        console.log("free")
    } else if (age < 18) {
        console.log("child discount")
    } else if (age < 27) {
        console.log (" student discount")
    } else if (age < 67) {
        console.log("full prize") 
    } else {
    console.log("senior citizen discuont")
    }
       

    