import { DataTypes, Sequelize } from "sequelize"
const sequelize = new Sequelize('testing', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  password: DataTypes.STRING,
})

export default User