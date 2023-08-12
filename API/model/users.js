const db = require ("../config") 
// This will have all the functionality
class Users {
    fetchUsers(req, res){
        const query =`
        SELECT userID, firstName, lastName, gender, userDOB,
        emailAdd, profileURL
        FROM Users; `
        db.query(query,
             (err, results)=>{
                if(err) throw err
                res.json ({
                    status: res,statusCode,
                    results
                })
             } )
    }
    fetchUser(req, res){
        const query =`
        SELECT userID, firstName, lastName, gender, userDOB,
        emailAdd, profileURL
        FROM Users
        WHERE userID = ?;`
        // th is another way to do it ${req.params.id}

        db.query(query, 
            (err, result)=>{
                if(err) throw err
                res.json ({
                    status: res.statusCode,
                    result
                })
             } )
    }
    login(req, res){
        const query = `
        `
    }
    register(req, res){
        const query = `
        `
    }
    updateUser (req, res){
        const query =`
        UPDATE Users
        SET ?
        WHERE UserID = ?;
        `
        db.query(query, 
            [req.body, req.params.id],
            (err)=>{
                if(err) throw err
                res.json ({
                    status: res.statusCode,
                    msg: "User record updated"
                })
            })
    }
    deleteUser (req, res){
        const query =`
        UPDATE FROM Users
        WHERE UserID = ${req.params.id};
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
module.exports = Users;