import { Router } from "express";
const userRouter = Router();
import UserController from "../controller/user.controller.js"

userRouter.get("/:email", async (req, res) => {
    try {
        const userController = new UserController();
        userController.getUser(req, res);
    } catch (error) {
        console.log("Global Error  " + error);
    }
})

userRouter.post("/upsert", async (req, res) => {
    try {
        const userController = new UserController();
        userController.upsertUser(req, res);
    } catch (error) {
        console.log("Global Error  " + error);
    }

})
userRouter.post("/login", async (req, res) => {
    try {
        const userController = new UserController();
        userController.loginUser(req, res);
    } catch (error) {
        console.log("Global Error  " + error);
    }

})
userRouter.delete("/:email", async (req, res) => {
    try {
        const userController = new UserController();
        userController.deleteUser(req, res);
    } catch (error) {
        console.log("Global Error  " + error);
    }

})
export default userRouter;
