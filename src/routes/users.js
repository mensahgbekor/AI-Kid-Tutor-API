import { Router } from "express";
import { loginUser, registerUser, resetPassword, updatePassword } from "../controllers/users.js";
import { isAuthenticated } from "../middlewares/authentication.js";


const userRouter = Router();

userRouter.post("/users/register", registerUser);
userRouter.post("/users/login", loginUser);
userRouter.post("/users/update-password", isAuthenticated, updatePassword);
userRouter.post("/users/reset-password", isAuthenticated, resetPassword);

export default userRouter;