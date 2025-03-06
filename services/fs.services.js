const fs = require('node:fs/promises');
const path = require('node:path');

// створюємо змінну для нашого шляху до файлу
const filePath = path.join(process.cwd(), 'db', 'users.jsone')


// створюємо функцію для читання
const read = async () => {
    try {
        const json = await fs.readFile(filePath, 'utf-8');   // звертаємось до fs його методу readFile (кладемо сюди шлях, кодування) і це все буде дорівнювати jsone який можна розпарсити якщо там щось є
        return json? JSON.parse(json):[]  // кажемо поверни мені json якщо він є? то ми його парсимо JSON.parse в інакшому випадку: поверни пустий масив []
    } catch (e) {
        console.log('Error', e.message);  // повідомлення про помилку
    }
}

// створюємо функцію для запису
const write = async (users)=>{ // async (приймає масив юзерів)
    try {
        await fs.writeFile(filePath, JSON.stringify(users, null,2))  // звертаємось до fs методу writeFile (записуємо його по тому самому шляху filePath, і вкладаємо в нього JSON.stringify(users))   null тф 2 прописуємо щоб красиво запис був у юзерах ітакше все буде в один рядок
    }catch (e){
        console.log('Error', e.message);
    }
}

// експортуємо наші функції
module.exports={
    read,
    write
}