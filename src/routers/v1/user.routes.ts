import { Router } from 'express';
import {UserController} from "../../controllers/user.controller";
import {UserValidation} from "../../validations/user.validation";
import validateRequest from "../../middlewares/validateRequest";

const router: Router = Router();

router.post(
  '/register',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.signup,
);
router.post(
  '/login',
  // UserController.validate('login'),
  UserController.login,
);
export const UserRouter: Router = router;
