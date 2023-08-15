const express = require ('express')
const bodyParser = require ('body-parser')
const routes = express.Router ()
// import all model's objects
const {users} = require ('../model')
const {orders} = require ('../model')
const {books} = require ('../model')

routes.get ('/users', (req,res)=>{
   users.fetchUsers(req, res)
})

routes.get ('/user/:id', (req, res)=>{
    users.fetchUser (req, res)
})

routes.post ('/register', bodyParser.json(),
(req, res)=>{
    users.register(req, res)
})

routes.put ('/user/:id', bodyParser.json(),
(req, res)=>{
    users.updateUser(req, res)
})

routes.patch ('/user/:id', bodyParser.json(),
(req, res)=>{
    users.updateUser(req, res)
})

routes.delete ('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})


routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})

// ORDERS ROUTES 

routes.get ('/orders', (req,res)=>{
    orders.fetchOrders(req, res)
 })
 
 routes.get ('/orders/:id', (req, res)=>{
     orders.selectOrder (req, res)
 })
 
 routes.get ('/orders/orderbydate',  (req, res)=>{
     orders.orderDate(req, res)
 })
 // update order
 routes.put ('/orders/:id', bodyParser.json(),
 (req, res)=>{
     orders.updateOrder(req, res)
 })
 
 routes.patch ('/orders/:id', bodyParser.json(),
 (req, res)=>{
     orders.updateOrder(req, res)
 })
// delete
 routes.delete ('/orders/:id', (req, res)=>{
    orders.deleteOrder(req, res)
})

//books

// select
routes.get ('/books', (req,res)=>{
    books.fetchBooks(req, res)
 })
 
 routes.get ('/books/:id', (req, res)=>{
     books.select (req, res)
 })
 
 routes.get ('/books/orderbooks',  (req, res)=>{
     books.orderBooks(req, res)
 })
 // update 
 routes.put ('/books/:id', bodyParser.json(),
 (req, res)=>{
     books.updateBook(req, res)
 })
 
 routes.patch ('/books/:id', bodyParser.json(),
 (req, res)=>{
     books.updateBook(req, res)
 })
// delete
 routes.delete ('/books/:id', (req, res)=>{
    books.deleteBook(req, res)
})

module.exports = {
    express, routes
}