import { NextFunction, Request, Response } from 'express'
import {AnyZodObject, z, ZodEffects} from 'zod'
import HttpStatus from "../enums/httpStatus.enum";

const validateRequest =
  (schema: AnyZodObject | ZodEffects<AnyZodObject>) =>
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        await schema.parseAsync({
          body: req.body,
          query: req.query,
          params: req.params,
          cookies: req.cookies,
        })
        return next()
      } catch (error: any) {
        if (error instanceof z.ZodError) {
          const validationErrors = error.errors;
          res.status(HttpStatus.BAD_REQUEST).json({ success: false, errors: validationErrors });
        } else {
          // res.status(HttpStatus.SERVER_ERR0R).json({ success: false, error: 'Internal Server Error' });
          next(error);
        }
      }
    }

export default validateRequest;
