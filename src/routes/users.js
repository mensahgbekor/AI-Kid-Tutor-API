import { Router } from "express";
import { loginUser, registerUser } from "../controllers/users.js";


const userRouter = Router();

userRouter.post("/users/register", registerUser);
userRouter.post("/users/login", loginUser);

export default userRouter;