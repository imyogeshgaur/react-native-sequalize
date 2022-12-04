import express from "express";
import connect from "./database/db.config.js";
const app = express();
import userRouter from "./router/user.router.js";

connect()
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRouter)

app.listen(5000)