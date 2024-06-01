import express from "express"
import Data from "../models/data.js";
import { myData } from "../controllers/data.js";

const router=express.Router();

router.get("/posts",myData);

export default router;
