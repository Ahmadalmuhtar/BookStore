let books = [[1, 'Start with why', 'Simon Sinek', 80.0, 13]
, [2, 'But how do it know', 'J. Clark Scott', 59.9, 22]
, [3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5]
, [4, 'Zero to One', 'Peter Thiel', 45.0, 12]
, [5, 'You don\'t know JS', 'Kyle Simpson', 39.9, 9]
]

addBookToLibrary = (bookId, bookTitle, author, price, quantity) => {
    let newBook = [bookId, bookTitle, author, price, quantity]
    books.push(newBook)
    return newBook
}

let addBook = addBookToLibrary(1, 'Start with why', 'Simon Sinek', 80.0, 13)
let addBook2 = addBookToLibrary(2, 'But how do it know', 'J. Clark Scott', 59.9, 22)
let addBook3 = addBookToLibrary(3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5)
let addBook4 = addBookToLibrary(4, 'Zero to One', 'Peter Thiel', 45.0, 12)
let addBook5 = addBookToLibrary(5, 'You don\'t know JS', 'Kyle Simpson', 39.9, 9)
console.log(addBook)