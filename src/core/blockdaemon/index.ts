import blockDaemon from "../../instances/blockdaemon.instance";
import subscritions from "./subscritions";

export default async () => {
    await blockDaemon.connect();
    await subscritions();
}