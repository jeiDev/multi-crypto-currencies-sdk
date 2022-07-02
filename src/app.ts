import cors from "cors";
import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import session from "express-session";
import router from "./routers";
import configs from "./config";

const app = express();
const cookieConfig = configs.cookie;
const isLive = configs.server.isLive;

if(isLive) {
    app.set('trust proxy', 1);
}

app.use(helmet());

app.use(cors());

app.use(session({
    secret : cookieConfig.secret,
    cookie: {
        maxAge: cookieConfig.maxAge,
        sameSite: 'lax',
        secure: cookieConfig.secure,
        domain: cookieConfig.domain
    }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

export default app;