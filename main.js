const fs = require('node:fs/promises')
const path = require('node:path')

// const file = path.join(process.cwd(),'emails.txt')

const start = async () => {
    const filePath = path.join(process.cwd(), 'emails.txt');
    // await fs.open('gmail.txt', 'w');
   await fs.readFile(filePath,{encoding:'utf8'})

}

start();