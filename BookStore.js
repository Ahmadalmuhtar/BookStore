// let books = [[1, 'Start with why', 'Simon Sinek', 80.0, 13]
// , [2, 'But how do it know', 'J. Clark Scott', 59.9, 22]
// , [3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5]
// , [4, 'Zero to One', 'Peter Thiel', 45.0, 12]
// , [5, 'You don\'t know JS', 'Kyle Simpson', 39.9, 9]
// ]

// addBookToLibrary = (bookId, bookTitle, author, price, quantity) => {
//     let newBook = [bookId, bookTitle, author, price, quantity]
//     books.push(newBook)
//     return newBook
// }

// let addBook = addBookToLibrary(1, 'Start with why', 'Simon Sinek', 80.0, 13)
// let addBook2 = addBookToLibrary(2, 'But how do it know', 'J. Clark Scott', 59.9, 22)
// let addBook3 = addBookToLibrary(3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5)
// let addBook4 = addBookToLibrary(4, 'Zero to One', 'Peter Thiel', 45.0, 12)
// let addBook5 = addBookToLibrary(5, 'You don\'t know JS', 'Kyle Simpson', 39.9, 9)
// console.log(addBook)


// Function to display all books
const displayBooks = () => {
    for (let i = 0; i < books.length; i++) {
        console.log(`Book ${i + 1}:`);
        console.log(`Book Id: ${books[i][0]}`);
        console.log(`Title: ${books[i][1]}`);
        console.log(`Author: ${books[i][2]}`);
        console.log(`Price: ${books[i][3]}`);
        console.log(`Quantity: ${books[i][4]}`);
        console.log("--------------------");
    }
}

// Example usage
addBook(1, 'The Catcher in the Rye', 'J.D. Salinger', 15, 20);
addBook(2, 'To Kill a Mockingbird', 'Harper Lee', 12, 15);

displayBooks();
