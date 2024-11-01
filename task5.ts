/* 5.Task: Find and Modify

Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array. */

// Task 5: Find and Modify
interface Person {
    name: string;
    age: number;
    gender: "male" | "female"; // Gender is required
}

// Create an array of objects representing people
const people2: Person[] = [
    { name: "Alice", age: 30, gender: "female" },
    { name: "Bob", age: 25, gender: "male" },
    { name: "Charlie", age: 35, gender: "male" },
    { name: "David", age: 40, gender: "male" },
    { name: "Eve", age: 28, gender: "female" }
];

// Function to find a person by name and modify their age
function findAndModifyAge(peopleArray: Person[], nameToFind: string, newAge: number): Person[] {
    for (const person of peopleArray) {
        if (person.name === nameToFind) {
            person.age = newAge; // Modify age
            break; // Exit loop after finding and modifying
        }
    }
    return peopleArray;
}

// Update age of Bob
const updatedPeople = findAndModifyAge(people, "Bob", 26); // Change Bob's age to 26
console.log(updatedPeople);

