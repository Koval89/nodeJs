import {Router} from "express"
import {userRouter} from "./user.router";

const router = Router();

//кажемо що роутер відповідає за /users і за цим посиланням буде перекидати на userRouter
router.use("/users", userRouter)

export const apiRouter = router