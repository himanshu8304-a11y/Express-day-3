import express from "express";
import userRouter from "./routers/users.routers.js";
const app= express();
const PORT = 3000;

//Global middleware
app.use(express.json());

app.use(userRouter);

app.listen(PORT,()=>{
     console.log(`Server is running on PORT ${PORT}`);
});