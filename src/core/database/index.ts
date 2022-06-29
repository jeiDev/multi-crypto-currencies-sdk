import { createDataSource } from "../../database/connection"

export default async () => {
    await createDataSource();
}