import { Request, Response, NextFunction } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export const validationDTO = (dtoClass: any) => {
    return function (req: Request, res: Response, next: NextFunction) {
        const data = plainToInstance(dtoClass, req.body, { excludeExtraneousValues: true });
        validate(data, { whitelist: true })
        .then(errors => {
            if(Array.from(errors || []).length > 0) {
                let message = Object.values(errors.pop()?.constraints || {})[0];
                return res.status(400).json({ error: {message: message || "One of the sent parameters is badly written or formed" }});
            }
            req.body = data;
            return next();
        });
    };
};
