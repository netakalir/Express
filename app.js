import express from "express";
import configRoutes from "./routes/configRoutes.js";


const app = express();
app.use(express.json());
configRoutes(app);




app.listen(3000,()=>{
    console.log("listening on port 3000");
})

