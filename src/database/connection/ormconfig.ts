import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import config from "../../config";

console.log({config})

export default config.db as PostgresConnectionOptions;