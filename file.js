const fs = require('fs')

// reading text 
const readText = fs.readFileSync('./read.txt', 'utf-8')
// console.log(readText)


// write text 
const writtenText = fs.writeFileSync('./write.txt','WritenOne');
console.log(writtenText)