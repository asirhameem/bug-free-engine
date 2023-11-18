import {Request, Response} from "express";

export class UserController{
  static async signup(req: Request, res: Response) {
    try {
      console.log(req);

      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   return res
      //     .status(422)
      //     .json({ errors: validationErrors(errors.mapped()) });
      // }
      // console.log(req.body)
      // const postData = matchedData(req);
      // const user: UserInfo = await UserRepository.createUser(postData);
      //
      // const activationLink: string = 'http://localhost:4200';
      //
      return res.status(200).json({ success: true, data: null });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}