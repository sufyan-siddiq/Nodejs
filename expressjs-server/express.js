const express = require("express"); 

const app = express();
// const port = 3000

app.get ("/",(req,res)=>{
res.send("Welcome to home page")
})
app.get("/home",(req,res)=>{
     res.send("404 page not found")
})
app.get("/about",(req,res)=>{
    res.send("Welcome to about page")
})
app.get ("/Contact",(req,res)=>{
    res.send("This is my gmail id:<br>sufyansiddiq44@gmail.com")
})

app.listen(3000, (req, res) => {
    console.log("server is runing on port 3000")
})