const fs = require('node:fs')
const path = require('node:path')
const readline = require('node:readline/promises')


 // fs.open('gmail.txt', 'w');

// const readStream = fs.createReadStream('emails.txt');
// const writeStream = fs.createWriteStream('gmail.txt');
//
// const rl = readline.createInterface({
//     input: readStream
// })
// rl.on('line',(line)=>{
//     if (line.includes('gmail.com')){
//         writeStream.write(line+'\n')
//     }
// })
// rl.on('close',()=>{
//     writeStream.end()
// })

fs.readFile('gmail.txt',{encoding:"utf-8"},(err,data)=>{
    if(err) throw err
    const fileOnlyGmail = data
        .split('\n')
        .map(line=>line.split(/\s+/).pop())
        .join('\n');
    fs.writeFile('onlyGmail.txt',fileOnlyGmail,(err)=>{
        if(err) throw err
    })
})