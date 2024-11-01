/* 5.Task: Find and Modify

Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array. */
// Create an array of objects representing people (using a different name to avoid redeclaration)
var individuals = [
    {
        name: "Alice", age: 30,
        gender: "male"
    },
    {
        name: "Bob", age: 25,
        gender: "male"
    },
    {
        name: "Charlie", age: 35,
        gender: "male"
    },
    {
        name: "David", age: 40,
        gender: "male"
    },
    {
        name: "Eve", age: 28,
        gender: "male"
    }
];
// Function to find a person by name and modify their age
function findAndModifyAge(individualsArray, nameToFind, newAge) {
    for (var _i = 0, individualsArray_1 = individualsArray; _i < individualsArray_1.length; _i++) {
        var person = individualsArray_1[_i];
        if (person.name === nameToFind) {
            person.age = newAge; // Modify age
            break; // Exit loop after finding and modifying
        }
    }
    return individualsArray;
}
// Update age of Bob
var updatedIndividuals = findAndModifyAge(individuals, "Bob", 26); // Change Bob's age to 26
console.log(updatedIndividuals);
