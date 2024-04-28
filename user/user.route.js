import express from 'express';
import { addUser, getUsersList } from './user.controller.js';

const userRouter = express.Router();

userRouter.post('/', addUser);
userRouter.get('/', getUsersList);

export default userRouter;