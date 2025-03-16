import {Router} from "express"
import {userRouter} from "./user.router";

export const router = Router();

router.use("/users", userRouter)

export const apiRouter = router




