// syncronously - non blocking
const { readFileSync, writeFileSync } = require("fs")

console.log("start")
// takes in two params
const first = readFileSync("./content/first.txt", "utf8") // default is utf8
const second = readFileSync("./content/second.txt", "utf8")

console.log(first, second)

// takes in two params: 1. file name 2. value you want to write
// if the file exists, it overwrites all the value in the existing one OR creates the file
// {flag: 'a'} is used to append into the file, mention i fyou don't want to overwrite the file
writeFileSync("./content/result-sync.txt", `Here is the result : ${first}, ${second}`, { flag: "a" })
console.log("done with this task")
console.log("starting the next one")
