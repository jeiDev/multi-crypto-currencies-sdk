import { Request, Response } from "express";
import { applicationRepository } from "../../../database/repositories/application";

export default async (req: Request, res: Response) => {  
    const { name, protocols } = req.body;
    const { data, error } = await applicationRepository.createApplication(name, protocols);
    if(error) return res.status(500).json(error);
    res.json(data?.toJSON());
}