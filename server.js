const server = require('express')()
const express=  require('express')

server.set('view engine', 'ejs')

server.get("/", (req, res)=>
{
    res.render("../pages/index.ejs")
}
)

server.listen(2000, ()=>{console.log("Listening to http://localhost:2000")})