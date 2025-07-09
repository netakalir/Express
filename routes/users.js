import express from "express";

const router = express.Router();

router.use(express.json());

let users =[{id:1,name:"neta"}];

router.get("/users",(req,res)=>{
    res.json(users);
});

router.post("/users",(req,res)=>{
    const newUser = {id:Date.now(),name:req.body.name};
    users.push(newUser);
    res.status(201).json(newUser);
});

router.get("/users/:id",(req,res)=>{
    const userId =  parseInt(req.params.id)
    const user = users.find(u => u.id === userId)
    if(user){
        res.json(user)
    }
    else{
        res.status(404).json({msg:"user not found"})
    }
})


export default router