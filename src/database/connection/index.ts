import "reflect-metadata";

import { DataSource } from "typeorm";
import ormConfig from "./ormconfig";
const AppDataSource = new DataSource(ormConfig);

export const createDataSource = async () => {
    try {
        const connection = await AppDataSource.initialize();

        return { connection };
    } catch (error) {
        return { error };
    }
};

export const dbConnection = AppDataSource;
