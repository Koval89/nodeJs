import express from "express"
import mongoose from "mongoose"
import {apiRouter} from "./routes/api.router";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",apiRouter)


const dbConnection = async ()=>{
    let dbCon = false
    while (!dbCon){
        try {
            console.log('Connecting to DB.....')
            await mongoose.connect()
            dbCon=true
            console.log('Database available!!!')
        }catch (e){
            console.log('Database unavailable, await 3 seconds')
            await new Promise(resolve => setTimeout(resolve,3000))
        }
    }
}

const start = async ()=>{
    try{
        await dbConnection()
        app.listen(5000,()=>{
            console.log('Server listening on 5000 port')
        })
    }catch (e){
        console.log(e)
    }
}

start()