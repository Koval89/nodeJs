import express from "express";
import mongoose from "mongoose";
import {config} from "./configs/config";
import {apiRouter} from "./routers/api.router";

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// апка використовуй на / наш apiRouter
app.use("/", apiRouter)

// створюємо функцію яка може  конектитись до БД
const dbConnection = async ()=>{
    let dbCon = false // кажемо що по замовчуванню ми не приконектились до БД
//робимо цикл доки dbCon не стане true
    while (!dbCon){
        try {
            console.log('Connecting to DB...');
                                    // звертаємось до конфігураціх і тягнемо наш монгоУрі
            await mongoose.connect(config.MONGO_URI) //з бібліотеки монгус метод конект(прописуємо урлу до БД)
            //після того як законектились змінюємо статус dbCon на true
            dbCon =true
            console.log('Database available!!!');
        }catch (e) {
            console.log('Database unavailable, wait 3 seconds');
            // робимо затримку в 3 секунди
            await new Promise(resolve => setTimeout(resolve, 3000))
        }
    }
}
// далі створюємо ще одну функцію старт
const start =async ()=>{
    try {
        //викликаємо конект до БД
        await dbConnection()
        //прописуємо на якому порті буде наш сервак, звертаємось до конфіг і тягнемо наш порт
        app.listen(config.PORT,()=>{
            console.log(`Server listening on ${config.PORT}`);
        })
    }catch (e) {
        console.log(e);
    }
}

start()