import { DataSource } from "typeorm";
import ormConfig from "./ormconfig";
const AppDataSource = new DataSource(ormConfig);

export const createDataSource = () => {
    return new Promise(async (resolve) => {
        try {
            const connection = await AppDataSource.initialize();
            resolve({connection})
        } catch (error) {
            console.log({error})
        }
    })
};

export const dbConnection = AppDataSource;
