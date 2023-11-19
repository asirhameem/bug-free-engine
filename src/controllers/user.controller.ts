import {Request, Response} from "express";
import {UserServices} from "../services/user.service";
import HttpStatus from "../enums/httpStatus.enum";
import {jwtHelpers} from "../helpers/jwt.helper";

export class UserController {
  static async signup(req: Request, res: Response) {
    try {
      console.log("working")
      const checkEmail = await UserServices.isEmailExist(req.body.email);
      if (checkEmail) {
        return res.status(HttpStatus.BAD_REQUEST).json({success: false, data: "Email is already in use"});
      }
      const createUser: any = await UserServices.createUser(req.body);

      const userToken = jwtHelpers.createToken({
        email: createUser.email,
        userId: createUser.user_id
      }, "my-bug-free-engine", '30000');

      return res.status(HttpStatus.CREATED).json({success: true, data: {user: createUser, token: userToken}});
    } catch (err: any) {
      console.log(err)
      return res.status(HttpStatus.SERVER_ERR0R).json({success: false, message: err});
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const userInfo = await UserServices.userLogin(req.body.email, req.body.password);
      if (!userInfo) {
        return res.status(HttpStatus.UNAUTHORIZED).json({success: false, data: "Please provide valid credentials"});
      }
      const userToken = jwtHelpers.createToken({
        email: userInfo.email,
        userId: userInfo.user_id
      }, "my-bug-free-engine", '30000');

      return res.status(HttpStatus.OK).json({success: true, data: {user: userInfo, token: userToken}});
    } catch (err: any) {
      return res.status(HttpStatus.SERVER_ERR0R).json({success: false, message: err});
    }
  }


}