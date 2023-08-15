// export
const db = require ("../config") 

class Books{
    fetchBooks (req,res){
        const query = 
        `
        SELECT bookId, , , 
        FROM Books;
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
}

module.exports = Books