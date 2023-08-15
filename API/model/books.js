// export
const db = require ("../config") 
class Books{
    fetchBooks (req,res){
        const query = 
        `
        SELECT bookId, bookTitle, category, bookURL 
        FROM Books;
        ` 
        db.query(query,
            (err, results)=>{
               if(err) throw err
               res.json ({
                   status: res.statusCode,
                   results
               })
            })
     }

     fetchBook(req, res){
        const query =`
        SELECT bookId, bookTitle, category, bookURL 
        FROM Books
        WHERE bookId = ?;
        `

        db.query(query, [req.params.id],
            (err, result)=>{
                if(err) throw err
                res.json ({
                    status: res.statusCode,
                    result
                })
             } )
    } 
    
    orderBooks(req,res){
        const query = `
        SELECT bookId, bookTitle, category, bookURL 
        FROM Books
        ORDER BY bookTitle;
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

    updateBook (req,res){
        const query =`
        UPDATE Books
        SET ?
        WHERE bookID = ?;
        `
        db.query(query, 
            [req.body, req.params.id],
            (err)=>{
                if(err) throw err
                res.json ({
                    status: res.statusCode,
                    msg: "Book updated"
                })
            })
    }

    deleteBook (req, res){
        const query =`
        UPDATE FROM Books
        WHERE bookID = ${req.params.id};
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

module.exports = Books