import express from "express";
import errorHandler from "./middleware/errorHandler.js";
import userRouter from "./routers/users.routers.js";
const app= express();
const PORT = 3000;

//Global middleware
app.use(express.json());

app.use(userRouter);

// 404 middleware: no route matched
app.use((req,res)=> 
{
   res.status(404).json(
   {
      Message:"These resourses does not exists!"
   });
});

app.use(errorHandler); 

app.listen(PORT,()=>{
     console.log(`Server is running on PORT ${PORT}`);
});