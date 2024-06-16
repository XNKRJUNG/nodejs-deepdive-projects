/*
 * Since in Node we can intercat with the file-system, something we couldn't do when we used out JavaScript in the browser.
 * Another useful module is the path module, which allows us to interact with file paths easily.
 */

const path = require("path")

// returns my platform specific separator
console.log(path.sep)

const filePath = path.join("/content", "subfolder", "test.txt")
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

// return absolute path
// const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute)
