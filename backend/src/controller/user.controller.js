import UserService from "../services/user.service.js";

class UserController {
    constructor() {
        this.userServices = new UserService();
    }
    async upsertUser(req, res) {
        try {
            const body = req.body;
            const user = await this.userServices.upsertUser(body);
            return res.status(200).send(user)
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error !!!")
        }
    }
    async getUser(req, res) {
        try {
            const email = req.params.email;
            const user = await this.userServices.getUser(email);
            return res.status(200).send(user)
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error !!!")
        }
    }
    async loginUser(req, res) {
        try {
            const body = req.body;
            const user = await this.userServices.loginUser(body);
            if (user === 0) {
                return res.status(401).send("Invalid Credentials !!!")
            } else if (user === 1) {
                return res.status(401).send("Invalid Credentials !!!")
            } else {
                return res.status(200).send({ token: user })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error !!!")
        }
    }
    async deleteUser(req, res) {
        try {
            const email = req.params.email;
            const user = await this.userServices.deleteUser(email);
            return res.status(200).send(user)
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error !!!")
        }
    }
}

export default UserController;