import { Router } from 'express'
import {UserRouter} from "./v1/user.routes";


const router: Router = Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouter,
  },
]
moduleRoutes.forEach((route) => router.use(route.path, route.route))

router.use('/v1', router)

export default router;