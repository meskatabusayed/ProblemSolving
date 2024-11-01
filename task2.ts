/* 2.Task: Object Manipulation

Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result. */


interface Book {
    title: string;
    author: string;
    year: number;
}


const books: Book[] = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
];


function getBookTitles(booksArray: Book[]): string[] {
    return booksArray.map(book => book.title); 
}


const bookTitles = getBookTitles(books);
console.log(bookTitles); 

