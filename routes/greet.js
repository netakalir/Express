import express from "express";

const router = express.Router();

router.get("/greet",(req,res)=>{
    res.json({msg:"hello from/greet!"});
});



export default router;