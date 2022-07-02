import { Request, Response, NextFunction } from "express";
import { validateBasicAuth } from "../../helpers/auth.helper";

export default (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;
    if(!token || !validateBasicAuth(token)) return res.status(401).json({error: {message: "Unauthorized"}})
    
    next();
}