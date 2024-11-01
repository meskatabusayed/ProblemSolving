/* 3.Task: Function Composition

Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5. */
function square(x) {
    return x * x;
}
function double(x) {
    return x * 2;
}
function addFive(x) {
    return x + 5;
}
function composedFunction(x) {
    return addFive(double(square(x)));
}
var composedResult = composedFunction(3);
console.log(composedResult);
