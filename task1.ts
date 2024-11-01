/* 1.Task: Array Filtering and Mapping

Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. */


interface Person {
    name: string;
    age: number;
    gender: 'male' | 'female';
}

const people: Person[] = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Charlie", age: 35, gender: "male" },
    { name: "Diana", age: 28, gender: "female" },
    { name: "Eve", age: 22, gender: "female" }
];


function filterAndMapNames(peopleArray: Person[]): string[] {
    return peopleArray
        .filter(person => person.gender === 'male') 
        .map(person => person.name); 
}


const result = filterAndMapNames(people);
console.log(result); 
