import express from 'express'
import { login, logout, register } from '../controllers/user.js';

const router=express.Router();

router.post("/users/new", register);
router.post("/users/login", login);

router.get("/users/logout", logout);

export default router;