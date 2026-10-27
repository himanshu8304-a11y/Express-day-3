import {Router} from "express";
const userRouter=Router();
import validateUser from "../middleware/validateuser.js";
import {allUsers,soloUser,createUser,updateAll,update,deleteUser} from "../controllers/users.controllers.js";

userRouter.get("/users", allUsers);
userRouter.get("/users/:id",soloUser);
userRouter.post("/create-user",validateUser,createUser);
userRouter.put("/users/:id",validateUser,updateAll);
userRouter.patch("/users/:id",update);
userRouter.delete("/users/:id", deleteUser);

export default userRouter; 