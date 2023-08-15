const db = require ("../config") 
const {hash, compare, hashSync} = require ('bcrypt') // allows us to encrypt the password, compare allows us to check the passwords 
// This will have all the functionality
const {createToken} = require ('../middleware/AuthenticateUser')
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
                    status: res.statusCode, // collects the status code from the server
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

        db.query(query, [req.params.id],
            (err, result)=>{
                if(err) throw err
                res.json ({
                    status: res.statusCode,
                    result
                })
             } )
    }

    // login page 
    login(req, res) {
        const {emailAdd, userPass} = req.body // pipeline
        // query
        const query = `
        SELECT firstName, lastName,
        gender, userDOB, emailAdd, userPass,
        profileUrl
        FROM Users
        WHERE emailAdd = ?;
        `
        db.query(query,[emailAdd,userPass], async (err, result)=>{
            if(err) throw err
            if(!result?.length){
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                })
            }else {
                await compare(userPass,
                    result[0].userPass,
                    (cErr, cResult)=>{
                        if(cErr) throw cErr
                        // Create a token
                        const token =
                        createToken({
                            emailAdd,
                            userPass
                        })
                        // Save a token
                        res.cookie("LegitUser",
                        token, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(cResult) {
                            res.json({
                                msg: "Logged in",
                                token,
                                result: result[0]
                            })
                        }else {
                            res.json({
                                status: res.statusCode,
                                msg:
                                "Invalid password or you have not registered"
                            })
                        }
                    })
            }
        })
    }
    
    async register(req, res){ // hash is an async because it returns a promise
        const data  = req.body // pipeline from the users data, we are getting users data
        // encrypt password
        data.userPass = await hash(data.userPass, 15)
        //payload: Data coming from the user
        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }

        // query
        const query = `
        INSERT INTO User
        SET ?;
        `
        db.query (query,[data] ,(err) =>{
            if (err) throw err// add a message instead
            // creating jwt
            let token = createToken(user)
            res.cookie ("LegitUser", token,{
            maxAge: 3600000,
            httpOnly: true // available only on the browser
            })
            res.json ({
                status: res.statusCode,
                msg: "You are now registered"
            })
        })
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