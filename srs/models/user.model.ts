//робимо схему через яку зможемо керувати базою даних через нашу схему


import {Schema, model} from "mongoose"; // імпортуємо схема та модель з монгуса
import {IUser} from "../interfaces/user.interface";

// будуємо нову схему і вкладаємо в неї об'єкт який буде проектуватись у нашу БД
const userSchema = new Schema(
    {
        name:{type:String, required:true},  //нейм {типу стрінг, поле обов'язкове}
        surname:{type:String, required:true},
        age:{type:Number, required:true}
    },
    {timestamps:true, versionKey:false} // timestamps прописуємо щоб постійно не прописувати createdAt updatedAt , versionKey ЩОБ НЕ ПРОПИСУВАТИ ВЕРСІЙНІСТЬ
);

export const User = model<IUser>("user", userSchema)