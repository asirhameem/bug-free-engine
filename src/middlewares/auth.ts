import { NextFunction, Request, Response } from 'express'
import HttpStatus from "../enums/httpStatus.enum";
import { Secret } from 'jsonwebtoken'
import configs from "../configs";
import {jwtHelpers} from "../helpers/jwt.helper";

const auth = () =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        //get authorization token
        const token = req.headers.authorization
        if (!token) {
          throw new Error(HttpStatus.UNAUTHORIZED + 'You are not authorized')
        }
        // verify token
        let verifiedUser = null

        verifiedUser = jwtHelpers.verifyToken(token, configs.jwt.secret as Secret)

        next()
      } catch (error) {
        next(error)
      }
    }

export default auth
