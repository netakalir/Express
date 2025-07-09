import greetRouter from "./greet.js";
import userRouter from "./users.js";

export default function (app) {
    app.use("/greet", greetRouter)
    app.use("/users", userRouter)
    app.use((req, res)=>{
        res.status(404).json({msg: "route not found."});
    })
}