/* 3.Task: Function Composition

Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5. */


function square(x: number): number {
    return x * x;
}


function double(x: number): number {
    return x * 2;
}


function addFive(x: number): number {
    return x + 5;
}


function composedFunction(x: number): number {
    return addFive(double(square(x)));
}


const composedResult = composedFunction(3); 
console.log(composedResult); 

