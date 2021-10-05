const server = require('express')()

server.get("/", (req, res)=>
{
    res.send("../oages/index.html")
}
)

server.listen(2000, ()=>{console.log("Listening to http://localhost:2000")})