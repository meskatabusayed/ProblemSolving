/* 1.Task: Array Filtering and Mapping

Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. */
// Create an array of objects representing people
var people = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Charlie", age: 35, gender: "male" },
    { name: "Diana", age: 28, gender: "female" },
    { name: "Eve", age: 22, gender: "female" }
];
// Function to filter out females and map to names
function filterAndMapNames(peopleArray) {
    return peopleArray
        .filter(function (person) { return person.gender === 'male'; }) // Filter out females
        .map(function (person) { return person.name; }); // Map to names
}
// Get the final result
var result = filterAndMapNames(people);
console.log(result); // Output: ['Bob', 'Charlie']
