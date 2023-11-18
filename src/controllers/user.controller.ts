import {Request, Response} from "express";
import {UserServices} from "../services/user.service";
import HttpStatus from "../enums/httpStatus.enum";

export class UserController{
  static async signup(req: Request, res: Response) {
    try {
      console.log("working")
      const checkEmail = await UserServices.getUserByEmail(req.body.email);
      if (checkEmail) {
        return res.status(HttpStatus.BAD_REQUEST).json({ success: false, data: "Email is already in use" });
      }
      const createUser = await UserServices.createUser(req.body);
      console.log(createUser);
      return res.status(HttpStatus.OK).json({ success: true, data: createUser });
    } catch (err: any) {
      console.log(err)
      return res.status(HttpStatus.SERVER_ERR0R).json({ success: false, message: err});
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const checkUser = await UserServices.userLogin(req.body.email, req.body.password);
      if (!checkUser) {
        return res.status(HttpStatus.UNAUTHORIZED).json({ success: false, data: "Please provide valid credentials" });
      }
      return res.status(HttpStatus.OK).json({ success: true, data: checkUser });
    } catch (err: any) {
      return res.status(HttpStatus.SERVER_ERR0R).json({ success: false, message: err});
    }
  }




}