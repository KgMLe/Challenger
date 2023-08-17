const db = require ("../config") 
class BookAuthors{
    fetchAuthors (req,res){
        const query = 
        `
        SELECT id, authorName, authorSurname, bookID 
        FROM BookAuthor;
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

     fetchAuthor(req, res){
        const query =`
        SELECT id, authorName, authorSurname, bookID 
        FROM BookAuthor
        WHERE bookId = ?;
        `

        db.query(query, [req.params.id],
            (err, result)=>{
                if(err) throw err
                res.json ({
                    status: res.statusCode,
                    result
                })
             })
     }

     authorCat(req, res){
        const query =`
        SELECT a.id, a. authorName, a.authorSurname, b.category
        FROM BookAuthor a
        INNER JOIN Books b
        using (bookID);
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

     updateAuthor (req, res){
        const query =`
        UPDATE bookAuthor
        SET ?
        WHERE id = ?;
        `
        db.query(query, 
            [req.body, req.params.id],
            (err)=>{
                if(err) throw err
                res.json ({
                    status: res.statusCode,
                    msg: "Author updated"
                })
            })
     }

     deleteAuthor (req, res){
        const query =`
        UPDATE FROM Orders
        WHERE orderID = ${req.params.id};
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

module.exports = BookAuthors