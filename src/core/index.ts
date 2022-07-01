import database from "./database";
import blockDaemonCore from "./blockdaemon";
import protocol from "./protocol";

export default async () => {
    await database();
    await protocol();
    await blockDaemonCore();
}