import database from "./database";
import blockDaemonCore from "./blockdaemon";

export default async () => {
    await database();
    await blockDaemonCore();
}