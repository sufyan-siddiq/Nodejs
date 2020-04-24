//import module
const http = require("http")


//create a simple server
const requestHandler = (req, res) => {
    console.log(req.url)

    if (req.url === "/login") {
        res.end("Welcome to Login")
    }
    else if (req.url === "/signup") {
        res.end("Wellcom to signup")

    }
    else {
        res.end("404 PAGE NOT FOUND")
    }

}
const server = http.createServer(requestHandler)

server.listen(3001, () => {
    console.log("server is runing...")
})