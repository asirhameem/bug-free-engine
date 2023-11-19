import { NextFunction, Request, Response } from 'express'
import HttpStatus from "../enums/httpStatus.enum";
import { Secret } from 'jsonwebtoken'
import configs from "../configs";
import {jwtHelpers} from "../helpers/jwt.helper";

const auth = () =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        //get authorization token
        const bearerToken = req.headers.authorization;
        const token = bearerToken?.split(' ')[1];
        if (!token) {
          throw new Error(HttpStatus.UNAUTHORIZED + 'You are not authorized')
        }
        // verify token
        let verifiedUser = jwtHelpers.verifyToken(token, configs.jwt.secret as Secret)
        console.log(verifiedUser);
        next()
      } catch (error) {
        next(error)
      }
    }

export default auth
