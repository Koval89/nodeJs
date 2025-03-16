import {Request,Response} from "express";
import {userService} from "../services/user.service";
import {IUserDTO} from "../interfaces/user.interface";

class UserController{
    public async getAll(req:Request, res:Response){
        const data = await userService.getAll()
        res.status().json(data)
    }
    public async create(req:Request,res:Response){
        const user = req.body as IUserDTO;
        const data = await userService.create(user)
        res.status().json(data)
    }
    public async getById(req:Request,res:Response){
        const {id}= req.params
        const data = await userService.getById(id)
        res.status().json(data)
    }
}

export const userController = new UserController();