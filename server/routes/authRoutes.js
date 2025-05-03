import express from 'express';
import { getUser, login } from '../controller/authController.js';

const AuthRouter = express.Router();

// Login Route
AuthRouter.post("/google-login", login);

// Get All Users
AuthRouter.get("/get-user", getUser);

export default AuthRouter;