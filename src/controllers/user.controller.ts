import {Request, Response} from "express";
import {z} from 'zod'

import {UserValidation} from "../validations/user.validation";
import validateRequest from "../middlewares/validateRequest";

export class UserController{
  static async signup(req: Request, res: Response) {
    try {
      // const response = validateRequest(UserValidation.createUserZodSchema);
      return res.status(200).json({ success: true, data: null });
    } catch (err: any) {

      return res.status(200).json({ success: false, message: err});
    }
  }
}