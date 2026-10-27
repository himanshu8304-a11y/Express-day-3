import {Router} from "express";
const userRouter=Router();
import {allUsers,soloUser,createUser,updateAll,update,deleteUser} from "../controllers/users.controllers.js";

userRouter.get("/users", allUsers);
userRouter.get("/users/:id",soloUser);
userRouter.post("/create-user",createUser);
userRouter.put("/users/:id",updateAll);
userRouter.patch("/users/:id",update);
userRouter.delete("/users/:id", deleteUser);

export default userRouter; 