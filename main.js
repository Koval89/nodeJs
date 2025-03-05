const fs = require('node:fs')
const afs = require('node:fs/promises')
const path = require('node:path')
const readline = require('node:readline/promises')


const start = async () => {
    const sourceFilePath = path.join(process.cwd(), 'emails.txt')
    const targetFilePath = path.join(process.cwd(), 'gmails.txt')

    const fileStream = fs.createReadStream(sourceFilePath, 'utf-8');
    const rl = readline.createInterface({input: fileStream});

    try {
        for await (const line of rl) {
            // console.log(line.split()); //робимо лог і бачимо що у нас табуляція а не пробіли тому наступний рядок->
            const email = line.split('\t').splice(-1)[0]; // сплітуємо по табуляції, забираємо останній елемент 0 індекс
            const domainName = email.split('@').splice(-1)[0]; // оскільки та скрізь є @ то сплітуємо щераз по @, беремо другу частину splice(-1) 0 елемент

            if (domainName === 'gmail.com') {  // якщо над домен дорівнює емаіл
                await afs.appendFile(targetFilePath, `${email}\n`) // то записуємо в наш таргетФайл
            }
        }
    } finally {
        await rl.close()
    }
}

start()