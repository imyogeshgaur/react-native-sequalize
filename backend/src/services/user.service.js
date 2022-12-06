import User from "../model/user.entity.js";
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv"
import path from "path"
const localPath = path.resolve("./src/.env")
dotenv.config({ path: localPath })

class UserService {
    async upsertUser(body) {
        try {
            const { name, email, phone, password } = body;
            const newPassword = await bcrypt.hash(password, 12)
            const user = await User.findOne({ where: { email } })
            if (user) {
                const result = user.update({ name, phone, password: newPassword })
                return result;
            } else {
                const { name, email, password } = body;
                const newPassword = await bcrypt.hash(password, 12)
                const createdProduct = await User.create({ name, email, phone, password: newPassword });
                return createdProduct.dataValues;
            }
        } catch (error) {
            console.log(error)
        }
    }
    async getUser(email) {
        try {
            const user = await User.findOne({ where: { email } })
            if (user) {
                return user.dataValues;
            } else {
                return 0;
            }
        } catch (error) {
            console.log(error)
        }
    }
    async deleteUser(email) {
        try {
             await User.destroy({where:{email}})
        } catch (error) {
            console.log(error)
        }
    }
    async loginUser(body) {
        try {
            const { email, password } = body;
            const user = await User.findOne({ where: { email } })
            if (user) {
                const match = await bcrypt.compare(password, user.password);
                if (match) {
                    const token = jsonwebtoken.sign({ id: user.email }, process.env.SECRET)
                    return token;
                } else {
                    return 1;
                }
            } else {
                return 0;
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default UserService