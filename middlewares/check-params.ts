import { validationResult } from 'express-validator'
import { NextFunction, Request, Response } from 'express'


const checkParams = (req: Request, res: Response, next: NextFunction) => {


    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    next();
}

export default checkParams