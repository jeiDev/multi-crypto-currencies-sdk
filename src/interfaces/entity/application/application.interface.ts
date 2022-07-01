import { ApplicationEntity } from "../../../database/entities/application.entity";
import { ErrorI } from "../../general/general.interface";

export interface CreateApplicationResponse{
    data: ApplicationEntity | null
    error: ErrorI | null
}