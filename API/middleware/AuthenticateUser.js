// To authenticate a user json web token
const {sign, verify} = require ('jsonwebtoken') // sign allows us to create a token also allows us to agree and sign off approval of 
require("dotenv").config()

function createToken (user) {
    return sign ({
        email: user.emailAdd, // we are passing the user object
        userPass: user.userPass 
    },
    process.env.SECRET_KEY,{
        expiresIn: '1h'
    }
    )
}

// function verifyToken (req. res, next){
// const token = req.header["authorization"].
// }

// we create and verify the tokens

function verifyAToken(req, res, next){
    /*
    To prevent undefined error, place ?. before your property.
    */
   try{
        // Retrieve token from req.headers
        console.log("Get token from req.headers['authorization']");
        const token = req.headers["authorization"]
        console.log(token);
        next()
   }catch(e){
        res.json({
            status: res.statusCode,
            msg: e.message
        })
   }
} 
module.exports = {createToken, verifyAToken}