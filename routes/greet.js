import express from "express";
import { getGreet } from "../controllers/greetCtrl";


const router = express.Router();


router.get("/getGreet",getGreet)


export default router;