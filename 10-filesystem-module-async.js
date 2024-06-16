// non-blocking = async approach

/*
 * Way the asyncronous method works is that, we need to provide a callback
 * We run that callback when we are done!
 */

const { readFile, writeFile } = require("fs")

console.log("start")

readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error)
    return
  }
  const first = result

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (error) {
      console.log(error)
      return
    }
    const second = result

    writeFile("./content/result-async.txt", `Here is the result : ${first}, ${second}`, (err, result) => {
      if (error) {
        console.log(error)
        return
      }
      console.log("done with this task")
    })
  })
})
console.log("starting with the next one")
