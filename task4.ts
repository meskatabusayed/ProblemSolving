/* 4.Task: Sorting Objects

Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array. */


interface Car {
    make: string;
    model: string;
    year: number;
}


const cars: Car[] = [
    { make: "Toyota", model: "Camry", year: 2019 },
    { make: "Ford", model: "Mustang", year: 2021 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Chevrolet", model: "Malibu", year: 2020 },
    { make: "Nissan", model: "Altima", year: 2017 }
];


function sortCarsByYear(carsArray: Car[]): Car[] {
    return carsArray.sort((a, b) => a.year - b.year);
}


const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
