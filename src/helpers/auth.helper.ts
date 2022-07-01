import configs from "../config";

const user = configs.server.user;
const password = configs.server.password;
const basicToken = Buffer.from(`${user}:${password}`).toString('base64');

export const validateBasicAuth = (token: string) => (token == `Basic ${basicToken}`)