const amount = 12

if (amount < 10) {
  console.log("small number")
} else {
  console.log("large number")
}
console.log(`hello world`)

/*__dirname - path to current directory
__filename - file name
require - function to use modules (CommonJS)
module - info about current module (file)
process - info about env where the program is being executed
*/

console.log(__dirname)

setInterval(() => {
  console.log("hello world"), 2000
})
