import express from "express";
import { 
    getAllUsers,
    getUserById,
    createUser,
    updatedUser,
    deleteUser

 } from "../controllers/userCtrl.js";

const router = express.Router();





router.get("/getAllUsers",getAllUsers)
router.get("/getUserById/:id",getUserById)
router.post("/createUser",createUser)
router.put("/updateUser/:id",updatedUser)
router.delete("/deleteUser/:id",deleteUser)

export default router