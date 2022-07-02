import { Router } from "express";
import { validationDTO } from "../../../middleware/dto/validate.middleware";
import { CreateApplicationDTO } from "../../../dto/application/create-application.dto";
import controllers from "../../../controllers";

const router = Router();
const applicationController = controllers.api.application;

router.post("/", [validationDTO(CreateApplicationDTO)],applicationController.create);

export default router;