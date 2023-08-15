// import all models
const Users = require('./users')
const Orders = require ('./orders')
const Books = require ('./books')
const BookAuthors = require ('./bookAuthor')
// Export All Objects
module.exports = {
    users: new Users, // creating a new object or the object of a class
    orders: new Orders,
    books: new Books,
    authors: new BookAuthors
}