function errorHandling  (err, req, res,next){
    if(err){
        let status = err.status || 500
        res.json ({
            status,
            msg: "Ann error has occured please try again"
        })
    }
    next()
}
module.exports = errorHandling