import express from "express";
import greetRouter from "./routes/greet.js";
import userRouter from "./routes/users.js"

const app = express();

app.use(greetRouter)
app.use(userRouter)



app.listen(3000,()=>{
    console.log("listening on port 3000");
})

