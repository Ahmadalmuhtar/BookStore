let books = [
  [1, 'Start with why', 'Simon Sinek', 80.0, 13]
, [2, 'But how do it know', 'J. Clark Scott', 59.9, 22]
, [3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5]
, [4, 'Zero to One', 'Peter Thiel', 45.0, 12]
, [5, 'You don\'t know JS', 'Kyle Simpson', 39.9, 9]
]

// for(let i = 0; i<5; i++){
//     console.log('The Book ID: ', books[i][0])
//     console.log('The Book Title: ', books[i][1])
//     console.log('Author: ', books[i][2])
// }

const sellABook = (name, quantity, balance) => {
    for(let i = 0; i<5; i++){
        if(name==books[i][1]){
            if(quantity<=books[i][4]){
                if(balance>=(books[i][3])*quantity){
                    console.log('here is your book, Thanks for your purchase!')
                    books[i][4] = books[i][4] - quantity
                    balance = balance - (books[i][3]*quantity)
                } else {
                    console.log('sorry you have insufficient balance')
                }
            } else{
                console.log('sorry we dont have these many Books')
            }
        } else{
            console.log('we dont have this book in the store')
        }
    }
}
sellABook('Clean Code', 2, 100)
sellABook('Clean Code', 1, 100)