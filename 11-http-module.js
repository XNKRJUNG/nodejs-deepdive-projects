/*
 * HTTP module is going to allow us to set up a web server.
 * The large part of this learning is going to be creating your own serfver and setting up the API.
 * Granted, we will use an abstraction on top of the HTTP module and that is going to be the package by the name of Express.
 */

const http = require("http")

// takes a callback-> the callback takes in two params:
// 1. request (req) obj : incoming request client is requesting from the browser
// 2. response (res) obj :  what we are sending back

// we have to explicitly say what port our server is running
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to out homepage")
    return
  }
  if (req.url === "/about") {
    res.end("Here is out short history")
    return
  }

  // if / else if / else could we used instead of 'return'

  res.end(`
    <h1>POops!<h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/'">back home</a>`)
})

server.listen(5000)
