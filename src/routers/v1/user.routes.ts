import { Router } from 'express';
import {UserController} from "../../controllers/user.controller";
const router: Router = Router();

router.post(
  '/register',
  // UserController.validate('signup'),
  UserController.signup,
);
router.post(
  '/login',
  // UserController.validate('login'),
  // UserController.login,
);
export const UserRouter: Router = router;
