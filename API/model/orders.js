// import Orders
class Orders{
fetchOrders (req,res){
   const query = 
   `
   SELECT orderID, userID, bookID, orderDate
   FROM Orders;
   ` 
   db.query(query,
    (err, results)=>{
       if(err) throw err
       res.json ({
           status: res.statusCode, // collects the status code from the server
           results
       })
    } )
}

selectOrder (req,res){
        const query =`
        SELECT o.orderID, o.userID, b.bookID, b.bookTitle, o.orderDate
        FROM Orders o
        INNER JOIN Books b
        using (bookID)
        WHERE orderID = ${req.params.id};
        `
        db.query(query,
            (err, result)=>{
                if(err) throw err
                res.json ({
                    status: res.statusCode,
                    result
                })
     })
    }

orderDate(req,res){
    const query = `
    SELECT orderID, userID, bookID, orderDate
    FROM Orders
    ORDER BY orderDate;
    `
    db.query(query,
        (err, result)=>{
            if(err) throw err
            res.json ({
                status: res.statusCode,
                result
            })
  })
}

updateOrder (req,res){
    const query =`
    UPDATE Orders
    SET ?
    WHERE orderID = ?;
    `
    db.query(query, 
        [req.body, req.params.id],
        (err)=>{
            if(err) throw err
            res.json ({
                status: res.statusCode,
                msg: "Order updated"
            })
        })
}

deleteOrder (req, res){
    const query =`
    UPDATE FROM Orders
    WHERE ordersID = ${req.params.id};
    `
    db.query(query, (err)=>{
            if(err) throw err
            res.json ({
                status: res.statusCode,
                msg: "User record deleted"
            })
        })
}
}

module.exports = Orders