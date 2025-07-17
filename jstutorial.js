// Comment
console.log("hi")

let person = {
    name: "rowzinho",
    age: 21
}

// Dot notation
person.age = 400;

// Bracket notation
let selection = "name";
person[selection] = "Ellie";

console.log(person);

let selectedColours = ['orange', 'cyan'];
console.log(selectedColours[1]);
selectedColours[2] = 44;
console.log(selectedColours);
console.log(typeof selectedColours);
console.log(selectedColours.length);

// Performing a task
function greet(inputName) {
    console.log("hi " + inputName);
}

// Calculating a value
function square(number) {
    return number*number;
}

greet("bossman")
console.log(square(12));
