import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize("maindb","postgres","1242001Huan", {
    dialect: "postgres",
    host: "localhost",
});