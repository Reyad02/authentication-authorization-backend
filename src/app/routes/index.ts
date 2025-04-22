import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { LoginRoutes } from "../modules/auth/auth.routes";

const router = Router();

const routes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: LoginRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));
export default router;
