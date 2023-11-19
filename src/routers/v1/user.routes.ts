import { Router } from 'express';
import {UserController} from "../../controllers/user.controller";
import {UserValidation} from "../../validations/user.validation";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";

const router: Router = Router();

router.post(
  '/register',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.signup,
);
router.post(
  '/login',
  UserController.login,
);

router.get('/profile', auth(), UserController.profile);
export const UserRouter: Router = router;
