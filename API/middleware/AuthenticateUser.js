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
module.exports = {createToken}