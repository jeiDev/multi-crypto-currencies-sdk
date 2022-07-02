import { Router } from "express";

import applicationRouter from "./application";
import applicationAuthMiddleware from "../../middleware/security/application-auth.middleware";

const router = Router();

router.use("/applications", applicationAuthMiddleware, applicationRouter);

export default router;