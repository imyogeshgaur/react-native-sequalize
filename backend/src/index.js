import express from "express";
import cors from "cors"
import connect from "./database/db.config.js";
const app = express();
import userRouter from "./router/user.router.js";

connect()
app.use(cors({
    origin: 'http://localhost:19006'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:19006');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Credentials');
    next();
});

app.use('/user', userRouter)


app.listen(5000)