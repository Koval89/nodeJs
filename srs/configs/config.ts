// в конфігах прописуємо змінні
//dotenv потрібно прописати в пакедж джейсон
import dotenv from 'dotenv'
// викликаємо dotenv і в нього є config який запускає dotenv
dotenv.config()
// змінна config
const config = {
    // описуємо що в нас буде
    PORT:process.env.PORT,  //буде PORT який ми тягнемо з process.env змінну PORT
    MONGO_URI:process.env.MONGO_URI //MONGO_URI шлях урли
}

export {
    config
}




